import { getData } from '@/lib/getData';
import Link from 'next/link';
import React from 'react'

// const categories = [
//   { title: "Men's Shoes", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/4901141/1.jpg?4062" },
//   { title: "Computers", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/652743/1.jpg?0734" },
//   { title: "Fridges & Freezers", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/7110701/2.jpg?8874" },
//   { title: "Phones", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/0941371/1.jpg?4516g" },
//   { title: "Furniture & Storage", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/328514/1.jpg?6664" },
//   { title: "Small Appliances", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/7044211/2.jpg?3257" },
//   { title: "Women's Bags", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/9062511/1.jpg?1318" },
//   { title: "Mobile Accessories", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/203261/1.jpg?3930" },
//   { title: "Men's Wears", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/2816311/1.jpg?2043" },
//   { title: "Personal Care", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/92594/1.jpg?0956" },
//   { title: "Storage", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/203261/1.jpg?1740" },
//   { title: "Kids Fashion", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/4096511/1.jpg?5233" },
// ];

export default async function AllCategories() {
  const allCategories = (await getData("categories")) || [];

  return (
    <div className='flex flex-col gap-6 w-full min-h-[20vh] lg:min-h-[50vh] bg-[#ff9900] mt-5'>
      <div className='text-xl text-center text-[#313133] font-semibold pt-4'>
      Curated For You | Shop Now
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-4 bg-[#fff]'>
        {allCategories.splice(0,12).map((category, index) => (
          <Link href={`/category/${category.slug}`} key={index} className='relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-md'>
            <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover' />
            <div className='absolute text-sm bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-center  font-bold line-clamp-1'>
              {category.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
