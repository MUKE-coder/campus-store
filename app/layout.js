import TopBanner from "@/components/TopBanner";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campus Store Ug",
  description: "Online Store",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary">
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
