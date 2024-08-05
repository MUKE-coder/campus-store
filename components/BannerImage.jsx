import React from 'react';

export default function BannerImage({ title, bgImage }) {
  return (
    <div 
      className='w-full h-[40vh] rounded-lg flex flex-col justify-center gap-1 md:px-9 px-5 lg:px-12 relative' 
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='absolute inset-0 bg-black/50 rounded-xl'></div>
      <div className='relative'>
        <h1 className='font-bold md:text-[35px] text-[24px] lg:text-[50px] text-white'>{title}</h1>
        {/* <p className='text-white text-[13px] lg:text-lg line-clamp-1'>{description}</p> */}
      </div>
    </div>
  );
}
