"use server"
import { getMyToken } from "@/utilities/token";


export async function onlinePaymentAction(id: string , values: object) {
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
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token as string,
            },
            body: JSON.stringify(values),
            cache: "no-store",
        })

        const data = await res.json()
        if (!res.ok) {
            return { status: "error", message: data?.message || "Checkout session failed" }
        }
        return data
    } catch (err: any) {
        const apiMsg = err?.message || "Checkout session failed"
        return { status: "error", message: apiMsg }
    }
}