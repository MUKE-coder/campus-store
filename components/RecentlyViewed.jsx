"use client"
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useCart } from "./CartContext";

export default function RecentlyViewed() {
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
  const { recentlyViewedProducts } = useCart();
// console.log(recentlyViewedProducts)
  return (
   <div className="flex flex-col gap-6 w-full min-h-[50%] bg-white rounded-lg lg:p-5 p-3">
    <div className="flex items-center justify-between">
      <h2 className="text-[#313133] font-semibold lg:tracking-normal lg:text-lg text-sm">Your Last Viewed Products</h2>
      {/* <Link className="text-[#ff9900] font-semibold text-xs flex items-center gap-1" href="">SEE ALL <ChevronRight className="w-5 h-5"/></Link> */}
    </div>
    <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4 px-3">
      {recentlyViewedProducts?.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={false} />
      ))}
    </div>
   </div>
  );
}
