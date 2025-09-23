"use client";
import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";
import Image from "next/image";
import Logo from "./../../../../public/screens/freshcart-logo.svg";
import { signOut, useSession } from "next-auth/react";
import { Badge } from "@/components/ui/badge";
import { cartContext } from "@/Context/CartContext";

const Navbar = () => {
  const { numOfCartItems } = useContext(cartContext) as { numOfCartItems?: number };
  const { status } = useSession();
  const [open, setOpen] = useState(false);

  const authedLinks = useMemo(
    () => [
      { href: "/categories", label: "Categories" },
      { href: "/brands",     label: "Brands" },
      { href: "/allorders",  label: "All Orders" },
      { href: "/cart",       label: "Cart", isCart: true },
    ],
    []
  );

  return (
    <header className="bg-slate-100 py-4 border-b border-slate-200">
      <div className="w-full lg:w-[80%] mx-auto px-5 lg:px-0">
        {/* الصف العلوي */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {status === "authenticated" ? (
              <Link href="/"><Image src={Logo} alt="logo" priority /></Link>
            ) : (
              <Image src={Logo} alt="logo" priority />
            )}
          </div>

          {/* زر المنيو — يظهر تحت lg فقط */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/70 transition"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-xl`} />
          </button>

          {/* لينكات الديسكتوب — من lg وفوق */}
          <nav className="hidden lg:flex items-center gap-6">
            {status === "authenticated" &&
              authedLinks.map(l =>
                l.isCart ? (
                  <Link key={l.href} href={l.href} className="relative">
                    Cart
                    <Badge className="absolute -top-[60%] -right-3">{numOfCartItems ?? 0}</Badge>
                  </Link>
                ) : (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                )
              )
            }
          </nav>

          {/* Social + Auth — من lg وفوق */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-slate-700">
              <i className="fa-brands mx-2 fa-instagram" />
              <i className="fa-brands mx-2 fa-facebook" />
              <i className="fa-brands mx-2 fa-tiktok" />
              <i className="fa-brands mx-2 fa-twitter" />
              <i className="fa-brands mx-2 fa-linkedin" />
              <i className="fa-brands mx-2 fa-youtube" />
            </div>

            {status === "authenticated" ? (
              <button
                className="cursor-pointer hover:underline"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Logout
              </button>
            ) : status === "unauthenticated" ? (
              <div className="flex items-center gap-3">
                <Link href="/login" className="hover:underline">Login</Link>
                <Link href="/register" className="hover:underline">Register</Link>
              </div>
            ) : (
              <span>Loading</span>
            )}
          </div>
        </div>

        {/* منيو الموبايل — تحت lg فقط */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-3" : "max-h-0"}`}
        >
          <nav className="flex flex-col gap-3 bg-white rounded-xl p-4 shadow-sm">
            {status === "authenticated" ? (
              <>
                {authedLinks.map(l =>
                  l.isCart ? (
                    <Link key={l.href} href={l.href} className="flex items-center justify-between" onClick={() => setOpen(false)}>
                      <span>Cart</span><Badge>{numOfCartItems ?? 0}</Badge>
                    </Link>
                  ) : (
                    <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
                      {l.label}
                    </Link>
                  )
                )}
                <hr className="my-2" />
                <div className="flex items-center gap-3 text-lg">
                  <i className="fa-brands fa-instagram" />
                  <i className="fa-brands fa-facebook" />
                  <i className="fa-brands fa-tiktok" />
                  <i className="fa-brands fa-twitter" />
                  <i className="fa-brands fa-linkedin" />
                  <i className="fa-brands fa-youtube" />
                </div>
                <button
                  className="mt-2 text-left text-red-600 hover:underline"
                  onClick={() => { setOpen(false); signOut({ callbackUrl: "/login" }); }}
                >
                  Logout
                </button>
              </>
            ) : status === "unauthenticated" ? (
              <>
                <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                <Link href="/register" onClick={() => setOpen(false)}>Register</Link>
              </>
            ) : (
              <span>Loading…</span>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
