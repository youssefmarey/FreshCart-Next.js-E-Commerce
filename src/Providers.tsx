"use client"
import { SessionProvider } from "next-auth/react"
import CartContextProviders from "./Context/CartContext"

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <SessionProvider>
      <CartContextProviders>
        {children}
      </CartContextProviders>
    </SessionProvider>
  )
}

export default Providers