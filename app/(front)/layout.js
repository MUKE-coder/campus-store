import { getSingleStyle } from "@/actions/styles";
import Footer from "@/components/Footer";
import SubNav from "@/components/SubNav";
import ShopHeader from "@/components/frontend/ShopHeader";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function FrontLayout({ children }) {
  const session = await getServerSession(authOptions);
  const allCategories = (await getData("categories")) || [];
  const singleStyle= await getSingleStyle()
  const backgroundColor =  singleStyle.primaryColor || "#f68b1e";
  const user = session?.user;

  
  return (
    <div className="relative overflow-hidden lg:px-0  md:px-0 px-1">
      <SubNav/>
      <div className="sticky top-0 h-[5vh] z-30 ">
      <ShopHeader backgroundColor={backgroundColor} allCategories={allCategories} user={user} />
      </div>
      <div className="overflow-hidden lg:mt-0 md:mt-0 mt-[10%]">{children}</div>
      <Footer />
    </div>
  );
}
