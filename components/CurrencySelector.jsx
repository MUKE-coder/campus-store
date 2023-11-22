"use client"
import React from "react";
import { useCart } from "./CartContext";

const CurrencySelector = () => {
  const { setCurrency } = useCart();

  const handleCurrencyChange = (currency) => {
    // Update the currency in the global state
    setCurrency(currency);
  };

  return (
    <div className="fixed top-[90%] right-4 text-xs">
      <div className="relative">
        <select
          onChange={(e) => handleCurrencyChange(e.target.value)}
          className="px-8 py-2 bg-amber-800 border-[1px] bg-opacity-70 text-white rounded-md appearance-none  border-amber-500 focus:outline-none"
        >
            <option value="UGX">UGX</option>
            <option value="USD">USD</option>
            <option value="KES">KES</option>
   
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CurrencySelector;
