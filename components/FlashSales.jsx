"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IoPricetag } from "react-icons/io5";

const Timer = () => {
  const [time, setTime] = useState(3600); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? "0" : ""}${hours}h : ${
      minutes < 10 ? "0" : ""
    }${minutes}m : ${seconds < 10 ? "0" : ""}${seconds}s`;
  };

  return (
    <div className="text-[#ffff] font-bold lg:text-lg text-xs">
      Time Left: {formatTime(time)}
    </div>
  );
};

export default function FlashSales({flashProducts}) {
  console.log(flashProducts)
  // const products = [
  //   {
  //     id: 1,
  //     title: "Hisense 130 Litres Gross ...",
  //     salePrice: 529000,
  //     productPrice: 799997,
  //     imageUrl: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/847215/1.jpg?3756",
  //     slug: "hisense-130-litres",
  //     subCategory: { title: "Appliances" },
  //     currency: "UGX",
  //     addToCart: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Kxd EL D68 6.088\" (3GB R...",
  //     salePrice: 169000,
  //     productPrice: 260000,
  //     imageUrl: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/0681251/1.jpg?8244",
  //     slug: "kxd-el-d68",
  //     subCategory: { title: "Mobile Phones" },
  //     currency: "UGX",
  //     addToCart: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Hip Hop Snap Button Lon...",
  //     salePrice: 26000,
  //     productPrice: 68900,
  //     imageUrl: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/5856411/1.jpg?5934",
  //     slug: "hip-hop-snap-button",
  //     subCategory: { title: "Fashion" },
  //     currency: "UGX",
  //     addToCart: false,
  //   },
  //   {
  //     id: 4,
  //     title: "24 7 FASHION Black Larg...",
  //     salePrice: 150000,
  //     productPrice: 172000,
  //     imageUrl: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/4004701/1.jpg?3925",
  //     slug: "24-7-fashion-black",
  //     subCategory: { title: "Shoes" },
  //     currency: "UGX",
  //     addToCart: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Men Waterproof Lace Up...",
  //     salePrice: 56000,
  //     productPrice: 90000,
  //     imageUrl: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/273379/1.jpg?1527",
  //     slug: "men-waterproof-lace-up",
  //     subCategory: { title: "Shoes" },
  //     currency: "UGX",
  //     addToCart: true,
  //   },
  // ];
  
  return (
   <div className="flex flex-col gap-6 w-full min-h-[50%] bg-white mt-5">
    <div className="flex items-center justify-between bg-[#e61601] p-4">
      <h2 className="text-[#ffff] font-bold lg:tracking-normal lg:text-lg text-sm flex items-center gap-1"><IoPricetag color="#ffba00"/>Flash Sales</h2>
      <Timer />
      <Link className="text-[#fff] font-bold lg:text-sm text-xs flex items-center gap-1" href="/more/flash">SEE ALL <ChevronRight className="w-5 h-5"/></Link>
    </div>
    <div  className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4 px-3">
      {flashProducts?.splice(0,5).map((product) => (
        <ProductCard key={product.id} product={product} addToCart={false} />
      ))}
    </div>
   </div>
  );
}
