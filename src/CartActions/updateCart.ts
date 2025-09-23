"use server"

import { getMyToken } from "@/utilities/token"
import axios from "axios"


export async function updateCartAction(id: string , count: number) {
    const token = await getMyToken()

    if(!token) {
        throw new Error ("Login First")
    }

    const value = {
    count: count
}

    const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , value , {
        headers:{
            token: token as string
        }
    })

    return data
}