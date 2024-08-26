"use client"
import Link from "next/link";
import { useCart } from "./CartContext";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { GiShoppingCart } from "react-icons/gi";
import { formatMoney } from "@/lib/formatMoney";

export default function Product({ product , addToCart }) {
  const { setProductDetails, addRecentlyViewedProduct} = useCart();
  const dispatch = useDispatch();
  function handleAddToCart() {
    const prod = {
      id: product.id,
      title: product.title,
      salePrice: product.salePrice,
      imageUrl: product.imageUrl,
      userId: "666ac69f0e152d2844421dd8",
      slug: product.slug,
    };
    dispatch(addToCart(prod));
    toast.success("Item added Successfully");
  }
  const handleClick = () => {
    setProductDetails(product);
    addRecentlyViewedProduct(product);
  };

  const discount =
    ((product.productPrice - product.salePrice) / product.productPrice) * 100;

  return (
    <>
    <Link href={`/product/${product.slug}`} className="group relative block overflow-hidden border-[1px] border-gray-100 rounded-md pb-3">
    {/* <Link
        href={`/product/${product.slug}`}
        className="flex items-center justify-center  h-38  sm:h-56 "
      >
   <img
    src={product.imageUrl}
    alt=""
    class="w-full object-cover transition duration-500 group-hover:scale-105 h-full rounded-md"
  />
      </Link> */}
      <div className="image-wrapper h-40 lg:h-50">
  <img src={product.imageUrl} alt="" className="transition duration-500 group-hover:scale-105 "/>
</div>

      <div className="flex-col flex gap-1 px-2 pb-0  lg:pb-0 lg:px-4  mt-1 lg:mt-1">
        <Link href={`/product/${product.slug}`} className=" ">
        
          <h2 className="text-sm lg:text-xs line-clamp-1 font-medium capitalize text-gray-800">
            {product.title}
          </h2>
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between">
            <p className="my-1 font-bold text-base lg:text-sm">
              UGX {formatMoney(product.salePrice)}
            </p>
            <s className="text-xs">UGX {formatMoney(product.productPrice)}</s>
          </div>
          <p className="bg-[#fef3e9] text-[#f78b5f] absolute top-1 right-0 rounded-md p-1 text-xs">
            -{discount.toFixed(1)}%
          </p>
        </Link>
        <Link
          href={`/product/${product.slug}`}
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
        {/* {addToCart && (
          <div className="w-[100%] flex items-center justify-center">
            <button
              onClick={handleAddToCart}
              className="flex w-[100%] lg:w-[100%] mt-2 mb-2 py-[.6rem] lg:py-[.5rem] bg-[#f68b1e] relative drop-shadow-lg font-[600] text-white text-[9px] lg:text-[12px] items-center justify-center lg:px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
            >
              <GiShoppingCart className="text-[19px] absolute left-5 md:block lg:block hidden" />
              <h2> ADD TO CART</h2>
            </button>
          </div>
        )} */}
      </div>
</Link>
    </>
    // <div
    //   className="relative flex flex-col gap-1 rounded-sm w-[100%] lg:w-[100%] transform transition-transform hover:scale-95 bg-blue-900 border-[1px] border-gray-500"
    //   onClick={handleClick}
    // >
    //   <Link
    //     href={`/product/${product.slug}`}
    //     className="flex items-center justify-center lg:h-[55%] h-[55%] "
    //   >
    //     <img src={product.imageUrl} alt="" className="w-[100%] object-cover h-full rounded-md" />
    //   </Link>
    //   <div className="flex-col flex gap-1 px-2 pb-0  lg:pb-0 lg:px-4 bg-red-900  mt-1 lg:mt-1">
    //     <Link href={`/product/${product.slug}`} className=" ">
        
    //       <h2 className="text-sm lg:text-xs line-clamp-1 font-medium capitalize">
    //         {product.title}
    //       </h2>
    //       <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between">
    //         <p className="my-1 font-bold text-base lg:text-sm">
    //           UGX {formatMoney(product.salePrice)}
    //         </p>
    //         <s className="text-xs">UGX {formatMoney(product.productPrice)}</s>
    //       </div>
    //       <p className="bg-[#fef3e9] text-[#f78b5f] absolute top-1 right-0 rounded-md p-1 text-xs">
    //         -{discount.toFixed(1)}%
    //       </p>
    //     </Link>
    //     <Link
    //       href={`/product/${product.slug}`}
    //       className="lg:flex lg:gap-1 items-center flex justify-between gap-2"
    //     >
    //       <div className="lg:flex md:flex hidden items-center  mt-2.5 space-x-px ">
    //                         <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    //                             <path
    //                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    //                             />
    //                         </svg>
    //                         <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    //                             <path
    //                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    //                             />
    //                         </svg>
    //                         <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    //                             <path
    //                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    //                             />
    //                         </svg>
    //                         <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    //                             <path
    //                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    //                             />
    //                         </svg>
    //                         <svg className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    //                             <path
    //                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    //                             />
    //                         </svg>
    //       </div>
    //       <p className="text-[9px] text-purple-500 lg:block md:block hidden">(4 verified ratings)</p>
    //     </Link>
    //     {/* {addToCart && (
    //       <div className="w-[100%] flex items-center justify-center">
    //         <button
    //           onClick={handleAddToCart}
    //           className="flex w-[100%] lg:w-[100%] mt-2 mb-2 py-[.6rem] lg:py-[.5rem] bg-[#f68b1e] relative drop-shadow-lg font-[600] text-white text-[9px] lg:text-[12px] items-center justify-center lg:px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
    //         >
    //           <GiShoppingCart className="text-[19px] absolute left-5 md:block lg:block hidden" />
    //           <h2> ADD TO CART</h2>
    //         </button>
    //       </div>
    //     )} */}
    //   </div>
    // </div>

  
  );
}
