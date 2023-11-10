"use client";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useCart } from "./CartContext";
import { generateImageUrl } from "@/app/Utils/ImageUrl";
const WhatsAppChatLink = () => {
  const { productDetails } = useCart();

  const imageUrl = generateImageUrl(productDetails.image);
  const orderMessage = `I would like to place an order for the following product:\n\nProduct: ${productDetails.title}\nPrice: ${productDetails.currentPrice}\nDescription: ${productDetails.description}\nImage:${imageUrl}`;
  const encodedMessage = encodeURIComponent(orderMessage);
  const phoneNumber = "+256752815998";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-600 px-[30px] py-[15px] font-bold rounded-md cursor-pointer hover:bg-orange-500 transition-all hover:text-black shadow-xl
    
    flex items-center gap-2 "
    >
      Book Via <BsWhatsapp size={19} color="white" />
    </Link>
  );
};

export default WhatsAppChatLink;
