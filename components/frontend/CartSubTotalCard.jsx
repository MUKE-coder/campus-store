"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { formatMoney } from "@/lib/formatMoney";
import { generateSlug } from "@/lib/generateSlug";

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
      const slug = generateSlug(item.title);
      const productLink = `${baseUrl}/product/${slug}`;
      message += `Product - ${i + 1}: ${item.title}\nQuantity: ${
        item.qty
      }\nPrice: UGX ${formatMoney(item.salePrice)}\nLink: ${productLink}\n\n`;
    });
    message += `Total Price: UGX ${formatMoney(totalPrice)}`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "256752815998"; 
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
     
      <div className="mt-4">
        <Button>
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
