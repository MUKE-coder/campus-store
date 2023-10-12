"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiSolidShoppingBags } from "react-icons/bi";
import { BsSmartwatch, BsPhone } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { PiTelevisionFill } from "react-icons/pi";
import { MdOutlineWatch } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
export default function Navbar() {
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
      <header className="bg-slate-950 text-slate-50 md:px-24 px-8 ">
        <div className="container mx-auto flex items-center justify-between h-14">
          <nav className="hidden sm:flex space-x-6">
            {leftNavLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href="/"
                  className="flex space-x-2 items-center flex-col"
                >
                  <Icon />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <Link
            className="text-2xl text-lime-400  sm:text-3xl font-logo"
            href="/"
          >
            Campus Store
          </Link>
          <nav className="hidden sm:flex space-x-6">
            {rightNavLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href="/"
                  className="flex space-x-2 items-center flex-col"
                >
                  <Icon />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <button onClick={() => setShowMenu(true)} className="sm:hidden">
            <BiMenu className="text-3xl" />
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`${
          showMenu
            ? "sm:hidden flex-col fixed top-6 w-full bg-slate-900 left-0 text-slate-50 right-0 bottom-0"
            : "hidden sm:hidden flex-col fixed top-6 w-full bg-slate-900 left-0 text-slate-50 right-0 bottom-0"
        }`}
      >
        <div className="flex items-center justify-between container mx-auto px-8 py-4 border-b border-gray-500">
          <Link
            className="text-2xl text-lime-400  sm:text-3xl font-logo"
            href="/"
          >
            Campus Store
          </Link>
          <button onClick={() => setShowMenu(false)} className="sm:hidden">
            <AiOutlineClose className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
