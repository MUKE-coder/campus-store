import React from 'react'
import HomeCoursel from './HomeCoursel'
import HomeSideBarCat from './HomeSideBarCat'

export default function HomeBanners({banners, categories}) {
  // console.log(categories)
  return (
    <div className='lg:h-[70vh] md:h-[40vh] h-[40vh] w-full flex gap-3 shadow-md pt-4 p-2'>

     <div className=' rounded-sm hidden lg:block lg:w-[18%] bg-white'>
      <HomeSideBarCat categories={categories}/>
     </div>

     <div className='lg:w-[62%] w-full '>
    <HomeCoursel slides={banners}/>
     </div>

     <div className='lg:w-[20%] hidden lg:flex flex-col gap-2'>
     <div className='w-full h-1/2 bg-[#ffffff] rounded-sm p-3 flex flex-col gap-6'>
      <div className='flex gap-2 '>
        <img src="/help.png" alt="" className='w-9 h-9 object-contain'/>
        <div className='flex flex-col'>
          <h2 className='text-sm text-[#313133] font-semibold'>HELP CENTER</h2>
          <p className='text-xs text-[#313133]'>Guide To Customer Care</p>
        </div>
      </div>
      <div className='flex gap-2 '>
        <img src="/return.png" alt="" className='w-9 h-9 object-contain'/>
        <div className='flex flex-col'>
          <h2 className='text-sm text-[#313133] font-semibold'>EASY RETURN</h2>
          <p className='text-xs text-[#313133]'>Quick Refund </p>
        </div>
      </div>
      <div className='flex gap-2 '>
        <img src="/sell.png" alt="" className='w-9 h-9 object-contain'/>
        <div className='flex flex-col'>
          <h2 className='text-sm text-[#313133] font-semibold'>SELL ON KYAJA</h2>
          <p className='text-xs text-[#313133]'>Millions Of Visitors</p>
        </div>
      </div>
     


     </div>
     <div className='w-full h-1/2 bg-purple-600 rounded-md'>
     <img src="https://ug.jumia.is/cms/PAY_WEEK_SmallBanner_218X184_WK25.gif" alt="" className='w-full h-full object-cover rounded-md' />
     </div>
    </div>
    </div>
  )
}
