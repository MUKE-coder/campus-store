import AppBanner from "@/components/AppBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubNav from "@/components/SubNav";
import TopBanner from "@/components/TopBanner";
import ShopHeader from "@/components/frontend/ShopHeader";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function FrontLayout({ children }) {
  const session = await getServerSession(authOptions);
  const allCategories = (await getData("categories")) || [];

  const user = session?.user;
  return (
    <div className="relative">
      <div className="lg:hidden md:hidden block">
      <AppBanner/>
      </div>
      <SubNav/>
      {/* <TopBanner /> */}
      <div className="sticky top-0 h-[5vh] z-30">
      <ShopHeader allCategories={allCategories} user={user} />
      </div>
      <div className="overflow-hidden ">{children}</div>
      <Footer />
    </div>
  );
}
