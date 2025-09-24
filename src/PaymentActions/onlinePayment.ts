"use server"
import { getMyToken } from "@/utilities/token";


export async function onlinePaymentAction(id: string , values: object) {
    try {
        const token = await getMyToken()

        if(!token) {
            return { status: "error", message: "Login First" }
        }

        if(!id) {
            return { status: "error", message: "Cart is empty" }
        }

        const env: any = (globalThis as any)?.process?.env || {}
        const callbackUrl = env.NEXTAUTH_URL || (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : "http://localhost:3000")
        const url = `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${encodeURIComponent(callbackUrl)}`

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token as string,
            },
            body: JSON.stringify(values ?? {}),
            cache: "no-store",
        })

        // Try to parse JSON; if it fails, return generic error
        let data: any = null
        try { data = await res.json() } catch { /* ignore */ }

        if (!res.ok) {
            return { status: "error", message: data?.message || `Checkout failed (${res.status})` }
        }

        return data ?? { status: "error", message: "Empty response" }
    } catch (err: any) {
        return { status: "error", message: err?.message || "Unexpected error" }
    }
}