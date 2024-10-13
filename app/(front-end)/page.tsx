import { Suspense } from 'react';
import { getAllProducts } from "@/actions/products";
import FlashSales from "@/components/front-end/FlashSales";
import TopOffers from "@/components/front-end/TopOffers";
import HomeCategoryCards from "@/components/front-end/HomeCategoryCards";
import HomeBanners from "@/components/HomeBanners";
import AllCategories from "@/components/AllCategories";
import { getData } from "@/lib/getData";
import { HomeSkeleton, CategorySkeleton, ProductCardsSkeleton } from '@/components/KyajaSkeleton';
import RecentlyViewed from '@/components/front-end/RecentlyViewed';
import FeaturedProducts from '@/components/front-end/FeauredPrdts';
import { Category } from '@/types';
import { getSingleStyle } from '@/actions/styles';
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

type Product = {
  id: string;
  title: string;
  imageUrl?: string;
  description?: string;
  productPrice: number;
  salePrice?: number;
  isActive: boolean;
  type: string;
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

export default async function Home() {
   const styleData:SingleStyle = await getSingleStyle("8278"); 
   const bgImageUrl = styleData?.bgImage  || "https://utfs.io/f/edeb1895-1108-49c1-a634-ece1d1630774-zgvybo.webp";
   const bgColor = styleData?.primaryColor;

  return (
    <div  style={{ backgroundColor: `${bgColor}` }} className="min-h-[100vh] pb-5 [family-name:var(--font-geist-sans)]">
      <div  className="w-full home-bg lg:px-[6rem] md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem] "
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <Suspense fallback={<HomeSkeleton />}>
          <BannerSection />
          {/* <HomeSkeleton /> */}
        </Suspense>
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