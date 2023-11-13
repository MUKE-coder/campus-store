"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
// import { useEffect } from "react";

export default function Product({ product }) {
  // const { addRecentlyViewedProduct } = useCart();
  const { setProductDetails } = useCart();

  setProductDetails(product);
  // addRecentlyViewedProduct(product);

  const discount =
    ((product.originalPrice - product.currentPrice) / product.originalPrice) *
    100;
  return (
    <Link
      onClick={() => console.log("clicked")}
      href={`/product/${product.slug}`}
      className="relative flex items-center flex-col justify-center border shadow rounded-sm w-[90%]"
    >
      <small className="absolute left-2 top-2 font-semibold bg-yellow-100 py-1 px-2 rounded-md text-xs">
        {product.subCatName}
      </small>
      <Link
        href={`/product/${product.slug}`}
        className="flex items-center justify-center"
      >
        <img src={product.image} alt="" className="w-[100%]" />
      </Link>
      <div className="lg:py-2 lg:px-4 p-3">
        <small className="text-orange-600 text-xs">Free delivery</small>
        <Link
          href={`/product/${product.slug}`}
          className="text-xs lg:text-sm line-clamp-1"
        >
          {product.title}
        </Link>
        <p className="my-1 font-bold text-sm lg:text-xs">
          UGX {product.currentPrice}
        </p>
        <div className="flex justify-between gap-4 items-center">
          <s className="lg:text-sm text-xs">UGX {product.originalPrice}</s>
          <p className="bg-orange-100 rounded-md p-1 text-xs">
            -{discount.toFixed(1)}%
          </p>
        </div>
      </div>
    </Link>
  );
}
