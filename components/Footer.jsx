import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-[100%] min-h-[100vh] bg-slate-800 flex-col mt-9 overflow-hidden">
      <div className="w-[100%] bg-[#313133] min-h-[24vh] flex flex-col lg:flex-row  md:flex-row  md:flex lg:flex justify-between px-4 gap-8 py-4 lg:px-9 lg:py-6">
        <div className="lg:py-4 py-2">
          <Image
            className=" object-contain"
            src="/logo.png"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col font-[400] gap-4">
          <div className="flex flex-col gap-2 text-xs text-white">
            <h3 className="font-[600] text-xs">NEW TO CAMPUS STORE?</h3>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
          <div className="">
            <form className="lg:flex lg:flex-row flex flex-col gap-4 lg:gap-7 ">
              <input
                className="lg:py-[.5rem] py-[.3rem] md:py-[.5rem] px-[.7rem] rounded-[5px] outline-none"
                type="email"
                placeholder="Enter E-mail-Address"
                required
              />
              <button
                className="border-[1px] hover:border-orange-700 border-white text-sm lg:px-5 md:px-5 px-2 py-2 font-[600] rounded text-white hover:text-orange-700 md:w-[32%] lg:w-[32%] w-[30%]"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col hidden md:block lg:block">
          <div className="flex gap-2">
            <div className="">
              <img src="/logo.png" alt="" width={80} height={80} />
            </div>
            <div className="flex flex-col gap-2 text-xs text-white">
              <h2 className="text-xs font-[700]">VIEW MORE PRODUCTS</h2>
              <p>Get access to exclusive offers!</p>
            </div>
          </div>
          <div className="">
            <img
              className="object-contain"
              src="/google.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#535357] text-sm text-white min-h-[50vh] px-7 py-8  lg:px-9 lg:py-6 grid grid-cols-2 gap-8 lg:flex lg:justify-between ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold">NEED HELP ?</h2>
            <div className="text-xs flex flex-col gap-2 ">
              <Link className="hover:text-orange-600" href="">
                Chat with us
              </Link>
              <Link className="hover:text-orange-600" href="">
                Help Center
              </Link>
              <Link className="hover:text-orange-600" href="">
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold">USEFUL LINKS</h2>
            <div className="text-xs flex flex-col gap-2">
              <Link className="hover:text-orange-600" href="">
                Place an order
              </Link>
              <Link className="hover:text-orange-600" href="">
                Delivery
              </Link>
              <Link className="hover:text-orange-600" href="">
                Create a return
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">ABOUT CAMPUS STORE UGANDA</h2>
          <div className="flex flex-col gap-3 text-xs">
            <Link className="hover:text-orange-600" href="">
              About us
            </Link>
            <Link className="hover:text-orange-600" href="">
              Flash Sales
            </Link>
            <Link className="hover:text-orange-600" href="">
              Cookie Notice
            </Link>
            <Link className="hover:text-orange-600" href="">
              Terms and Conditions
            </Link>
            <Link className="hover:text-orange-600" href="">
              Dispute Resolution Policy
            </Link>
            <Link className="hover:text-orange-600" href="">
              Store & Credit Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">MAKE MONEY WITH US</h2>
          <div className="flex flex-col gap-3 text-xs">
            <Link className="hover:text-orange-600" href="">
              Sell on Campus Store
            </Link>
            <Link className="hover:text-orange-600" href="">
              Vendor Hub
            </Link>
            <Link className="hover:text-orange-600" href="">
              Become a Sales Consultant
            </Link>
            <Link className="hover:text-orange-600" href="">
              Become a Logistics Service Partner
            </Link>
            <Link className="hover:text-orange-600" href="">
              Become a Campus Store Delivery Agent
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">CAMPUS INTERNATIONAL</h2>
          <div className="flex gap-3">
            <div className="flex flex-col gap-3 text-xs">
              <Link className="hover:text-orange-600" href="">
                Algerie
              </Link>
              <Link className="hover:text-orange-600" href="">
                Tunisia
              </Link>
              <Link className="hover:text-orange-600" href="">
                Egypt
              </Link>
              <Link className="hover:text-orange-600" href="">
                Ghana
              </Link>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-orange-600" href="">
                Morocco
              </Link>
              <Link className="hover:text-orange-600" href="">
                Nigeria
              </Link>
              <Link className="hover:text-orange-600" href="">
                Senegal
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#535357] grid grid-cols-1 gap-[2rem] md:flex lg:flex lg:gap-[5rem] text-sm text-white px-9 py-6 min-h-[20vh]">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-xs font-[800]">FOLLOW US</h2>
          <div className=" flex gap-4">
            <Link href="">
              <Facebook />
            </Link>
            <Link href="">
              <Twitter />
            </Link>
            <Link href="">
              <Instagram />
            </Link>
            <Link href="">
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="lg:flex md:flex-col md:gap-8 lg:flex-col lg:gap-5 hidden lg:block md:block">
          <h2 className="text-xs font-[800]">PAYMENT METHODS</h2>
          <div className=" flex gap-4">
            <Link href="">
              <Facebook />
            </Link>
            <Link href="">
              <Twitter />
            </Link>
            <Link href="">
              <Instagram />
            </Link>
            <Link href="">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#535357]  min-h-[30vh] grid grid-cols-2 gap-6 lg:flex lg:justify-between text-sm text-white px-9 py-6">
        <div className="flex flex-col gap-2">
          <Link className="hover:text-orange-600" href="">
            Shoes
          </Link>
          <Link className="hover:text-orange-600" href="">
            pants
          </Link>
          <Link className="hover:text-orange-600" href="">
            shirts
          </Link>
          <Link className="hover:text-orange-600" href="">
            jackets
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="hover:text-orange-600" href="">
            fridges
          </Link>
          <Link className="hover:text-orange-600" href="">
            Tvs
          </Link>
          <Link className="hover:text-orange-600" href="">
            woofers
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="hover:text-orange-600" href="">
            samsung
          </Link>
          <Link className="hover:text-orange-600" href="">
            iphone
          </Link>
          <Link href="">techno</Link>
          <Link href="">nokia</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="">HP</Link>
          <Link href="">Dell</Link>
          <Link href="">Lenovo</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="">watches for men</Link>
          <Link href="">watches for women</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="">Blankets</Link>
          <Link href="">Duvet</Link>
          <Link href="">Pillow</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="">schools bag</Link>
          <Link href="">hand bag</Link>
          <Link href="">travel bag</Link>
        </div>
        <div>
          <Link href="">suits</Link>
        </div>
      </div>
      <hr />
      <div className="w-[100%] bg-[#535357]  h-[10vh] flex items-center justify-center text-sm text-white">
        <p>© Campus store - All Rights Reserved</p>
      </div>
      <div></div>
    </div>
  );
}
