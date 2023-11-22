"use client"
import Link from "next/link";
import { useCart } from "./CartContext";
import AddToCart from "./AddToCart";
import HomeAddToCart from "./HomeAddToCart";
import { AiTwotoneStar } from "react-icons/ai";

export default function Product({ product }) {
  const { setProductDetails,addRecentlyViewedProduct ,currency } = useCart();

  const handleClick = () => {
    console.log("btn clicked");
    setProductDetails(product);
    addRecentlyViewedProduct(product);
  };


  const baseUrl = "http://localhost:3000/";
  const discount =
    ((product.originalPrice - product.currentPrice) / product.originalPrice) *
    100;
    const convertedPrice =
    currency === "USD" ? product.priceUSD : currency === "KES" ? product.priceKES : product.currentPrice;
  return (
    <div>
      <div className="relative flex flex-col gap-1 border shadow rounded-sm w-[100%] lg:w-[100%] hover:shadow-2xl" onClick={handleClick}>
        <small className="absolute left-2 top-2 font-semibold bg-yellow-100 py-1 px-2 rounded-md text-xs">
          {product.subCatName}
        </small>
        <Link href={`/product/${product.slug}`} className="flex items-center justify-center h-[60%]">
          <img src={product.image} alt="" className="w-[100%] " />
        </Link>
        <div className="flex-col flex gap-1 px-2 pb-3 lg:pb-4 lg:px-4 h-[40%]">
          <Link href={`/product/${product.slug}`} className=" ">
          <small className="text-orange-600 text-xs">Free delivery</small>
          <h2 className="text-xs lg:text-sm line-clamp-1">{product.title}</h2>
          <p className="my-1 font-bold text-sm lg:text-lg"> {currency} {convertedPrice}</p>
          <div className="flex justify-between gap-2 items-center">
            <s className="lg:text-sm text-xs">UGX {product.originalPrice}</s>
            <p className="bg-orange-100 rounded-md p-1 text-xs">-{discount.toFixed(1)}%</p>
          </div>
        </Link>
        <Link href={`/product/${product.slug}`} className="lg:flex lg:gap-1 flex flex-col gap-2 ">
                      <div className="flex ">
                        <AiTwotoneStar className="lg:text-[22px] text-[13px] text-orange-500" />
                        <AiTwotoneStar className="lg:text-[22px]  text-[13px] text-orange-500" />
                        <AiTwotoneStar className="lg:text-[22px]  text-[13px] text-orange-500" />
                        <AiTwotoneStar className="lg:text-[22px]  text-[13px] text-orange-500" />
                       
                      </div>
                      <p className="text-[9px] text-purple-500">
                        (4 verified ratings)
                      </p>
        </Link>
        <div className="w-[100%] h-[3%] flex items-center justify-center">
        <HomeAddToCart product={product} />
        </div>
        </div>
       
      </div>
    </div>
  );
}
