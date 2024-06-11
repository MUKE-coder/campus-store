"use client";
import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { HelpCircle, ShoppingCart, User } from "lucide-react";
import HelpModal from "./HelpModal";
import CartCount from "./CartCount";
import { useSession } from "next-auth/react";
import UserAvatar from "../backoffice/UserAvatar";
export default function ShopHeader() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white dark:bg-slate-700 border-b border-t">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 gap-8">
        {/* Logo */}
        <Link className="flex items-center " href="/">
          <Image src={logo} alt="kyaja logo" className="w-20 h-20 mt-4" />
          <div className="flex flex-col">
            <span className="font-bold text-xl uppercase">Kyaja</span>
            <span className="text-xs">Shop Smart, Shop Online</span>
          </div>
        </Link>
        {/* SEARCH */}
        <div className="flex-grow">
          <SearchForm />
        </div>
        <div className="flex gap-8">
          {status === "unauthenticated" ? (
            <Link
              href="/login"
              className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
            >
              <User />
              <span>Login</span>
            </Link>
          ) : (
            <UserAvatar user={session?.user} />
          )}

          <HelpModal />
          <CartCount />
        </div>
      </div>
    </div>
  );
}
