import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import ShopHeader from "@/components/frontend/ShopHeader";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function FrontLayout({ children }) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div>
      <TopBanner />
      <ShopHeader user={user} />
      <div className="max-w-7xl mx-auto py-6 px-8 lg:px-0 ">{children}</div>
      <Footer />
    </div>
  );
}
