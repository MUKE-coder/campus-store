"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { useEffect, useState } from "react";
// import { products } from "@/data";
import LoadingProducts from "./LoadingProducts";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export default function ProductList({ subCats, cat, products }) {
  const [activeId, setActiveId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [subCatProducts, setSubCatProducts] = useState([]);
  useEffect(() => {
    if (cat.id) {
      const id = cat.id;
      const filtered = products.filter((item) => item.categoryId == id);
      setSubCatProducts(filtered);
      setIsLoading(false);
    } else {
      handleFilter(1);
    }
  }, [subCats]);

  function handleFilter(id) {
    setActiveId(id);
    const filtered = products.filter((item) => item.subCategoryId == id);
    setSubCatProducts(filtered);
  }
  return (
    <div className="container mx-auto py-2 md:py-8  px-4 md:px-8 bg-white shadow-md rounded-md">
      {isLoading ? (
        <LoadingProducts />
      ) : (
        <>
          <div className="px-4 md:px-8 md:py-8 py-4">
            <h2 className="text-left font-bold mb-2 text-orange-700 text-base md:text-2xl">
              Shop {cat.title} Products
            </h2>
            <p>{cat.description}</p>
            <div className="flex md:gap-4 mb-4 md:mb-8 mt-4 flex-col gap-3">
              <h2 className="text-sm font-bold">
                Filter {cat.title} Products:{" "}
              </h2>
              <div className="flex flex-wrap gap-2">
                {subCats.map((item, i) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      onClick={() => handleFilter(item.id)}
                      key={i}
                      className={`${
                        isActive
                          ? "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2 md:py-2.5 text-center mr-1  dark:focus:ring-yellow-900"
                          : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 md:py-2.5 mr-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:gap-4 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {subCatProducts.length > 0 ? (
              subCatProducts.map((item, i) => {
                return <Product product={item} key={i} />;
              })
            ) : (
              <h2 className="text-sm md:font-bold text-center">
                No Products for this SubCategory{" "}
              </h2>
            )}
          </div>
        </>
      )}
    </div>
  );
}
