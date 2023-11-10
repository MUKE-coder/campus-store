"use client";
import React, { useState } from "react";
import { useCart } from "./CartContext";
import WhatsAppChatLink from "./WhatsAppChatLink";

const Booking = () => {
  const { productDetails } = useCart();
  const prdtImg = productDetails.image;

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${prdtImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center flex flex-col gap-4">
        <h2 className="lg:text-5xl text-2xl font-[800] tracking-[2px] mb-4 ">
          Book Via Whatsapp
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <WhatsAppChatLink />
        </div>
      </div>
    </div>
  );
};

export default Booking;
