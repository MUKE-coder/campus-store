import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartImage from "../../public/empty-cart.jpg";
import { Button } from "../ui/button";
export default function EmptyCart() {
  return (
    <div className=" flex items-center flex-col justify-center ">
      <Image
        src={CartImage}
        className="w-72 h-auto"
        alt="empty cart kyaja.com"
      />
      <p className="py-2">Your Cart is Empty !, Please add something</p>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}
