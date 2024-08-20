"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { searchProducts } from '@/actions/search';
import CatPrdts from '@/components/CatPrdts';
import SearchSideBar from '@/components/SearchSideBar';
import RecentlyViewed from '@/components/RecentlyViewed';

export default function CatalogPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const searchParams = useSearchParams();
  
  const searchTerm = searchParams.get('q') || '';

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const products = await searchProducts(searchTerm);
      setSearchResults(products);
      setLoading(false);
      setNoResults(products.length === 0);
    }

    if (searchTerm) {
      fetchProducts();
    }
  }, [searchTerm]);

  if (loading) {
    return <div className=' w-full h-screen flex justify-center items-center'>
      <span className="loader"></span>
    </div>;
  }  
  return (

    <>
    {
      noResults?(
      <div className='w-full h-screen flex justify-center items-center '>
        <p className='text-base text-black animate-pulse 😒😒'>No Results found.</p>
      </div>
    ): (
        <div className='lg:px-[6rem] md:pt-[3rem] px-2 pt-[2rem] lg:pt-[3.2rem] min-h-[100vh]'>
        <div className='w-full min-h-screen flex gap-1 lg:flex-row flex-col mt-5'>
        <div className='shadow-lg w-[20%] lg:block hidden'>
         <SearchSideBar/>
        </div>
        <div className='w-full lg:w-[80%]'>
          <h2 className='line-clamp-1 text-xs font-semibold'>Results for: "{searchTerm}"</h2>
         <CatPrdts products={searchResults}/>
        </div>
        </div>
        <RecentlyViewed />
     </div>
      )
    }
    </>
  );
}
