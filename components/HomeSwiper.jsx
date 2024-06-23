"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';


export default function HomeSwiper({allCategories}) {
  return (
        <Swiper
          dir="rtl"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={2}
        >
          {allCategories.map((slide, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden">
              <Link href={`/category/${slide.slug}`}>
                <div className='flex flex-col items-center p-4 rounded-lg shadow-lg'>
                  <h3 className='font-bold text-lg mb-2 '>{slide.title}</h3>
                  <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className='w-full h-full object-cover rounded-md mb-2' />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
  )
}
