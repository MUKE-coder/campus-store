"use client";

import { useState, useEffect } from "react";
import LoadingProducts from "./LoadingProducts";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { subCategories } from "@/data";
export default function CategoryBanner({
  updateSubCategories,
  categories,
  allSubCats,
}) {
  useEffect(() => {
    handleCategoryFilter(categories[0].id);
    setIsLoading(false);
  }, []);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function handleCategoryFilter(id) {
    setActiveCategoryId(id);
    const filteredCourse = allSubCats.filter((item) => item.categoryId == id);
    const category = categories.find((item) => item.id === id);
    updateSubCategories(filteredCourse, category);
  }
  // handleCategoryFilter(1);
  // console.log(subCats);
  return (
    <div className="container mx-auto py-8 overflow-hidden bg-slate-100 shadow-md rounded-md px-4 md:px-8 my-4 md:my-8">
      <h2 className="text-center font-bold mb-6 text-orange-700 text-base md:text-3xl">
        Shop By Category
      </h2>
      {isLoading ? (
        <LoadingProducts />
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-2 md:grid-cols-8 lg:grid-col-8 ">
          {categories.map((item) => {
            // const Icon = item.icon;
            const isActive = item.id === activeCategoryId;
            return (
              <button
                onClick={() => handleCategoryFilter(item.id)}
                key={item.id}
                className={cn(
                  " rounded-2xl shadow-md px-3 py-2 flex  gap-2 items-center text-center text-sm flex-col sm:text-base ",
                  isActive && "border-2 border-slate-800 "
                )}
              >
                <div className="p-2 border rounded-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    width={200}
                    height={200}
                    className="shrink-0 rounded-full object-cover text-slate-100 w-20 h-20"
                  />
                </div>
                <span className="line-clamp-1">{item.title}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
