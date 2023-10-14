import Image from "next/image";
import React from "react";
import image from "../public/Blaise.jpeg";
import Link from "next/link";
export default function HeroSidebar() {
  return (
    <div className="flex flex-col gap-4">
      <Link className="flex gap-4">
        <div className="">
          <Image width={50} height={50} src={image} priority />
        </div>
        <p>Category Here</p>
      </Link>
      <Link className="flex gap-4">
        <div className="">
          <Image width={50} height={50} src={image} priority />
        </div>
        <p>Category Here</p>
      </Link>
      <Link className="flex gap-4">
        <div className="relative w-full ">
          <Image width={50} height={50} src={image} priority />
        </div>
        <p>Category Here</p>
      </Link>
    </div>
  );
}
