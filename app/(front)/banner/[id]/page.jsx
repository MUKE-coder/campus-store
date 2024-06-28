import { getBannerProducts } from '@/actions/banner';
import BannerImage from '@/components/BannerImage';
import CatPrdts from '@/components/CatPrdts'
import RecentlyViewed from '@/components/RecentlyViewed'
import SearchSideBar from '@/components/SearchSideBar'
import Breadcrumb from '@/components/frontend/Breadcrumb';
import React from 'react'

export default async function page({params:{id}}) {
    const bannerProducts = await getBannerProducts(id);
     console.log(bannerProducts)
    if (!bannerProducts) {
      return <div>Banner not found</div>;
    }
  return (
    <div className='lg:px-[6rem] md:pt-[3rem] px-2 pt-[2rem] lg:pt-[4rem] min-h-[100vh]'>
        {/* <Breadcrumb /> */}
        <BannerImage 
        title={bannerProducts.banner.title}
        bgImage={bannerProducts.banner.imageUrl}
      />
        <div className='w-full min-h-screen flex gap-1 lg:flex-row flex-col mt-5'>
        <div className='shadow-lg w-[20%] lg:block hidden'>
         <SearchSideBar/>
        </div>
        <div className='w-full lg:w-[80%]'>
         <CatPrdts products={bannerProducts.products}/>
        </div>
        </div>
        <RecentlyViewed />
     </div>
  )
}
