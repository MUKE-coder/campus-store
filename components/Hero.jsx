import React from "react";

export default function Hero() {
  const sidebarLinks = [
    {
      id: 1,
      name: "Fashion",
      slug: "fashion",
      description: "",
      category: "",
      image: "",
    },
    {
      id: 2,
      name: "Electronics",
      slug: "electronics",
      description: "",
      category: "",
      image: "",
    },
    {
      id: 3,
      name: "Phones & Tablets",
      slug: "phones-and-tablets",
      description: "",
      category: "",
      image: "",
    },
    {
      id: 4,
      name: "Computers",
      slug: "computers",
      description: "",
      category: "",
      image: "",
    },
  ];
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-span-3 bg-green-600 h-14"></div>
      <div className="col-span-12 sm:col-span-6 bg-orange-500 h-14"></div>
      <div className="hidden sm:col-span-3 sm:flex bg-green-600 h-14"></div>
    </div>
  );
}
