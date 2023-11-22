"use client";
import { useCart } from "@/components/CartContext";
import CategoryBanner from "@/components/CategoryBanner";
import CurrencySelector from "@/components/CurrencySelector";
import DetailedPrdt from "@/components/DetailedPrdt";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { useState } from "react";

export default function Home() {
  const { recentlyViewedProducts } = useCart();

  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState({});
  function updateSubCategories(newSubCats, newCat) {
    setSubCategories(newSubCats);
    setCategory(newCat);
  }
  return (
    <main className="relative">
      <Hero />
      <CategoryBanner updateSubCategories={updateSubCategories} />
      <ProductList subCats={subCategories} cat={category} />
      
     {
      recentlyViewedProducts.length > 0?(
        <div className="bg-white mt-[2rem] lg:m-8 p-4 rounded-md flex flex-col mx-1 gap-8 lg:mx-8">
        <h2 className="text-black text-lg font-bold ">Recently viewed</h2>
      <DetailedPrdt data={recentlyViewedProducts}/>
      </div>
      ):("")
     }
      <div className="absolute left-0 top-6">
        <CurrencySelector/>
      </div>
    </main>
  );
}
