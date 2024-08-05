import React from 'react';
import CatBanner from '@/components/CatBanner';
import { BreadcrumbWithComponent } from '@/components/CategoryBreadCrumb';
import CategoryGrid from '@/components/SubCategoryBanners';
import CatSideBar from '@/components/CatSideBar';
import CatPrdts from '@/components/CatPrdts';
import RecentlyViewed from '@/components/RecentlyViewed';
import { getCategoryBySlug } from '@/actions/categorySlug';
import Breadcrumb from '@/components/frontend/Breadcrumb';

export default async function Page({ params: { slug } }) {
  const bgImage = 'https://ug.jumia.is/cms/COMPUTING_CAT_SX_2_1168X312.jpg'; 
  const categoryData=await getCategoryBySlug(slug)
  // console.log(categoryData)
  return (
    <div className='lg:px-[6rem] md:pt-[3rem] px-2 pt-[2rem] lg:pt-[3.2rem] min-h-[100vh]'>
     <div className='bg-gray-50 shadow-sm p-2 mb-5'>
     <Breadcrumb />
     <div className='flex items-center justify-between'>
        <h1 className='font-bold lg:text-3xl md:text-2xl text-[#1c1d1f] capitalize'>{categoryData.title}({categoryData.products.length})</h1>
        <p className='text-xs text-gray-700'>{categoryData.products.length} of {categoryData.products.length} results</p>
       </div>
     </div>

      {/* <CatBanner 
        title={categoryData.title}
        description={categoryData.description}
        bgImage={categoryData.imageUrl}
      /> */}
       {/* <CategoryGrid subCategories={categoryData.subCategories}/> */}
      
       <div className='w-full min-h-screen flex gap-1 lg:flex-row flex-col mt-5'>
       <div className='shadow-sm w-[20%] lg:block hidden'>
        <CatSideBar slug={slug} subCategories={categoryData.subCategories}/>
       </div>
       <div className='w-full lg:w-[80%]'>
        <CatPrdts products={categoryData.products} />
       </div>
       </div>
       <RecentlyViewed />
    </div>
  );
}
