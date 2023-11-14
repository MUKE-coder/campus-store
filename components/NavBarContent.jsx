import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "./CartContext";
import Link from "next/link";
import { categories } from "@/data";
import { BookCheck } from "lucide-react";
import { FiPhoneCall } from "react-icons/fi";

export default function NavBarContent() {
  const { cart } = useCart();
  return (
    <div className="px-8 flex flex-col gap-7 mt-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">My Campus store </h2>
        <div className="flex gap-4 items-center">
          <Link
            href="/cart"
            type="button"
            class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-lg  focus:outline-none "
          >
            <AiOutlineShoppingCart className="text-xl sm:text-2xl" />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-500  rounded-full -top-1 -right-1 ">
              {cart.length}
            </div>
          </Link>
          <h2>Cart</h2>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-8">
        <h2 className="text-lg font-bold">OUR CATEGORIES</h2>
        <div className="flex flex-col gap-4">
          {categories.map((cat) => {
            return (
              <Link className="flex gap-2" href="">
                <BookCheck />
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
