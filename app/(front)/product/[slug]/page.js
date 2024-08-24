import { getSingleStyle } from "@/actions/styles";
import AddToCart from "@/components/AddToCart";
import ProductCard from "../../../../components/ProductCard";
import ProductSlider from "@/components/ProductSlider";
import Breadcrumb from "@/components/frontend/Breadcrumb";
import { formatMoney } from "@/lib/formatMoney";
import { getData } from "@/lib/getData";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import BookNowBtn from "@/components/BookNowBtn";
import LargeBookNowBtn from "@/components/LargeBookNowBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function generateMetadata({ params: { slug } }) {
  const product = await getData(`products/product/${slug}`);
 
  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/product/${product.slug}`,
    },
  };
}

export default async function page({ params: { slug } }) {
  const session = await getServerSession(authOptions);
  const user=session?.user
  
  const product = await getData(`products/product/${slug}`);
  const products = await getData(`products/all`);
  const singleStyle= await getSingleStyle()
  const backgroundColor =  singleStyle.primaryColor || "#f68b1e";
  // console.log(product)
  const images = product.productImages;
  const productId = product.id;
  const productSubCatId = product.subCategoryId;
  const similarData = products.filter(
    (product) => product.subCategoryId == productSubCatId
  );
  const similarPrdt = similarData.filter((prdt) => prdt.id !== productId);
  const discount =
    ((product.productPrice - product.salePrice) / product.productPrice) * 100;
  const breadcrumb = {
    base: {
      path: "/",
      title: "Home",
    },
    currentSubCatName: {
      title: product.subCategory.title,
    },
    currentTitle: {
      title: product.title,
    },
    currentDescription: {
      title: product.description,
    },
  };
  return (
    <>
      <div className="max-w-full min-h-screen m-[.3rem] md:mx-[1rem] lg:mx-[4rem] roboto relative md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]">
        <Breadcrumb />
        <div className="flex flex-col gap-3">
          <div className=" w-full min-h-[95vh] justify-between  flex flex-col md:flex-row lg:flex-row">
            <div className="lg:w-[74%] md:w-[74%] w-[100%] bg-white flex flex-col md:flex-row lg:flex-row p-[1rem] gap-3 drop-shadow-sm rounded-md ">
              <div className="md:w-[40%] lg:w-[40%] w-[100%] flex flex-col gap-3">
                <ProductSlider data={images} />
                <div className="w-[100%] h-[1px] bg-gray-200 "></div>
                <div className="flex flex-col gap-5">
                  <h2 className="text-sm">SHARE PRODUCT</h2>
                  <div className="flex gap-3 items-center ">
                    <BsFacebook className="text-[20px] text-gray-800 hover:text-orange-700 cursor-pointer" />
                    <BsTwitter className="text-[20px] text-gray-800 hover:text-orange-700 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="lg:w-[70%] md:w-[70%] w-[100%] flex flex-col gap-8 md:gap-5 lg:gap-5 roboto">
                <div className="flex justify-between">
                  <p className="text-sm lg:px-2 text-blue-900 font-[900] flex items-center">
                    {product?.subCategory.title}
                  </p>
                  <AiOutlineHeart className="text-[1.5rem]" color="orange" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="">
                    <h1 className="text-2xl font-bold tracking-[.5px] text-[#313133] line-clamp-2">
                      {product.title}
                    </h1>
                  </div>
                  <div className="w-[100%] h-[1px] bg-gray-200 "></div>
                </div>
                <div className="">
                  <div className="flex gap-2 items-center">
                    <h2 className="text-[25px] text-[#0c0c0c] font-[800] tracking-[.6px]">
                      UGX {formatMoney(product.salePrice)}
                    </h2>
                    <h3 className="line-through text-[#75757a] text-[15px] flex items-end tracking-[.6px]">
                      UGX {formatMoney(product.productPrice)}
                    </h3>
                    <p className="bg-[#fef3e9] drop-shadow-sm rounded-md p-1 text-orange-400 text-sm">
                      -{discount.toFixed(1)}%
                    </p>
                  </div>
                  <div className="flex flex-col lg:gap-5 gap-8">
                    <div className="flex flex-col gap-2">
                      <p className="text-[13px] text-gray-500">In stock </p>
                      <p className="text-[13px]">
                        + shipping from UGX 1,900 to Central Business District
                      </p>
                      <div className="flex gap-2">
                        <div className="flex ">
                          <AiTwotoneStar className="text-[22px] text-orange-500" />
                          <AiTwotoneStar className="text-[22px] text-orange-500" />
                          <AiTwotoneStar className="text-[22px] text-orange-500" />
                          <AiOutlineStar className="text-[22px]" />
                          <AiOutlineStar className="text-[22px]" />
                        </div>
                        <p className="text-[13.5px] text-purple-500">
                          (4 verified ratings)
                        </p>
                      </div>
                    </div>
                    <div className="lg:flex md:flex hidden gap-2">
                      <AddToCart product={product} />

                      <LargeBookNowBtn product={product} session={session}/>
                    </div>
                    <div className="w-[100%] h-[1px] bg-gray-200 "></div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-black text-[14px] font-[500] tracking-[1px]">
                      PROMOTIONS
                    </h2>
                  </div>
                  <div className="text-[13px] flex flex-col gap-3 text-[#152c43]">
                    <p className="flex gap-1 items-center">
                      <MdStars className="text-orange-400 text-[19px]" />
                      Get up to 40% off During the time of festive seasons while
                      usingkyaja store Ug
                    </p>
                    <p className="flex gap-1 items-center">
                      <MdStars className="text-orange-400 text-[19px]" />
                      Enjoy free delivery when purchases are high
                    </p>
                    <p className="flex gap-1 items-center">
                      <MdStars className="text-orange-400 text-[19px]" />
                      Have a go on every first purchase
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] mt-2 md:w-[24%] w-[100%] bg-white drop-shadow-sm rounded-md lg:p-[.6rem] md:p-[.6rem] p-[.9rem]  flex flex-col gap-4 h-[90%]">
              <div className="flex flex-col gap-2">
                <h2 className="text-[14px] font-[500] tracking-[.2px]">
                  DELIVERY & RETURNS
                </h2>
                <div className="w-[100%] h-[1px] bg-gray-200 "></div>
              </div>
           
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div>
                    <GrDeliver size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[14px] font-[500] tracking-[.4px]">
                      Door Delivery
                    </h2>
                    <p className="text-[12px] font-[300] tracking-[.4px]">
                      Delivery Fees UGX 3,900 Delivery by 01 November when you
                      order within next 15hrs 25mins
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <GrDeliver size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[14px] font-[500] tracking-[.4px]">
                      Be alert
                    </h2>
                    <p className="text-[12px] font-[300] tracking-[.4px]">
                      Only pay on delivery.
                    </p>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
          <div className="flex w-full min-h-[100%] bg-white p-[1rem] gap-4 drop-shadow-sm rounded-md flex-col roboto">
            <h2 className="text-[22px] font-[500] tracking-[.2px] text-[#313133]">
              Product details
            </h2>
            <p className="tracking-[.5px] text-md">{product.description}</p>
          </div>
          <div
            className="
        w-full min-h-[100%] bg-white p-[.6rem] lg:p-[1rem] gap-4 drop-shadow-sm rounded-md 
        roboto flex flex-col "
          >
            <h2 className="text-[20px] font-[500] tracking-[.3px] text-[#313133] ">
              You may also like
            </h2>
            <div  className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4 lg:px-3 px-1">
             {similarPrdt?.splice(0,5).map((product) => (
               <ProductCard key={product.id} product={product} addToCart={false} />
             ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden flex gap-3 items-center fixed bottom-1 w-[100%] bg-gray-200 px-3 py-2">
        <div className="w-[15%]">
          <AddToCart product={product} />
        </div>
        <div className="w-[75%]">
         
          <BookNowBtn product={product} backgroundColor={backgroundColor} session={session}/>
        </div>

        <Link
          href="tel:0752815998"
          className=" w-[10%] flex items-center px-2 py-2 text-[#f2a51f]  border-[1px] border-[#fabf07] rounded-md"
        >
          <IoCall size={26} />
        </Link>
      </div>
    </>
  );
}
