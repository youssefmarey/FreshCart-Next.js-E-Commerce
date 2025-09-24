"use server"
import { getMyToken } from "@/utilities/token";
import axios from "axios";


export async function onlinePaymentAction(id: string , values: object) {
    const token = await getMyToken()

    if(!token) {
        throw new Error("Login First")
    }

    if(!id) {
        throw new Error("Cart is empty")
    }

    const callbackUrl = process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
    const encodedUrl = encodeURIComponent(callbackUrl)
    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${encodedUrl}` , values , {
        headers: {
            token : token as string
        }

    })
    return data
}