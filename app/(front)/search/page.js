"use client"
import { useCart } from '@/components/CartContext'
import DetailedPrdt from '@/components/DetailedPrdt'
import React from 'react'

export default function page() {
   const {handleSearches , searchInput }=useCart()
  return (
    <div className='bg-white min-h-[100vh]'> 
   {
    handleSearches.length > 0 ?(
        <div className="w-[100%] flex flex-col min-h-[100vh] bg-white p-4 rounded-md gap-8 z-40">
          <h1 className='text-sm font-[600] text-slate-500'>About {handleSearches.length} results found for the search {searchInput}</h1>
        <DetailedPrdt data={handleSearches}/>
        </div>
    ):(
<div className="w-[100%] flex items-start justify-center min-h-[80vh] p-[2rem] rounded-md  ">
<h2 className='text-red-800 font-bold text-lg'>No Matching searches found... 😞😞</h2>
</div>
    )
   }
    </div>
  )
}
