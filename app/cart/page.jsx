"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function Cart() {
  const { cart } = useCart();
  const { removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.currentPrice, 0);
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  return (
    <section className="cart-section flex flex-col lg:flex lg:flex-row">
      <div className="cart-content w-[100%] lg:w-[70%]">
        <h1>Cart({cart.length})</h1>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div className="cart-card">
                <div className="card-col-1 flex flex-col lg:flex lg:flex-row items-center gap-8">
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
          <h2 className="text-xs lg:text-sm font-[700] text-orange-700">
            CART EMPTY ADD ITEMS😒😒
          </h2>
        )}
      </div>

      <div className="cart-summary w-[100%] lg:w-[30%]">
        <h1>CART SUMMARY</h1>
        <div className="price">
          <h3 className="text-xs">Sub Total</h3>
          <span className="text-xs">Shs {roundedTotalPrice}</span>
        </div>
        <button className="text-xs hover:bg-stone-600">
          CHECKOUT shs {roundedTotalPrice}
        </button>
      </div>
    </section>
  );
}
