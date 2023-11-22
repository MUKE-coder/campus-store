import AddToCart from "@/components/AddToCart";
import BreadCrumb from "@/components/BreadCrumb";
import DetailedPrdt from "@/components/DetailedPrdt";
import ProductSlider from "@/components/ProductSlider";
import { products } from "@/data";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { MdStars } from "react-icons/md";

export async function generateMetadata({ params: { slug } }) {
  const product = products?.find((product) => product.slug == slug);
  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/product/${product.slug}`,
    },
  };
}

export default function page({ params: { slug } }) {
  const product = products?.find((product) => product.slug == slug);

  const images = product.images;
  const productId = product.id;
  const productSubCatId = product.subCatId;
  const similarData = products.filter(
    (product) => product.subCatId == productSubCatId
  );
  const similarPrdt = similarData.filter((prdt) => prdt.id !== productId);
  const discount =
    ((product.originalPrice - product.currentPrice) / product.originalPrice) *
    100;
  const breadcrumb = {
    base: {
      path: "/",
      title: "Home",
    },
    currentSubCatName: {
      title: product.subCatName,
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
    <div className="max-w-full min-h-screen m-[.3rem] md:mx-[1rem] lg:mx-[4rem] roboto relative">
      <BreadCrumb data={breadcrumb} />
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
                  {product.subCatName}
                </p>
                <AiOutlineHeart className="text-[1.5rem]" color="orange" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="">
                  <h1 className="text-[20px] tracking-[.5px] text-[#313133] line-clamp-2">
                    {product.title}
                  </h1>
                </div>
                <div className="w-[100%] h-[1px] bg-gray-200 "></div>
              </div>
              <div className="">
                <div className="flex gap-2 items-center">
                  <h2 className="text-[25px] text-[#0c0c0c] font-[800] tracking-[.6px]">
                    UGX {product.currentPrice}
                  </h2>
                  <h3 className="line-through text-[#75757a] text-[15px] flex items-end tracking-[.6px]">
                    UGX {product.originalPrice}
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
                    <Link
                      href="/booking"
                      className="lg:flex md:flex hidden w-[100%] py-[1rem] bg-yellow-800 relative drop-shadow-lg font-[600] text-white text-[15px] items-center justify-center gap-3 px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
                    >
                      <GiShoppingCart className="text-[24px] absolute md:left-6 lg:left-10 md:block lg:block hidden" />{" "}
                      BUY NOW
                    </Link>
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
                    using Campus store Ug
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
          <div className="lg:w-[24%] mt-2 md:w-[24%] w-[100%] bg-white drop-shadow-sm rounded-md lg:p-[.6rem] md:p-[.6rem] p-[.9rem]  flex flex-col gap-4 h-[90%] roboto">
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-[500] tracking-[.2px]">
                DELIVERY & RETURNS
              </h2>
              <div className="w-[100%] h-[1px] bg-gray-200 "></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-md tracking-[.4px] font-[500]">
                Choose your location
              </h2>
              <div className="flex flex-col gap-3">
                <select className="border-2 px-3 py-3 border-[#a3a3a66c] rounded-md text-[16px] text-[#313133] hover:border-orange-500 font-[400]">
                  <option value="option1">Kampala region</option>
                  <option value="option2">Entebbe region</option>
                  <option value="option3">northern region</option>
                  <option value="option4">Western region</option>
                </select>
                <select className="border-2 px-3 py-3 border-[#a3a3a66c] rounded-md text-[16px] text-[#313133] hover:border-orange-500">
                  <option value="option1">Central Business District</option>
                  <option value="option2">Bwaise </option>
                  <option value="option3">Buloba</option>
                  <option value="option4">Bukoto</option>
                </select>
              </div>
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
                    Pickup Station
                  </h2>
                  <p className="text-[12px] font-[300] tracking-[.4px]">
                    Pickup Station Delivery Fees UGX 1,900 Pickup by 01 November
                    when you order within next 14hrs 6mins
                  </p>
                </div>
              </div>
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
        w-full min-h-[100%] bg-white p-[1rem] gap-4 drop-shadow-sm rounded-md 
        roboto flex flex-col "
        >
          <h2 className="text-[20px] font-[500] tracking-[.3px] text-[#313133] ">
            You may also like
          </h2>
          <DetailedPrdt data={similarPrdt} />
        </div>
      </div>
     
    </div>
    <div className="lg:hidden md:hidden flex gap-3 items-center fixed bottom-1 w-[100%] bg-gray-200 px-3 py-2">
        <div className="w-[15%]">
        <AddToCart product={product} />
        </div>
        <div className="w-[75%]">
          <Link href="/booking"
        className="lg:hidden md:hidden flex w-[100%] py-3 bg-[#f2a51f] relative drop-shadow-lg font-[600] text-white text-[15px] items-center justify-center gap-3 px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md"
          >
          <GiShoppingCart className="text-sm absolute left-10 md:block lg:block hidden" />{" "}
          BUY NOW</Link>
        </div>
         
       
        <Link href="tel:0752815998" className=" w-[10%] flex items-center px-2 py-2 text-[#f2a51f]  border-[1px] border-[#fabf07] rounded-md">
        <IoCall size={26}/>
        </Link>
      </div>
    </>
  );
}
