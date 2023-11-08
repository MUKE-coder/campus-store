import TopBanner from "@/components/TopBanner";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campus Store Ug",
  description: "Online Store",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary">
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
