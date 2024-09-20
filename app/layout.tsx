
import "./globals.css";
import {DM_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/context/Providers";
import { CartProvider } from "@/components/CartContext";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { ReactNode } from "react";
 

interface RootLayoutProps {
  children: ReactNode;
}

const inter = DM_Sans({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL("https://Kyajastoreug.com"),
  title: {
    default: "Kyaja store Ug UG - Your One-Stop Shop for All Your Needs",
    template: "%s | kyaja store Ug UG",
  },
  description:
    "Discover a wide range of quality products at kyaja store Ug UG, located in Kampala downtown. Explore our extensive collection, including fashion, electronics, and more. From the latest gadgets to trendy fashion, we've got it all. Call us at +256 752 815998 for personalized assistance and unbeatable deals.",
  applicationName: "Next.js",
  keywords: [
    "Kyaja store Ug UG",
    "Kampala downtown",
    "electronics",
    "fashion",
    "gadgets",
    "trendy fashion",
    "personalized assistance",
    "unbeatable deals",
    "one-stop shop",
    "quality products",
    "tech accessories",
    "home appliances",
    "affordable fashion",
    "student discounts",
    "local business",
    "convenient shopping",
    "online store",
    "best prices",
    "customer satisfaction",
    "top brands",
    "latest trends",
  ],
  author: "collinz",
  publisher: "Kyaja store Ug UG",
  alternates: {
    canonical: "/",
    languages: ["en"],
  },
  creator: {
    name: "COLLINZ",
  },
  openGraph: {
    title: {
      default: "Kyaja store UG - Your One-Stop Shop for All Your Needs",
      template: "%s | kyaja store Ug UG",
    },
    description:
      "Discover a wide range of quality products at kyaja store Ug UG, located in Kampala downtown. Explore our extensive collection, including fashion, electronics, and more. From the latest gadgets to trendy fashion, we've got it all. Call us at +256 752 815998 for personalized assistance and unbeatable deals.",
    url: "http://Kyajastore.com",
    siteName: "Kyaja store Ug ",
    type: "website",
    local: "en_us",
  },
};

export default function RootLayout({ children }:RootLayoutProps) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
          <Providers>
          <CartProvider>
            <ToastContainer />
            {children}
          </CartProvider>
        </Providers>
      </body>
     
    </html>
  );
}
