"use server"
import { getMyToken } from "@/utilities/token";
import axios from "axios";


export async function onlinePaymentAction(id: string , values: object) {
    const token = await getMyToken()

    if(!token) {
        return { status: "error", message: "Login First" }
    }

    if(!id) {
        return { status: "error", message: "Cart is empty" }
    }

    const callbackUrl = process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
    try {
        const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${callbackUrl}` , values , {
            headers: {
                token : token as string
            }
        })
        return data
    } catch (err: any) {
        const apiMsg = err?.response?.data?.message || err?.message || "Checkout session failed"
        return { status: "error", message: apiMsg }
    }
}