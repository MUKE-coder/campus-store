import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import ShopHeader from "@/components/frontend/ShopHeader";
import React from "react";

export default function FrontLayout({ children }) {
  return (
    <div>
      <TopBanner />
      <ShopHeader />
      <div className="max-w-6xl mx-auto py-6 px-8 lg:px-0 ">{children}</div>
      <Footer />
    </div>
  );
}
