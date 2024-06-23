"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function CartCount() {
  const cartItems = useSelector((store) => store.cart);
  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center p-3 text-sm text-center bg-transparent rounded-lg flex space-x-1 text-[#5b5b5d] dark:text-slate-100 font-semibold"
    >
      <ShoppingCart className="text-lime-700 dark:text-lime-500" />
      <span className="text-[#5b5b5d] font-semibold lg:block hidden
      ">Cart</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#f68b1e]  rounded-full top-0 left-0 end-6 dark:border-gray-900">
        {cartItems.length}
      </div>
    </Link>
  );
}
