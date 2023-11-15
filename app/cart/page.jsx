"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { generateImageUrl } from "../Utils/ImageUrl";

export default function Cart() {
  const { cart } = useCart();
  const { removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.currentPrice, 0);
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  const productTitles = cart.map((item) => item.title);

  const orderMessage = `I would like to place an order for the following \nPrice: ${roundedTotalPrice} \nTitles: ${productTitles.join(
    ", "
  )}`;

  const encodedMessage = encodeURIComponent(orderMessage);
  const phoneNumber = "+256752815998";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <section className="cart-section flex flex-col lg:flex lg:flex-row">
      <div className="cart-content w-[100%] lg:w-[70%]  bg-white flex flex-col items-center justify-center">
        <h1 className="font-[900] text-lg ">Cart({cart.length})</h1>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div className="cart-card">
                <div className="card-col-1 flex flex-col lg:flex lg:flex-row items-center gap-8 ">
                  <div className="cart-card-image">
                    <Image src={item.image} alt={item.title} fill />
                  </div>
                  <div className="cart-product-info">
                    <h1>{item.title}</h1>
                    <p>{item.brief_description}</p>
                    <div className="remove flex flex-col gap-3">
                      <h3>Shs {item.currentPrice}</h3>
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
           <img src="/shopping-cart-shopping.gif" alt="" />
          </div>
        )}
      </div>

      <div className="cart-summary w-[100%] lg:w-[30%] flex flex-col gap-3">
        <h1>CART SUMMARY</h1>
        <div className="price">
          <h3 className="text-xs">Sub Total</h3>
          <span className="text-xs">Shs {roundedTotalPrice}</span>
        </div>
        <Link
          className="px-5 py-4 bg-orange-600 rounded-md hover:bg-yellow-600 transition-all text-sm font-bold flex items-center justify-center"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout shs {roundedTotalPrice}
        </Link>
      </div>
    </section>
  );
}
