import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [product, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getProducts()
  }, []);

  const value = { product };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
