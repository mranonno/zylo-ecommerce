import React, { createContext, useState } from "react";
import allProduct from "../../assets/allProducts.json";
export const MainContext = createContext();
const MyProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(allProduct);
  const [carts, setCarts] = useState([]);
  const addToCart = (product) => {
    setCarts((prev) => {
      // Check if the product is already in the cart
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev; // Return the current cart if the product is already there
      }
      // Add the product to the cart if it's not already there
      return [...prev, product];
    });
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
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
