"use client";
import slide1 from "../public/slider1.png";
import slide2 from "../public/slide2.png";
import slide3 from "../public/slide3.png";

import Image from "next/image";
import Link from "next/link";
import Carousel from "nuka-carousel";

export default function HeroSlider() {
  const slides = [
    {
      image: slide1,
    },
    {
      image: slide2,
    },
    {
      image: slide3,
    },
  ];
  return (
    <>
      <Carousel
        autoplay
        wrapAround
        adaptiveHeight
        adaptiveHeightAnimation
        className="w-full"
      >
        {slides.map((item, i) => {
          return (
            <Link href="/" className="block">
              <Image src={item.image} alt="alt" width={712} height={384} />
            </Link>
          );
        })}
      </Carousel>
    </>
  );
}

{
  /* <Image src={item.image} alt="alt" width={712} height={384} /> */
}
