"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { searchProducts } from '@/actions/search';
import CatPrdts from '@/components/CatPrdts';
import SearchSideBar from '@/components/SearchSideBar';
import RecentlyViewed from '@/components/RecentlyViewed';

export default function CatalogPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  
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
  const backgroundColor =  "#f68b1e" || "#f68b1e";
  
  return (
    // <div>
    //   <h1>Search Results for: "{searchTerm}"</h1>
    //   {noResults ? (
    //     <p>No products found.</p>
    //   ) : (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {searchResults.map(product => (
    //         <div key={product.id} className="border p-4 rounded-md">
    //           <h2 className="text-lg font-bold">{product.title}</h2>
    //           <p>{product.description}</p>
    //           {/* Add more product details as needed */}
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
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
