import Link from 'next/link';
import React from 'react'

const categories = [
    { title: "Laptops", image: "https://ug.jumia.is/cms/gaming_laptops.png" },
    { title: "Printers", image: "https://ug.jumia.is/cms/Printers.png" },
    { title: "Data Storage", image: "https://ug.jumia.is/cms/Hard_drives.png" },
    { title: "Computer Accessories", image: "https://ug.jumia.is/cms/Pc_accessories.png" },
    { title: "Laptop Bags", image: "https://ug.jumia.is/cms/UG_WK40_ODS_POM_October_Deals_Meza_Laptop_Bags.png" },
    { title: "Back", image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/203261/1.jpg?3930" }
  ];

  const DEFAULT_IMAGE_URL = "https://utfs.io/f/aa568418-002c-40a1-b13f-a0fd7eef1353-9w6i5v.svg";

  const Card = ({ title, image, id }) => (
    <Link href={`/subcategory/${id}`} className="flex flex-col items-center shadow-sm rounded-lg min-h-[50%]">
      <div className="h-[50%] w-full">
        <img
          src={image || DEFAULT_IMAGE_URL}
          alt={title}
          className="w-full object-cover h-full rounded-sm"
        />
      </div>
      <p className="mt-2 text-center text-sm font-medium line-clamp-1">{title}</p>
    </Link>
  );
export default function SubCategoryBanners({subCategories}) {
  return (
    <div className="flex flex-col gap-6 pb-5 w-full min-h-[40vh] lg:h-[45vh] shadow-lg  rounded-lg l mt-5 ">
    <div className=" bg-[#4b158d] justify-center items-center flex">
      <h2 className="text-[#fff] text-center  font-semibold lg:tracking-normal lg:text-lg text-lg p-4">Sub Categories</h2>
   
    </div>
    <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-6 lg:gap-4 gap-2">
    {subCategories?.splice(0,6).map((category, index) => (
      <Card key={index} title={category.title} image={category.imageUrl} id={category.id}/>
    ))}
    </div>
   </div>
  )
}
