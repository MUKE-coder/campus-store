import { getSingleStyle } from '@/actions/styles';
import React from 'react';

type SingleStyle = {
  id: string;
  primaryColor: string | null;
  secondaryColor: string | null;
  bgImage: string | null;
  footerColor: string | null;
  topBannerImage: string | null;
  createdAt: Date;
  updatedAt: Date;
} | null

export default async function SubNav() {
  const singleStyle: SingleStyle = await getSingleStyle("66796331098ee8133c96fc94");
  const bgColor = singleStyle?.secondaryColor || "#633185" ;

  // Handle case where singleStyle might be null
  const navImageUrl = singleStyle?.topBannerImage || "/nav.gif";
  return (
    <div
    style={{ backgroundColor: `${bgColor}` }}
      className="w-full lg:h-[9.1vh] h-[10%] justify-center items-center lg:flex md:flex hidden"
    >
      <img
        src={navImageUrl}
        alt=""
        className="lg:w-[90%] w-full h-full object-contain"
      />
    </div>
  );
}
