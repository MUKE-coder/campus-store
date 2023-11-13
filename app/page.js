"use client";
// import { useCart } from "@/components/CartContext";
import CategoryBanner from "@/components/CategoryBanner";
// import DetailedPrdt from "@/components/DetailedPrdt";
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
      {/* <>
        {recentlyViewedProducts.length > 0 ? (
          <div
            className="
          min-h-[100%] bg-white p-[.8rem] lg:p-[2rem] gap-8 drop-shadow-sm rounded-md 
          roboto flex flex-col lg:mx-[2rem] mt-8"
          >
            <h2 className="text-lg font-bold tracking-[.3px] text-[#313133] ">
              You recently Viewed
            </h2>
            <DetailedPrdt data={recentlyViewedProducts} />
          </div>
        ) : (
          ""
        )}
      </> */}
    </main>
  );
}
