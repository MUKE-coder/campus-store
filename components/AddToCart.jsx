"use client";
import React from "react";
import { useCart } from "./CartContext";
import { GiShoppingCart } from "react-icons/gi";

export default function AddToCart({ product }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product)}
      className="flex w-[100%] py-[1rem] bg-[#f68b1e] relative drop-shadow-lg font-[600] text-white text-[15px] items-center justify-center gap-3 px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
    >
      <GiShoppingCart className="text-[24px] absolute left-10 md:block lg:block hidden" />{" "}
      ADD TO CART
    </button>
  );
}
