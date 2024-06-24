import { getAllProducts } from "@/actions/products";
import AllCategories from "@/components/AllCategories";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProducts from "@/components/FeauredPrdts";
import FlashSales from "@/components/FlashSales";
import HomeBanners from "@/components/HomeBanners";
import HomeCategoryCards from "@/components/HomeCategoryCards";
import HomePage from "@/components/HomePage";
import RecentlyViewed from "@/components/RecentlyViewed";
import TopCategories from "@/components/TopCategories";
import TopOffers from "@/components/TopOffers";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page() {
  const bannerData = (await getData("banners")) || [];

  const subCategories = (await getData("sub-categories")) || [];
  const products = await getAllProducts();
  const allCategories = (await getData("categories")) || [];
  //  console.log(allCategories)
  const allCategoriesData=allCategories.splice(0 , 12)
  // const banners = bannerData.map((item) => {
  //   return {
  //     image: item.imageUrl,
  //     link: item.slug,
  //   };
  // });
  const categories = allCategories.filter((item) => item.products.length > 0);
  const flashProducts = products.filter((item) => item.type == "flash");
  // console.log(flashProducts);
  return (
    <div className="bg-[#633185] min-h-[100vh]">
      <div className="w-full min-h-[90vh] home-bg lg:px-[6rem] md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]">
      <HomeBanners categories={allCategoriesData} banners={bannerData}/>
      <HomeCategoryCards />
      </div>
      <div className="w-full min-h-[100vh] lg:px-[6rem] md:pt-[1rem] pt-[1rem]">
     <RecentlyViewed />
     <FlashSales flashProducts={flashProducts}/>
     {/* <TopCategories /> */}
     <TopOffers/>
     <AllCategories/>
     <FeaturedProducts/>

      </div>
      {/* <HomePage
        banners={banners}
        categories={categories}
        allSubCats={subCategories}
        products={products}
      /> */}
    </div>
  );
}
