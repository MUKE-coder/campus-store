// pages/checkout/page.js
import CartBanner from "@/components/Checkout/CartBanner";
import StepForm from "@/components/Checkout/StepForm";
import Steps from "@/components/Checkout/Steps";
import { getCounties, getDistricts, getRegions } from "@/lib/allFetch";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
// import { getRegions, getDistricts, getCounties } from "@/lib/fetchLocations";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const steps = [
    {
      number: 1,
      title: "Personal Details",
    },
    {
      number: 2,
      title: "Shipping Details",
    },
    {
      number: 3,
      title: "Payment Method",
    },
    {
      number: 4,
      title: "Order Summary",
    },
  ];

  const regions = await getRegions();
  const districts = await getDistricts();
  const counties = await getCounties();
  // console.log(`these are the regions ${regions} `)
  return (
    <div className=" min-h-screen md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]">
      <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
        {/* STEPS */}
        <Steps steps={steps} />
        <div className="w-full  p-4 bg-white border  rounded-lg shadow sm:p-6 md:p-8  dark:border-gray-700">
          {/* Banner */}
          <CartBanner />
          {/* Form */}
          <StepForm regions={regions} districts={districts} counties={counties} />
        </div>
      </div>
    </div>
  );
}
