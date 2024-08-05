// "use client";

// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import Swiper modules
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Link from 'next/link';

// // const slides = [
// //   { link: "https://example.com/link1", image: "https://ug.jumia.is/cms/UG_WK24_CHECKPOINT_SX_712X384_WK25.gif" },
// //   { link: "https://example.com/link2", image: "https://ug.jumia.is/cms/PAYWEEK_DEALS_2_SX_712x384_WK25.gif" },
// //   { link: "https://example.com/link3", image: "https://ug.jumia.is/cms/PAYWEEK_DEALS_3_SX_712x384_WK25.gif" },
// //   { link: "https://example.com/link4", image: "https://ug.jumia.is/cms/Euro_League_SX_712X384.gif" },
// //   { link: "https://example.com/link5", image: "https://ug.jumia.is/cms/UG_WK_25_BRAND_BASED_DEALS_712x384_02.gif" },
// //   { link: "https://example.com/link6", image: "https://ug.jumia.is/cms/PAYWEEK_DEALS_6_SX_712x384_WK25.gif" },
// //   { link: "https://example.com/link7", image: "https://ug.jumia.is/cms/PAYWEEK_DEALS_1_SX_712x384_WK25.gif" },
// //   { link: "https://example.com/link8", image: "https://ug.jumia.is/cms/PAYWEEK_DEALS_4_SX_712x384_WK25.gif" },
 
// // ];

// export default function HomeCoursel({slides}) {
//   // console.log(slides)
//   return (
//     <>
//       <Swiper
//         dir="rtl"
//         autoplay={{
//           delay: 3500,
//           disableOnInteraction: false,
//         }}
//         centeredSlides={true}
//         navigation={false}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Navigation, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <Link href={`/banner/${slide.id}`}>
//               <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className='w-full h-full object-contain rounded-md'/>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }



"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const mobileSlides = [
  {id: "668b98ceca4fb049da23f94a", imageUrl: "banner/668b98ceca4fb049da23f94a" },
  { id: "668b908dc0bef7fb232f313a", imageUrl: "https://ug.jumia.is/cms/DH_Deals_2_SX_660X330.gif" },
];

export default function HomeCarousel({slides}) {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesData(slides);
      } else {
        setSlidesData(slides);
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);

    return () => window.removeEventListener('resize', updateSlides);
  }, []);

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
    >
    
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Link href={`/banner/${slide.id}`}>
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className='w-full h-full object-contain rounded-md'/>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
