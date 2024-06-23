"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineInventory2 } from 'react-icons/md';
import logo from "../public/logo.svg";
import Image from 'next/image';

export default function AppBanner() {
    const [showBanner, setShowBanner] = useState(true);

    const handleCloseBanner = () => {
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div id="marketing-banner" tabIndex="-1" className="z-50 flex lg:flex-col md:flex-row justify-between p-2 w-full  shadow-sm lg:max-w-7xl dark:bg-gray-white bg-[#0f172a] dark:border-gray-600">
            <div className="flex items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
            {/* <Image src={logo} alt="kyaja logo" className="lg:w-[4rem] w-[2rem] h-[2rem] lg:h-[4rem] " /> */}
                <p className="flex items-center text-[11px] lg:text-sm font-medium text-white w-[80%]">Shop on kyaja App Free on play store</p>
            </div>
            <div className="flex items-center flex-shrink-0">
                <Link href="#" className="px-5 py-2 me-2 text-xs font-medium text-white bg-[#f68b1e] rounded-lg hover:bg-[#f68b1e] focus:ring-4 focus:ring-blue-300 dark:bg-[#f68b1e] dark:hover:bg-[#f68b1e] focus:outline-none dark:focus:ring-[#f68b1e]">open</Link>
                <button onClick={handleCloseBanner} type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close banner</span>
                </button>
            </div>
        </div>
    );
}
