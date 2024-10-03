"use client"

import Link from "next/link";
import Image from "next/image";
import { formatMoney } from "@/lib/formatMoney";
import { useCart } from "../CartContext";
import { ProductTypes } from "@/types";
import { Star } from "lucide-react";

export default function ProductCard({ product }: { product: ProductTypes }) {
  const { setProductDetails, addRecentlyViewedProduct } = useCart();
  
  const handleClick = () => {
    setProductDetails(product);
    addRecentlyViewedProduct(product);
  };

  const discount = ((product.productPrice - product.salePrice) / product.productPrice) * 100;

  return (
    <Link 
      onClick={handleClick} 
      href={`/p/${product.slug}`} 
      className="group flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="https://utfs.io/f/cedbb143-0c78-4714-8b70-cac825d533e0-9jz08y.png"
        />
      {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount.toFixed(0)}%
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between p-2 flex-grow">
        <div>
          <h2 className="text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h2>
          <div className="flex lg:flex-row flex-col lg:items-center justify-between mt-1 lg:mb-0 mb-2">
            <p className="font-bold lg:text-lg text-base text-black">
              UGX {formatMoney(product.salePrice)}
            </p>
            {product.productPrice > product.salePrice && (
              <s className="text-xs text-gray-500">UGX {formatMoney(product.productPrice)}</s>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-[9px] text-purple-500 lg:block hidden">(4 verified ratings)</p>
        </div>
      </div>
    </Link>
  );
}