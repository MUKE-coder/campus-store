"use client";

import { useState, useEffect } from "react";
import { categories, subCategories } from "@/data";
import LoadingProducts from "./LoadingProducts";
export default function CategoryBanner({ updateSubCategories }) {
  useEffect(() => {
    handleCategoryFilter(1);
    setIsLoading(false);
  }, []);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function handleCategoryFilter(id) {
    setActiveCategoryId(id);
    const filteredCourse = subCategories.filter((item) => item.catId == id);
    const category = categories.find((item) => item.id == id);
    updateSubCategories(filteredCourse, category);
  }
  // handleCategoryFilter(1);
  // console.log(subCats);
  return (
    <div className="container mx-auto py-8 overflow-hidden bg-slate-100 shadow-md rounded-md px-4 md:px-8 my-8">
      <h2 className="text-center font-bold mb-6 text-orange-700 text-base md:text-3xl">
        Shop By Category
      </h2>
      {isLoading ? (
        <LoadingProducts />
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-2 md:grid-cols-8 lg:grid-col-8 space-x-6">
          {categories.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeCategoryId;
            return (
              <button
                onClick={() => handleCategoryFilter(item.id)}
                key={item.id}
                className={`${
                  isActive
                    ? "bg-secondary rounded-2xl shadow-md p-1 flex space-y-2 items-center text-center text-sm flex-col sm:text-base"
                    : " rounded-2xl shadow-md p-1 flex space-y-2 items-center text-center text-sm flex-col sm:text-base"
                }`}
              >
                <div className="p-2 bg-primary rounded-full">
                  <Icon className="shrink-0 text-slate-100 h-8 w-8" />
                </div>
                <span className="line-clamp-1">{item.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
