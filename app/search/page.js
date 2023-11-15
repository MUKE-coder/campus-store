"use client"
import { useCart } from '@/components/CartContext'
import DetailedPrdt from '@/components/DetailedPrdt'
import React from 'react'

export default function page() {
   const {handleSearches}=useCart()
  return (
    <div className='bg-white min-h-[100vh]'> 
   {
    handleSearches.length > 0 ?(
        <div className="w-[100%] flex flex-col min-h-[100vh] bg-white p-4 rounded-md gap-8 z-40">
          <h1 className='text-lg font-[900] text-amber-500'>YOUR SEARCH .....</h1>
        <DetailedPrdt data={handleSearches}/>
        </div>
    ):(
<div className="w-[100%] flex items-start justify-center min-h-[80vh] p-[5rem] rounded-md  ">
<img src="/shopping-cart-shopping.gif" alt="" />
</div>
    )
   }
    </div>
  )
}
