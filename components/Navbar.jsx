"use client";
import logo from "../public/logo2.png";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiSolidShoppingBags } from "react-icons/bi";
import { BsSmartwatch, BsPhone } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { PiTelevisionFill } from "react-icons/pi";
import { MdOutlineWatch } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import Image from "next/image";
import FormSearch from "./FormSearch";
import { useCart } from "./CartContext";
import NavBarContent from "./NavBarContent";

export default function Navbar() {
  const { cart } = useCart();
  const [handleSearch , setHandleSearch ] =useState([])
 
  const [showMenu, setShowMenu] = useState(false);
  const leftNavLinks = [
    {
      id: 1,
      name: "Fashion",
      slug: "fashion",
      description: "",
      icon: FaTshirt,
      image: "",
    },
    {
      id: 2,
      name: "Electronics",
      slug: "electronics",
      description: "",
      icon: PiTelevisionFill,
      image: "",
    },
    {
      id: 3,
      name: "Phones & Tablets",
      slug: "phones-and-tablets",
      description: "",
      icon: BsPhone,
      image: "",
    },
    {
      id: 4,
      name: "Computers",
      slug: "computers",
      description: "",
      icon: FaComputer,
      image: "",
    },
  ];
  const rightNavLinks = [
    {
      id: 5,
      name: "Watches",
      slug: "watches",
      description: "",
      icon: BsSmartwatch,
      image: "",
    },
    {
      id: 6,
      name: "Digital Watches",
      slug: "digital-watches",
      description: "",
      icon: MdOutlineWatch,
      image: "",
    },
    {
      id: 7,
      name: "Beddings",
      slug: "beddings",
      description: "",
      icon: IoBedOutline,
      image: "",
    },
    {
      id: 8,
      name: "Bags",
      slug: "bags",
      description: "",
      icon: BiSolidShoppingBags,
      image: "",
    },
  ];
  const allLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <div className="">
      <header className="bg-primary text-slate-50 md:px-24 lg:py-0 md:py-0 py-4 px-2 relative flex flex-col items-center justify-center gap-3">
        <div className="container mx-auto flex items-center justify-between py-2 ">
          <Link
            className="text-2xl  text-yellow-600  sm:text-3xl font-logo"
            href="/"
          >
            <Image className="w-[100px]"  src={logo} priority height={90} width={90}/>
          </Link>
<div className="hidden lg:block md:block">
<FormSearch />
</div>
          
          <Link className="flex relative space-x-2 items-center" href="/">
            {/* Cart */}

            <Link
              href="/cart"
              type="button"
              class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-lg  focus:outline-none "
            >
              <AiOutlineShoppingCart className="text-xl sm:text-2xl" />

              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-500  rounded-full -top-1 -right-1 ">
                {cart.length}
              </div>
            </Link>
          </Link>
          <button onClick={() => setShowMenu(true)} className="sm:hidden">
            <BiMenu className="text-3xl" />
          </button>
        </div>
<div className="hide">
<FormSearch />
</div>
      </header>
    
      {/* Mobile Menu */}
      <div
        className={`${
          showMenu
            ? "sm:hidden flex-col fixed top-0 w-full bg-slate-900  text-slate-50 right-0 bottom-0 z-50"
            : "z-50 hidden sm:hidden flex-col fixed top-0 w-1/2 bg-slate-900  text-slate-50 right-0 bottom-0"
        }`}
      >
        <div className="flex items-center justify-between container mx-auto px-8 py-4 border-b border-gray-500">
          <Link
            className="text-2xl text-yellow-600  sm:text-3xl font-logo"
            href="/"
          >
            <Image src={logo} priority height={60} />
          </Link>
          <button onClick={() => setShowMenu(false)} className="sm:hidden">
            <AiOutlineClose className="text-3xl" />
          </button>
        </div>
        <div className="">
          <NavBarContent />
        </div>
      </div>
    </div>
  );
}
