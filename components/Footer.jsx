import { getSingleStyle } from "@/actions/styles";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaSnapchat, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";


export default async function Footer() {
   const singleStyle= await getSingleStyle()
  const backgroundColor =  singleStyle?.footerColor || "#0f172a";
  return (
  <div style={{backgroundColor}} className="w-[100%] py-4 text-xs px-4 lg:px-8 min-h-[25vh] flex-col flex lg:flex-row gap-5 lg:gap-8 items-center justify-center">
   <div className="flex gap-2 ">
    {/* <Link className="p-2 rounded-[50%] bg-[#31d4d9] " href=""><FaSnapchat color="white" size={20}/>
</Link> */}
   <Link className="p-2 rounded-[50%] bg-[#437bff] " href="https://www.facebook.com/profile.php?id=61561792047966&mibextid=ZbWKwL."><FaFacebookF color="white"  size={20}/></Link>

   <Link className="p-2 rounded-[50%] bg-[#d35d55] "  href="https://youtube.com/@kyajacom?si=ifzRHWSyzvtCcUFL"><FaYoutube color="white" size={20}/>
</Link>
   <Link className="p-2 rounded-[50%] bg-[#34ea55] " href="https://www.tiktok.com/@kyajalogistics?_t=8p0SZ58LZlV&_r=1">   <FaTiktok color="white" size={20}/>
</Link>
   <Link className="p-2 rounded-[50%] bg-[#bd32a2] " href="https://www.instagram.com/kyaja_logistics?igsh=MWpldmgwcWdpdDFxMA=="> <FaInstagram color="white" size={20}/>
</Link>

   </div>
   <div className="lg:w-[30%] ">
    <Link className="text-white text-sm" href="">Find us @ Kampala, Down Town, <span className="text-orange-400">Tel+256752815998</span> (available 24/7 online)
     Basement 08 , PO Box 100735 Kampala, Uganda</Link>
   </div>
   <div className="text-[#ce8120] text-sm lg:w-[30%]">
   About us
    | About us
FAQs |
Return Policy |
Terms and Conditions |
Download Price List |
Sitemap |
Become an affiliate |
Leave feedback |
Customer Reviews |
Warranty and Return Policy |
Admin 
   </div>
  </div>
  );
}
