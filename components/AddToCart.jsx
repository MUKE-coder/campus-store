"use client";
import React from "react";
import { useCart } from "./CartContext";
import { GiShoppingCart } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";

export default function AddToCart({ product }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product)}
      className="flex w-[100%] py-[1rem] lg:bg-[#f68b1e] md:bg-[#f68b1e] relative drop-shadow-lg font-[600] text-white text-[15px] items-center justify-center gap-3 px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
    >
      <GiShoppingCart className="text-[24px] absolute md:left-3 lg:left-10 md:block lg:block hidden" />{" "}
     <h2 className="lg:flex md:flex hidden"> ADD TO CART</h2>
     <div className="flex lg:hidden md:hidden items-center px-3 py-2 text-[#f2a51f] bg-[#fbe0da] rounded-md">
     <FaCartArrowDown size={24} />
     </div>
    </button>
  );
}
