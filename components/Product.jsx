"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
import AddToCart from "./AddToCart";
import HomeAddToCart from "./HomeAddToCart";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";
import { GiShoppingCart } from "react-icons/gi";
import { formatMoney } from "@/lib/formatMoney";

export default function Product({ product }) {
  const { setProductDetails, addRecentlyViewedProduct, currency } = useCart();
  const dispatch = useDispatch();
  function handleAddToCart() {
    const prod = {
      id: product.id,
      title: product.title,
      salePrice: product.salePrice,
      imageUrl: product.imageUrl,
      userId: "0001",
      slug: product.slug,
    };
    dispatch(addToCart(prod));
    // addRecentlyViewedProduct(product);
    toast.success("Item added Successfully");
  }
  const handleClick = () => {
    console.log("btn clicked");
    setProductDetails(product);
    addRecentlyViewedProduct(product);
  };

  const baseUrl = "http://localhost:3000/";
  const discount =
    ((product.productPrice - product.salePrice) / product.productPrice) * 100;
  const convertedPrice =
    currency === "USD"
      ? product.priceUSD
      : currency === "KES"
      ? product.priceKES
      : product.currentPrice;
  return (
    <div
      className="relative flex flex-col gap-1 border shadow rounded-sm w-[100%] lg:w-[100%] hover:shadow-2xl"
      onClick={handleClick}
    >
      <small className="absolute left-2 top-2 font-semibold bg-yellow-100 py-1 px-2 rounded-md text-xs">
        {product.subCategory.title}
      </small>
      <Link
        href={`/product/${product.slug}`}
        className="flex items-center justify-center h-[60%]"
      >
        <img src={product.imageUrl} alt="" className="w-[100%] " />
      </Link>
      <div className="flex-col flex gap-1 px-2 pb-3 lg:pb-4 lg:px-4 h-[40%]">
        <Link href={`/product/${product.slug}`} className=" ">
          <small className="text-white text-xs absolute top-44 right-2">
            Free delivery
          </small>
          <h2 className="text-xs lg:text-base line-clamp-1 font-bold">
            {product.title}
          </h2>
          <div className="flex items-center justify-between">
            <p className="my-1 font-semibold text-sm">
              {" "}
              UGX {formatMoney(product.salePrice)}
            </p>
            <s className=" text-xs">UGX {formatMoney(product.productPrice)}</s>
          </div>
          <p className="bg-orange-100 absolute top-1 right-0 rounded-md p-1 text-xs">
            -{discount.toFixed(1)}%
          </p>
        </Link>
        <Link
          href={`/product/${product.slug}`}
          className="lg:flex lg:gap-1 items-center flex justify-between gap-2 "
        >
          <div className="flex ">
            <AiTwotoneStar className="lg:text-[18px] text-[13px] text-orange-500" />
            <AiTwotoneStar className="lg:text-[18px]  text-[13px] text-orange-500" />
            <AiTwotoneStar className="lg:text-[18px]  text-[13px] text-orange-500" />
            <AiTwotoneStar className="lg:text-[18px]  text-[13px] text-orange-500" />
          </div>
          <p className="text-[9px] text-purple-500">(4 verified ratings)</p>
        </Link>
        <div className="w-[100%] flex items-center justify-center">
          <button
            onClick={handleAddToCart}
            className="flex w-[100%] lg:w-[100%] py-[.3rem] lg:py-[.6rem] bg-[#f68b1e] relative drop-shadow-lg font-[600] text-white text-[10px] lg:text-[14px] items-center justify-center lg:px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
          >
            <GiShoppingCart className="text-[19px] absolute left-5 md:block lg:block hidden" />{" "}
            <h2> ADD TO CART</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
