import { AddToCartAction } from "@/CartActions/addToCart";
import { clearCartAction } from "@/CartActions/clearCart";
import { getUserCartAction } from "@/CartActions/getUserCart";
import { removeCartItemAction } from "@/CartActions/removeCatItem";
import { updateCartAction } from "@/CartActions/updateCart";
import { cart } from "@/types/cart.type";
import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext({});

const CartContextProviders = ({ children }: { children: React.ReactNode }) => {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartId, setCartId] = useState("")

  async function addProductToCart(id: string) {
    try {
      const data = await AddToCartAction(id);

      getUserCart();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function removCartItem(id: string) {
    try {
      const data: cart = await removeCartItemAction(id);

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  

  async function updateCart(id: string, count: number) {
    try {
      const data = await updateCartAction(id, count);

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function cleatCart() {
    try {

      const data = await clearCartAction()

      setNumOfCartItems(0);
      setTotalCartPrice(0);
      setProducts([]);

      return data
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async function getUserCart() {
    setIsLoading(true);

    try {
      const data: cart = await getUserCartAction();

      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);
      setCartId(data.cartId)

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    }
  }

  useEffect(function () {
    getUserCart();
  }, []);

  function afterPayment() {
     setNumOfCartItems(0);
      setTotalCartPrice(0);
      setProducts([]);
      setCartId("")
  }

  return (
    <cartContext.Provider
      value={{
        numOfCartItems,
        totalCartPrice,
        products,
        isLoading,
        addProductToCart,
        removCartItem,
        updateCart,
        cleatCart,
        cartId,
        afterPayment,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProviders;
