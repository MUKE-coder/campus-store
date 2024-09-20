import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default async function FeaturedProducts({products}:any) {
  return (
   <div className="flex flex-col gap-6 pb-5 w-full min-h-[50%]  rounded-lg l mt-5 bg-white">
    <div className="flex items-center justify-between bg-[#10A2AF]">
      <h2 className="text-[#ffff] font-semibold lg:tracking-normal lg:text-lg text-lg p-4">FeaturedProducts</h2>
      <Link className="text-[#fff] font-bold text-xs flex items-center gap-1 mr-4" href="/more/featured">SEE ALL <ChevronRight className="w-5 h-5"/></Link>
    </div>
    <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4 lg:p-5 p-3">
      {products?.splice(0,5).map((product:any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
   </div>
  );
}
