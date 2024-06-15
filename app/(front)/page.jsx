import { getAllProducts } from "@/actions/products";
import HomePage from "@/components/HomePage";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page() {
  const bannerData = (await getData("banners")) || [];
  const allCategories = (await getData("categories")) || [];
  const subCategories = (await getData("sub-categories")) || [];
  const products = await getAllProducts();
  const banners = bannerData.map((item) => {
    return {
      image: item.imageUrl,
    };
  });
  const categories = allCategories.filter((item) => item.products.length > 0);
  // console.log(categories);
  return (
    <div>
      <HomePage
        banners={banners}
        categories={categories}
        allSubCats={subCategories}
        products={products}
      />
    </div>
  );
}
