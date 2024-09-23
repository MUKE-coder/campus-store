"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Category, Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type SearchFormProps = {
  products: Product[];
  categories: Category[];
};

export default function SearchForm({ products, categories }: SearchFormProps) {
  const router= useRouter()
  const [searchTerm, setSearchTerm] = useState('');
  const [productSuggestions, setProductSuggestions] = useState<Product[]>([]);
  const [categorySuggestions, setCategorySuggestions] = useState<Category[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setProductSuggestions([]);
        setCategorySuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      const filteredCategories = categories.filter(category =>
        category.title.toLowerCase().includes(value.toLowerCase())
      );
      setProductSuggestions(filteredProducts.slice(0, 6));
      setCategorySuggestions(filteredCategories.slice(0, 4));
    } else {
      setProductSuggestions([]);
      setCategorySuggestions([]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/c/catalog?term=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex items-center relative w-full max-w-3xl">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-4 h-4 me-2 text-gray-500" />
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Search Products, Categories, Sub-Category..."
          required
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <button
        type="submit"
        className="hidden lg:flex md:flex items-center py-2.5 px-5 ms-2 text-sm font-medium text-white bg-[#f68b1e] rounded-lg border border-[#f68b1e] hover:bg-[#e67d0e] focus:ring-4 focus:outline-none focus:ring-[#f68b1e]"
      >
        Search
      </button>
      {(productSuggestions.length > 0 || categorySuggestions.length > 0) && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg overflow-hidden z-20">
          {categorySuggestions.length > 0 && (
            <div className="p-2 border-b">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">CATEGORIES</h3>
              {categorySuggestions.map((category, index) => (
                <Link
                  key={index}
                  href={`/category/${category.slug}`}
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center">
                    {category.icon && <span className="mr-2">{category.icon}</span>}
                    <span className="text-sm">{category.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {productSuggestions.length > 0 && (
            <div className="p-2">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">PRODUCTS</h3>
              {productSuggestions.map((product, index) => (
                <Link
                  key={index}
                  href={`/p/${product.slug}`}
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center">
                    <img src={product.imageUrl || ''} alt={product.title} className="w-8 h-8 mr-2 object-cover" />
                    <span className="text-sm line-clamp-1">{product.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </form>
  );
}