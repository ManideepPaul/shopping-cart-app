import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = { products };
//   console.log(products);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
