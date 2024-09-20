import { Suspense } from 'react';
import { getAllProducts } from "@/actions/products";
import FlashSales from "@/components/front-end/FlashSales";
import TopOffers from "@/components/front-end/TopOffers";
import HomeCategoryCards from "@/components/front-end/HomeCategoryCards";
import HomeBanners from "@/components/HomeBanners";
import AllCategories from "@/components/AllCategories";
import { getData } from "@/lib/getData";
import {  CategorySkeleton, ProductCardsSkeleton } from '@/components/KyajaSkeleton';
import RecentlyViewed from '@/components/front-end/RecentlyViewed';
import FeaturedProducts from '@/components/front-end/FeauredPrdts';
import { Category } from '@/types';

type Product = {
  id: string;
  title: string;
  imageUrl?: string;
  description?: string;
  productPrice: number;
  salePrice?: number;
  isActive: boolean;
  type: string; // Possible values: "flash", "topdeals", "featured"
  categoryId: string;
  subCategoryId: string;
};

type Banner = {
  id: string;
  title?: string;
  link?: string;
  imageUrl: string;
  previewImageUrl?: string;
  isActive: boolean;
  productIds: string[];
};

// Fetch functions for each section
async function fetchBannerData(): Promise<{ bannerData: Banner[], allCategoriesData: Category[] }> {
  const [bannerData, allCategories] = await Promise.all([
    getData("banners") as Promise<Banner[]>,
    getData("categories") as Promise<Category[]>,
  ]);
  const categoriesWithProducts = allCategories.filter(
    (category) => category.isActive
  );
  const allCategoriesData = categoriesWithProducts.slice(0, 12);
  return { bannerData, allCategoriesData };
}

async function fetchAllCategories(): Promise<Category[]> {
  return getData("categories") as Promise<Category[]>;
}

async function fetchProductsData(): Promise<{   flashProducts: Product[] | any;
  topProducts: Product[] | any;
  featuredProducts: Product[] | any; }> {
  const products = await getAllProducts();
  const flashProducts = products?.filter((item) => item.type === "flash");
  const topProducts = products?.filter((item) => item.type === "topdeals");
  const featuredProducts = products?.filter((item) => item.type === "featured");
  return { flashProducts, topProducts, featuredProducts };
}

// Components for each section
async function BannerSection() {
  const { bannerData, allCategoriesData } = await fetchBannerData();
  return <HomeBanners banners={bannerData}  categories={allCategoriesData} />;
}

async function CategorySection() {
  return <HomeCategoryCards />;
}

async function ProductSections() {
  const { flashProducts, topProducts, featuredProducts } = await fetchProductsData();
  return (
    <>
      <FlashSales products={flashProducts} />
      <TopOffers products={topProducts} />
      <FeaturedProducts products={featuredProducts} />
    </>
  );
}

async function AllCategoriesSection() {
  const categories = await fetchAllCategories();
  const categoriesWithProducts:Category[]= categories.filter((category)=> category.products && category.products.length > 0
  );
  return <AllCategories categories={categoriesWithProducts} />;
}
export default function Home() {
  return (
    <div className="bg-[#10A2AF] min-h-[100vh] pb-5 [family-name:var(--font-geist-sans)]">
      <div  className="w-full min-h-[90vh] home-bg lg:px-[6rem] md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem] lg:bg-[url('https://utfs.io/f/edeb1895-1108-49c1-a634-ece1d1630774-zgvybo.webp')] bg-[url('https://utfs.io/f/d5966dfb-89b5-41b4-9ea5-bcac489bd9ab-fvhgwz.svg')]">
        {/* <Suspense fallback={<HomeSkeleton />}> */}
          <BannerSection />
          {/* <HomeSkeleton /> */}
        {/* </Suspense> */}
        <Suspense fallback={<CategorySkeleton />}>
          <CategorySection />
          {/* <CategorySkeleton /> */}
        </Suspense>
      </div>
      <div className="w-full min-h-[100vh] lg:px-[6rem] md:pt-[1rem] pt-[1rem]">
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductSections />
        </Suspense>
        <Suspense fallback={<CategorySkeleton />}>
          <AllCategoriesSection />
        </Suspense>
        <RecentlyViewed />
      </div>
    </div>
  );
}