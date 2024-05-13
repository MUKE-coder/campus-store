import "../styles/main.scss";
import { Inter } from "next/font/google";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-amber-500">
        <CartProvider>
          <ToastContainer />
          <TopBanner />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
