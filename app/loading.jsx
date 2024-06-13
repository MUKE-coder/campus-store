import React from "react";

export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Navbar */}
      <div className="bg-gray-200 h-16 w-full mb-4"></div>

      {/* Search Bar */}
      <div className="bg-gray-200 h-12 w-3/4 mx-auto mb-4"></div>

      {/* Banners */}
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-gray-200 h-48 w-1/3"></div>
        <div className="bg-gray-200 h-48 w-1/3"></div>
        <div className="bg-gray-200 h-48 w-1/3"></div>
      </div>

      {/* Shop By Category */}
      <div className="bg-gray-200 h-10 w-3/4 mx-auto mb-4"></div>
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
        <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
        <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
        <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
        <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
        <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
      </div>

      {/* Shop Electronics Products */}
      <div className="bg-gray-200 h-10 w-3/4 mx-auto mb-4"></div>

      {/* Filter */}
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-gray-200 h-8 w-20"></div>
        <div className="bg-gray-200 h-8 w-20"></div>
        <div className="bg-gray-200 h-8 w-20"></div>
        <div className="bg-gray-200 h-8 w-20"></div>
        <div className="bg-gray-200 h-8 w-20"></div>
      </div>

      {/* Products */}
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-gray-200 h-64 w-1/4"></div>
        <div className="bg-gray-200 h-64 w-1/4"></div>
        <div className="bg-gray-200 h-64 w-1/4"></div>
        <div className="bg-gray-200 h-64 w-1/4"></div>
      </div>

      {/* Footer */}
      <div className="bg-gray-200 h-16 w-full mt-4"></div>
    </div>
  );
}
