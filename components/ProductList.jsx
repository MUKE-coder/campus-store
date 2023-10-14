"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { useEffect, useState } from "react";
import { products } from "@/data";
import LoadingProducts from "./LoadingProducts";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function ProductList({ subCats, cat }) {
  const [activeId, setActiveId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [subCatProducts, setSubCatProducts] = useState([]);
  useEffect(() => {
    if (cat.id) {
      const id = cat.id;
      const filtered = products.filter((item) => item.catId == id);
      setSubCatProducts(filtered);
      setIsLoading(false);
    } else {
      handleFilter(1);
    }
  }, [subCats]);

  function handleFilter(id) {
    // console.log(id);
    setActiveId(id);
    const filtered = products.filter((item) => item.subCatId == id);
    setSubCatProducts(filtered);
  }
  // console.log(subCatProducts);

  return (
    <div className="container mx-auto py-8  px-4 md:px-8 bg-white shadow-md rounded-md">
      {isLoading ? (
        <LoadingProducts />
      ) : (
        <>
          <div className="px-8 py-8">
            <h2 className="text-left font-bold mb-2 text-orange-700 text-base md:text-2xl">
              Shop {cat.name} Products
            </h2>
            <p>{cat.description}</p>
            <div className="flex gap-4 mb-8 mt-4 flex-wrap items-center">
              <h2 className="text-sm md:font-bold">
                Filter {cat.name} Products:{" "}
              </h2>
              {subCats.map((item, i) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    onClick={() => handleFilter(item.id)}
                    key={i}
                    className={`${
                      isActive
                        ? "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                        : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
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
