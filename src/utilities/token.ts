"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function getMyToken() {
    const cookieStore = await cookies()

    // Support both insecure and secure cookie names (production uses __Secure- prefix)
    const rawSessionToken =
        cookieStore.get("next-auth.session-token")?.value ||
        cookieStore.get("__Secure-next-auth.session-token")?.value ||
        // Fallbacks for newer Auth.js cookie names if ever used
        cookieStore.get("authjs.session-token")?.value ||
        cookieStore.get("__Secure-authjs.session-token")?.value

    if (!rawSessionToken) {
        return undefined
    }

    try {
        const decoded = await decode({
            token: rawSessionToken,
            secret: process.env.NEXTAUTH_SECRET!
        })
        return decoded?.token
    } catch (err) {
        // If decoding fails (wrong/rotated secret or malformed token), treat as unauthenticated
        return undefined
    }
    
}