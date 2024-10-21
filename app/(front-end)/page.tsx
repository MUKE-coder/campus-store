import React, { Suspense } from 'react';
 import { getAllProducts } from "@/actions/products";
 import FlashSales from "@/components/front-end/FlashSales";
 import TopOffers from "@/components/front-end/TopOffers";
 import HomeBanners from "@/components/HomeBanners";
 import AllCategories from "@/components/AllCategories";
 import { getData } from "@/lib/getData";
 import { CategorySkeleton, HomeSkeleton,ProductCardsSkeleton } from '@/components/KyajaSkeleton';
 import RecentlyViewed from '@/components/front-end/RecentlyViewed';
 import FeaturedProducts from '@/components/front-end/FeauredPrdts';
 import { Category } from '@/types';
 import { getSingleStyle } from '@/actions/styles';
 import ProductsByCategorySection from '@/components/front-end/ProductsByCategory';
 import { getCategoryBySlug } from '@/actions/categorySlug';
import HomeCategoryCards from '@/components/front-end/HomeCategoryCards';

export const revalidate = 60;

 type SingleStyle = {
   id: string;
   primaryColor: string | null;
   secondaryColor: string | null;
   bgImage: string | null;
   footerColor: string | null;
   topBannerImage: string | null;
   createdAt: Date;
   updatedAt: Date;
 } | null

 async function fetchBannerData() {
   const [bannerData, allCategories] = await Promise.all([
     getData("banners"),
     getData("categories"),
   ]);
   const categoriesWithProducts = allCategories.filter(
     (category) => category.isActive
   );
   const allCategoriesData = categoriesWithProducts.slice(0, 12);
   return { bannerData, allCategoriesData };
 }

 async function AllCategoriesSection({bgSecondaryColor}) {
   const {  allCategoriesData } = await fetchBannerData();

   const categoriesWithProducts:Category[]= allCategoriesData.filter((category)=> category.products && category.products.length > 0
   );
   return <AllCategories categories={categoriesWithProducts} bgSecondaryColor={bgSecondaryColor}/>;
 }
 async function fetchProductsAndCategories() {
   const [products, categories] = await Promise.all([
     getAllProducts(),
     getData("categories"),
   ]);

   const flashProducts = products?.filter((item) => item.type === "flash");
   const featuredProducts = products?.filter((item) => item.type === "featured");
   const topProducts = products?.filter((item) => item.type === "topdeals");

   const categoriesWithProducts = await Promise.all(
     categories
       .filter((category) => category.isActive)
       .map(async (category) => {
         const { products } = await getCategoryBySlug(category.slug);
         return { ...category, products };
       })
   );

   return { flashProducts, featuredProducts, topProducts, categoriesWithProducts };
 }
 async function CategorySection() {
   return <HomeCategoryCards />;
 }
 export default async function Home() {
   const styleData: SingleStyle = await getSingleStyle("8278");
   const bgImageUrl = styleData?.bgImage || "https:utfs.io/f/edeb1895-1108-49c1-a634-ece1d1630774-zgvybo.webp";
   const bgColor = styleData?.primaryColor;
   const bgSecondaryColor = styleData?.secondaryColor || "#633185";

   const { bannerData, allCategoriesData } = await fetchBannerData();
   const { flashProducts, featuredProducts, topProducts,  categoriesWithProducts } = await fetchProductsAndCategories();

   const eligibleCategories = categoriesWithProducts.filter(cat => cat.products.length > 12);

   return (
     <div style={{ backgroundColor: `${bgColor}` }} className="min-h-[100vh] pb-5 [family-name:var(--font-geist-sans)]">
       <div className="w-full home-bg lg:px-[6rem] md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]"
         style={{ backgroundImage: `url(${bgImageUrl})` }}
       >
         <Suspense fallback={<HomeSkeleton />}>
           <HomeBanners banners={bannerData} categories={allCategoriesData} />
         </Suspense>
        </div>
           
         <div className="w-full min-h-[100vh] lg:px-[6rem] md:pt-[1rem] pt-[1rem]">
         <Suspense fallback={<CategorySkeleton />}>
            <CategorySection />
            </Suspense> 
         <Suspense fallback={<ProductCardsSkeleton />}>
           {flashProducts && flashProducts.length > 0 && (
             <FlashSales products={flashProducts} bgSecondaryColor={bgSecondaryColor} />
           )}
          
           {eligibleCategories.length > 0 && (
             <ProductsByCategorySection
             bgSecondaryColor={bgSecondaryColor}
               categoryName={eligibleCategories[0].title}
               products={eligibleCategories[0].products}
               categorySlug={eligibleCategories[0].slug}
             />
           )}
          
           <FeaturedProducts products={featuredProducts} bgSecondaryColor={bgSecondaryColor} />
          
           {eligibleCategories.slice(4 , 9).map((category) => (
             <React.Fragment key={category.id}>
               <ProductsByCategorySection
                 categoryName={category.title}
                 products={category.products}
                 categorySlug={category.slug}
                 bgSecondaryColor={bgSecondaryColor}
               />
             </React.Fragment>
           ))}
         </Suspense>
         <Suspense fallback={<CategorySkeleton />}>
           <AllCategoriesSection bgSecondaryColor={bgSecondaryColor}/>
         </Suspense>
         <TopOffers products={topProducts} bgSecondaryColor={bgSecondaryColor} />
         <RecentlyViewed />
       </div>
     </div>
   );
 }