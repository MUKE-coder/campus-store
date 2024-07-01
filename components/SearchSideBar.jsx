import { getData } from '@/lib/getData';
import Link from 'next/link'
import React from 'react'

export default async function SearchSideBar() {
  const allCategories = (await getData("categories")) || [];

  return (
    <div className='p-3'>
      <h2 className='font-bold text-lg '>Categories</h2>
    <div className='mt-2 flex flex-col gap-4'>
      {
        allCategories?.map((cat , i)=>{
          return (
            <Link key={i} className='text-sm hover:text-orange-500 capitalize' href={`/category/${cat.slug}`}>{cat.title}</Link>
          )
        })
      }
   
    </div>
    </div>
  )
}
