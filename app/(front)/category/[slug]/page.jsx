import React from 'react';
import CatBanner from '@/components/CatBanner';
import { BreadcrumbWithComponent } from '@/components/CategoryBreadCrumb';
import CategoryGrid from '@/components/SubCategoryBanners';
import CatSideBar from '@/components/CatSideBar';
import CatPrdts from '@/components/CatPrdts';
import RecentlyViewed from '@/components/RecentlyViewed';
import { getCategoryBySlug } from '@/actions/categorySlug';

export default async function Page({ params: { slug } }) {
  const bgImage = 'https://ug.jumia.is/cms/COMPUTING_CAT_SX_2_1168X312.jpg'; 
  const categoryData=await getCategoryBySlug(slug)
  // console.log(categoryData)
  return (
    <div className='lg:px-[6rem] md:pt-[3rem] px-2 pt-[2rem] lg:pt-[3.2rem] min-h-[100vh]'>
     <div className=''>
      <BreadcrumbWithComponent categorySlug={categoryData?.title} />
      </div>
      <CatBanner 
        title={categoryData.title}
        description={categoryData.description}
        bgImage={categoryData.imageUrl}
      />
       <CategoryGrid subCategories={categoryData.subCategories}/>

       <div className='w-full min-h-screen flex gap-1 lg:flex-row flex-col mt-5'>
       <div className='shadow-lg w-[20%] lg:block hidden'>
        <CatSideBar slug={slug}/>
       </div>
       <div className='w-full lg:w-[80%]'>
        <CatPrdts products={categoryData.products}/>
       </div>
       </div>
       <RecentlyViewed />
    </div>
  );
}
