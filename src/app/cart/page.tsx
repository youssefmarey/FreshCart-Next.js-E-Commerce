"use client";
import { cartContext } from "@/Context/CartContext";
import React, { useContext } from "react";
import Loading from "../loading";
import { Button } from "@/components/ui/button";
import { ProductCart } from "@/types/cart.type";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

const Cart = () => {
  const { totalCartPrice, products, isLoading, removCartItem, updateCart, cleatCart } =
    useContext(cartContext);

  async function removeItem(id: string) {
    const data = await removCartItem(id);

    if (data.status === "success") {
      toast.success("success to remove this product from cart", {
        duration: 1000,
        position: "top-center",
      });
    } else {
      toast.error("faild to remove this product in cart", {
        duration: 1000,
        position: "top-center",
      });
    }

  }

  async function updateCartItem(id: string , count: number) {
    const data = await updateCart(id , count)

     if (data.status === "success") {
      toast.success("success to update this product from cart", {
        duration: 1000,
        position: "top-center",
      });
    } else {
      toast.error("faild to update this product in cart", {
        duration: 1000,
        position: "top-center",
      });
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if(products.length == 0) {
    return <div className='flex justify-center items-center h-screen'>
        <h1 className='text-center text-3xl font-bold text-green-600'>No Data To Display It</h1>
    </div>
  }

  return (
    <div className="w-full md:w-[80%] my-10 mx-auto px-5 md:px-0 bg-slate-100">
      <div className="p-5">
        <h1 className="text-2xl font-bold">Cart Shop</h1>

        <p className="my-3 text-green-700 font-mono">
          Total Price : {totalCartPrice} EGP{" "}
        </p>

        <Button onClick={cleatCart} className="border-2 border-green-500" variant="ghost">Clear Your Cart</Button>
        <Button className="border-2 ms-4 border-green-500" variant="ghost">
          <Link href={"/payment"}  >Payment</Link>
        </Button>

        <div className="allProducts">
          {products.map(function (product: ProductCart, idx: number) {
            return (
              <div
                key={idx}
                className="flex flex-col-reverse my-5 md:my-0 gap-4 md:flex-row md:gap-0 items-center py-3 justify-between border-b-[1px] border-green-700/35"
              >
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <div>
                    <Image
                      src={product.product.imageCover}
                      height={200}
                      width={200}
                      alt={product.product.title}
                    />
                  </div>

                  <div>
                    <h1>{product.product.title}</h1>
                    <p className="text-green-700 my-3">
                      Price : {product.price}
                    </p>

                    <Button onClick={() => removeItem(product.product.id)}>
                      Remove
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button className="border-2 border-green-500" onClick={()=> updateCartItem(product.product.id , product.count + 1)} variant="ghost">+</Button>
                  <p>{product.count}</p>
                  <Button className="border-2 border-green-500" onClick={()=> updateCartItem(product.product.id , product.count - 1)} variant="ghost">-</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
