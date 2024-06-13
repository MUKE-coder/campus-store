import React from "react";
import HeroSlider from "./HeroSlider";
import Link from "next/link";
export default function Hero({ banners }) {
  return (
    <div className=" my-4 ">
      <div className="grid grid-cols-12 container gap-4 mx-auto ">
        <div className="col-span-12 sm:col-span-6 bg-slate-100 rounded-md shadow-md overflow-hidden">
          <HeroSlider banners={banners} />
        </div>
        <div className="hidden sm:col-span-6 bg-slate-100 rounded-md shadow-md grid-cols-12 sm:grid p-4 gap-4 ">
          <Link
            href="/"
            className="rounded-xl col-span-4 h-36 overflow-hidden sm:hidden md:block"
          >
            <img
              src="/advert.gif"
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          <Link
            href="/"
            className="rounded-xl col-span-8 h-36 overflow-hidden sm:hidden md:block"
          >
            <img
              src="/gif12.gif"
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          <Link
            href="/"
            className="rounded-xl col-span-12 h-36 overflow-hidden"
          >
            <img
              src="/gif22.gif"
              alt=""
              className="w-full h-full md:object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
