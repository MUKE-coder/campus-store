import BuyNowComp from '@/components/BuyNow';
import BuyNow from '@/components/BuyNow'
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const session = await getServerSession(authOptions);
    const user=session?.user
    // console.log(user)
    if (!session) {
      redirect("/login?q=checkout");
    }
  return (
    <div>
        <BuyNowComp/>
    </div>
  )
}
