import React, { createContext, useState } from "react";
import allProduct from "../../assets/allProducts.json";
export const MainContext = createContext();
const MyProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(allProduct);
  const [carts, setCarts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const addToCart = (product) => {
    setCarts((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev;
      }
      return [...prev, product];
    });
  };
  const addToFavorite = (product) => {
    setFavorites((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromFavorite = (productId) => {
    setFavorites((prev) => prev.filter((product) => product.id !== productId));
  };
  const removeFromCart = (productId) => {
    setCarts((prev) => prev.filter((product) => product.id !== productId));
  };
  const value = {
    allProducts,
    setAllProducts,
    addToCart,
    carts,
    setCarts,
    removeFromCart,
    favorites,
    setFavorites,
    addToFavorite,
    removeFromFavorite,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
