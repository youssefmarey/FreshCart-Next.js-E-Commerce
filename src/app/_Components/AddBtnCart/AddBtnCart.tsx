"use client"

import { AddToCart } from "@/CartActions/addToCart";
import { Button } from "@/components/ui/button";
import { cartContext } from "@/Context/CartContext";
import React, { useContext } from "react";
import { toast } from "sonner";

const AddBtnCart = ({id}: {id: string}) => {

  const {addProductToCart} = useContext(cartContext)

    
    async function handelAddCart() {
        const data = await addProductToCart(id)

        if(data.status === "success"){
    toast.success(data.message , {
        duration: 1000,
        position: "top-center"
    })
  }
  else {
         toast.error("faild to add this product in cart" , {
        duration: 1000,
        position: "top-center"
    })
  }
    }


  return (
    <div>
      <Button variant="default" onClick={handelAddCart} className="w-full">
        Add To Cart
      </Button>
    </div>
  );
};

export default AddBtnCart;
