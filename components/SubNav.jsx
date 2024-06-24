import { getSingleStyle } from '@/actions/styles';
import React from 'react'

export default async function SubNav() {
  const singleStyle= await getSingleStyle()
  const navImageUrl = singleStyle.topBannerImage || "/nav.gif";

  const backgroundColor =  singleStyle.secondaryColor || "#633185";

  return (
    <div style={{ backgroundColor }} className=' w-full lg:h-[9.1vh] h-[10%] flex justify-center items-center'>
      <img src={navImageUrl} alt="" className='lg:w-[90%] w-full h-full object-contain '/>
     </div>
  )
}
