"use client"
import Link from "next/link";
import { formatMoney } from "@/lib/formatMoney";
import { useCart } from "../CartContext";
import Image from "next/image";
import { ProductTypes } from "@/types";

export default function Product({ product }:{ product: ProductTypes }) {
  const { setProductDetails, addRecentlyViewedProduct} = useCart();
  const handleClick = () => {
    setProductDetails(product);
    addRecentlyViewedProduct(product);
  };

  const discount =
    ((product.productPrice - product.salePrice) / product.productPrice) * 100;

  return (
    <>
    <Link onClick={handleClick} href={`/p/${product.slug}`} className="group relative block overflow-hidden border-[1px] border-gray-100 rounded-md pb-3 ">
 
      <div className="image-wrapper h-40 lg:h-50 ">
  <Image 
  placeholder="blur"
  blurDataURL="https://utfs.io/f/cedbb143-0c78-4714-8b70-cac825d533e0-9jz08y.png" 
   src={product.imageUrl} alt="" className="" width={300} height={300}/>
</div>

      <div className="flex-col flex gap-1 px-2 pb-0  lg:pb-0 lg:px-4  mt-1 lg:mt-1 ">
        <Link href={`/p/${product.slug}`} className=" ">
        
          <h2 className="text-sm lg:text-xs line-clamp-1 font-medium capitalize text-gray-900">
            {product.title}
          </h2>
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between">
            <p className="my-1 font-bold text-md lg:text-md text-black">
              UGX {formatMoney(product.salePrice)}
            </p>
            <s className="text-xs text-gray-900 ">UGX {formatMoney(product.productPrice)}</s>
          </div>
           <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
           -{discount.toFixed(1)}%
              </div>
        </Link>
        <Link
          href={`/p/${product.slug}`}
          className="lg:flex lg:gap-1 items-center flex justify-between gap-2"
        >
          <div className="lg:flex md:flex hidden items-center  mt-2.5 space-x-px ">
                            <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
          </div>
          <p className="text-[9px] text-purple-500 lg:block md:block hidden">(4 verified ratings)</p>
        </Link>

      </div>
</Link>
    </>
  );
}
