"use client";
import CategoryBanner from "@/components/CategoryBanner";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState({});
  function updateSubCategories(newSubCats, newCat) {
    setSubCategories(newSubCats);
    setCategory(newCat);
  }
  console.log(subCategories);
  return (
    <main>
      <Hero />
      <CategoryBanner updateSubCategories={updateSubCategories} />
      <ProductList subCats={subCategories} cat={category} />
    </main>
  );
}
