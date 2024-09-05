import React, { createContext, useState } from "react";
import allProduct from "../../assets/allProducts.json";
export const MainContext = createContext();
const MyProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(allProduct);
  const [carts, setCarts] = useState([]);
  const handleAddToCart = (id) => {
    const product = allProduct.find((item) => item.id == id);
    setCarts((pre) => [product, ...pre]);
  };

  const value = {
    allProducts,
    setAllProducts,
    handleAddToCart,
    carts,
    setCarts,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
