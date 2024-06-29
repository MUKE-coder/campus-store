import { getData } from '@/lib/getData';
import Link from 'next/link'
import React from 'react'

export default async function CatSideBar({subCategories}) {
  // console.log(subCategories)
  return (
    <div className='p-3'>
      {/* <h2 className='font-bold text-sm '>Sub-Categories</h2> */}
    <div className='mt-2 flex flex-col gap-4'>
      {
        subCategories?.map((cat , i)=>{
          return (
            <Link key={i} className='text-sm hover:text-orange-500' href={`/subcategory/${cat.id}`}>{cat.title}</Link>
          )
        })
      }
   
    </div>
    </div>
  )
}
