import Link from 'next/link';
import React from 'react';

// const categories = [
//   { title: "Payweek Deals", image: "https://ug.jumia.is/cms/UG_WK_25_PAYWEEK_THUMBNAIL.gif", bgColor: "#633185" },
//   { title: "Phones", image: "https://ug.jumia.is/cms/phonees_220X220.gif", bgColor: "#FFAD00" },
//   { title: "New Arrivals", image: "https://ug.jumia.is/cms/New_arrivalsw_220X220.gif", bgColor: "#FFE4D4" },
//   { title: "Computing", image: "https://ug.jumia.is/cms/Computing_220X220q3.gif", bgColor: "#88D1D3" },
//   { title: "Super Saver Sale", image: "https://ug.jumia.is/cms/UG_WK_25_Clearance_Thumbnailt.gif", bgColor: "#FFE4D4" },
//   { title: "Home", image: "https://ug.jumia.is/cms/Home_220X220qw.gif", bgColor: "#FFAD00" },
//   { title: "Men's Shoes", image: "https://ug.jumia.is/cms/Men-sneakers_300X300.gif", bgColor: "#FFAD00" },
//   { title: "Health & Beauty", image: "https://ug.jumia.is/cms/HEALTHBEAUTY_220X220rt.gif", bgColor: "#FFAD00" },
//   { title: "Supermarket", image: "https://ug.jumia.is/cms/Supermarket_220X220_dtfs.gif", bgColor: "#FFAD00" },
//   { title: "Appliances", image: "https://ug.jumia.is/cms/Appliances_220X220_NEW.gif", bgColor: "#88D1D3" },
//   { title: "Shipped From Abroad", image: "https://ug.jumia.is/cms/Shipped_from_Abroad_22r0X220op.gif", bgColor: "#0B56C6" },
//   { title: "Partner Picks", image: "https://ug.jumia.is/cms/Partner-Picks_300X300.gif", bgColor: "#FFAD00" },
// ];

export default function CategoryCards({categoriesData}) {
  console.log(categoriesData)
  return (
    <div className='min-h-[80vh] bg-[#633185] shadow-lg w-full lg:p-2 md:px-3 px-1 lg:rounded-sm'>
      <div className='w-full bg-white min-h-full lg:rounded-lg p-4 grid md:grid-cols-4 grid-cols-2 lg:grid-cols-6 gap-2'>
        {categoriesData?.map((category, index) => (
          <Link href={`/category/${category.slug}`} 
            key={index} 
            className='relative flex flex-col items-center justify-center rounded-lg transform transition-transform hover:scale-105'
         
          >
            <img src={category.imageUrl} alt={category.title} className='w-full h-[90%] mb-1 object-contain' />
            <div className='text-black font-medium text-sm text-center line-clamp-2'>{category.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
