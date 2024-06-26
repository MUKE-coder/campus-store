import { getAllProducts } from "@/actions/products";
import { getSingleStyle } from "@/actions/styles";
import AllCategories from "@/components/AllCategories";
import FeaturedProducts from "@/components/FeauredPrdts";
import FlashSales from "@/components/FlashSales";
import HomeBanners from "@/components/HomeBanners";
import HomeCategoryCards from "@/components/HomeCategoryCards";
import RecentlyViewed from "@/components/RecentlyViewed";
import TopOffers from "@/components/TopOffers";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Page() {
  const bannerData = (await getData("banners")) || [];
  const products = await getAllProducts();
  const allCategories = (await getData("categories")) || [];
  const allCategoriesData=allCategories?.splice(0 , 12)
    const flashProducts = products?.filter((item) => item.type == "flash");
    const singleStyle= await getSingleStyle()

    const backgroundImageUrl = singleStyle?.bgImage || "/homebg.png";

    const backgroundColor =  singleStyle?.secondaryColor || "#633185";

  return (
    <div style={{ backgroundColor }} className="bg-[#633185] min-h-[100vh]">
      <div className="w-full min-h-[90vh] home-bg lg:px-[6rem] md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]" style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
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
