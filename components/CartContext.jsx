"use client";
import { createContext, useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { products } from "@/data";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
  let cartItems = [];

  if (typeof window !== "undefined") {
    cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
  }

  const [productsData, setProductsData] = useState();
  const [cart, setCart] = useState(cartItems);
  useEffect(() => {
    try {
      setProductsData(products);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast("This product has been added to cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("This product has been removed from the cart");
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItem"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        productsData,
        addToCart,
        cart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
