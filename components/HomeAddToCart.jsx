"use client";
import React from "react";
import { useCart } from "./CartContext";
import { GiShoppingCart } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

export default function HomeAddToCart({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="flex gap-2 w-full mt-1">
    <button
      onClick={() => addToCart(product)}
      className="flex w-[100%] lg:w-[100%] py-[.3rem] lg:py-[.6rem] bg-[#f68b1e] relative drop-shadow-lg font-[600] text-white text-[10px] lg:text-[14px] items-center justify-center lg:px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
    >
      <GiShoppingCart className="text-[19px] absolute left-5 md:block lg:block hidden" />{" "}
     <h2> ADD TO CART</h2>
    </button>
    <Link href="tel:0752815998" className="w-[20%] shadow-lg items-center flex flex-col lg:hidden">
   <IoCall size={25} className="animate-bounce" color="orange" />
   <h2 className="text-xs font-[500] text-gray-500">Call</h2>
    </Link>
    </div>
  );
}
