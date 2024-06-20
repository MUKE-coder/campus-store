"use client";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { formatMoney } from "@/lib/formatMoney";

export default function CartSubTotalCard({ subTotal }) {
  const cartItems = useSelector((store) => store.cart);
  const shipping = 10.0;
  const tax = 0.0;
  const totalPrice = (
    Number(subTotal) +
    Number(shipping) +
    Number(tax)
  ).toFixed(2);

  const generateWhatsAppMessage = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    let message = `New Order Details:\n\n`;
    cartItems.forEach((item, i) => {
      const productLink = `${baseUrl}/product/${item.slug}`;
      message += `Product - ${i + 1}: ${item.title}\nQuantity: ${
        item.qty
      }\nPrice: $${formatMoney(item.salePrice)}\nLink: ${productLink}\n\n`;
    });
    message += `Total Price: $${formatMoney(totalPrice)}`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "256752815998"; // Replace with the shop owner's WhatsApp number
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="md:col-span-4 col-span-full sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden p-5 dark:text-slate-100 font-bold">
      <h2 className="text-2xl pb-3 border-b border-slate-500">Order Summary</h2>
      <p className="border-b border-slate-500 py-6 text-slate-400 font-normal">
        Thank you for shopping with us! We appreciate your business.
      </p>
      <div className="flex items-center justify-between py-4 font-bold">
        <span>Total </span>
        <span>UGX &nbsp;{formatMoney(totalPrice)}</span>
      </div>
      <div className="mt-8">
        <Button
          onClick={handleWhatsAppOrder}
          className="text-slate-50 rounded-lg py-3 px-6 font-normal bg-slate-900 dark:bg-green-600"
        >
          <FaWhatsapp className="w-5 h-5 mr-2 flex-shrink-0" />
          Place Order Via Whatsapp
        </Button>
      </div>
    </div>
  );
}
