"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");
  const [handleSearches, setHandleSearches] = useState([]);
  const [productDetails, setProductDetails] = useState("");
  let cartItems = [];
  
  if (typeof window !== "undefined") {
    cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
  }

  const [cart, setCart] = useState(cartItems);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

  const addRecentlyViewedProduct = (product) => {
    if (!recentlyViewedProducts.some((item) => item.id === product.id)) {
      const updatedRecentlyViewed = [product, ...recentlyViewedProducts].slice(
        0,
        4
      );
      setRecentlyViewedProducts(updatedRecentlyViewed);
      localStorage.setItem(
        "recentlyViewedProducts",
        JSON.stringify(updatedRecentlyViewed)
      );
    }
  };

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      toast.error("This product is already in the cart");
    } else {
      setCart((prevCart) => [...prevCart, product]);
      toast("This product has been added to the cart", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("This product has been removed from the cart");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cartItem"));
      if (storedCart) {
        setCart(storedCart);
      }
      const storedRecentlyViewed = JSON.parse(
        localStorage.getItem("recentlyViewedProducts")
      );
      if (storedRecentlyViewed) {
        setRecentlyViewedProducts(storedRecentlyViewed);
      }
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        setProductDetails,
        productDetails,
        recentlyViewedProducts,
        addRecentlyViewedProduct,
        handleSearches,
        setRecentlyViewedProducts,
        setHandleSearches,
        setSearchInput,
        searchInput,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
