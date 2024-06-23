import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAllProducts } from "@/actions/products";

export default async function FeaturedProducts() {
  const products = await getAllProducts();

  const featuredProducts = products.filter((item) => item.type == "featured");

  
  return (
   <div className="flex flex-col gap-6 pb-5 w-full min-h-[50%]  rounded-lg l mt-5 bg-white">
    <div className="flex items-center justify-between  bg-[#ff9900]">
      <h2 className="text-[#313133] font-semibold lg:tracking-normal lg:text-lg text-lg p-4">FeaturedProducts</h2>
      <Link className="text-[#fff] font-bold text-xs flex items-center gap-1 mr-4" href="/more/featured">SEE ALL <ChevronRight className="w-5 h-5"/></Link>
    </div>
    <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4 lg:p-5 p-3">
      {featuredProducts?.splice(0,5).map((product) => (
        <ProductCard key={product.id} product={product} addToCart={false} />
      ))}
    </div>
   </div>
  );
}
