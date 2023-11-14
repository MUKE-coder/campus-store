"use client";
import { useCart } from "@/components/CartContext";
import CategoryBanner from "@/components/CategoryBanner";
import DetailedPrdt from "@/components/DetailedPrdt";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { useState } from "react";

export default function Home() {
  // const { recentlyViewedProducts } = useCart();

  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState({});
  function updateSubCategories(newSubCats, newCat) {
    setSubCategories(newSubCats);
    setCategory(newCat);
  }
  return (
    <main>
      <Hero />
      <CategoryBanner updateSubCategories={updateSubCategories} />
      <ProductList subCats={subCategories} cat={category} />
      {/* <DetailedPrdt data={recentlyViewedProducts}/> */}
    </main>
  );
}
