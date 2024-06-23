import React from "react";
import ProductCard from "../../../../components/ProductCard";
import { getAllProducts } from "@/actions/products";


export default async function Page({params:{slug}}) {
    // console.log(slug)
    const allProducts = await getAllProducts();

    const products = allProducts.filter((item) => item.type == slug);

  return (
   <div className="flex flex-col gap-6 w-full min-h-[50%] bg-white rounded-lg lg:p-5 p-3">
    <div className="flex items-center justify-between">
      <h2 className="text-[#313133] font-semibold lg:tracking-normal lg:text-lg text-sm">All products</h2>
   
    </div>
    <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4 px-3">
    {products && products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={false} />
        ))
      ) : (
        <p className="text-black text-lg animate-pulse">No products found </p>
      )}
    </div>
    <div>
   
    </div>
   </div>
  );
}
