"use client";
import { getSuggestions } from "@/actions/search";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export default function SearchForm({ backgroundColor }) {
  const { register, handleSubmit, reset, watch } = useForm();
  const router = useRouter();
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const subscription = watch(async (value, { name }) => {
      if (name === 'searchTerm') {
        const searchTerm = value.searchTerm;
        if (!searchTerm) {
          setSuggestions([]);
          return;
        }
        const suggestions = await getSuggestions(searchTerm);
        setSuggestions(suggestions || []);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSearch(data) {
    const { searchTerm } = data;
    reset();
    router.push(`/catalog/?q=${searchTerm}`);
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex items-center">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-4 h-4 me-2" />
        </div>
        <input
          {...register("searchTerm")}
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="Search Products, Categories, Markets..."
          required
        />
        {suggestions.length > 0 && (
          <ul ref={suggestionsRef} className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => {
                  reset();
                  router.push(`/catalog/?q=${suggestion}`);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 "
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="submit"
        className=" hidden lg:flex md:flex items-center py-2 px-3 ms-2 text-sm font-bold text-white rounded-sm border border-[#f68b1e] hover:bg-[#f68b1e] focus:ring-4 focus:outline-none focus:ring-[#f68b1e] dark:bg-[#f68b1e] dark:hover:bg-[#ca8037d8] btnShadow dark:focus:ring-[#f68a1eb6] uppercase"
        style={{ backgroundColor }}
      >
        Search
      </button>
    </form>
  );
}
