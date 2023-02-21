import { createContext, useEffect, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };
  console.log(cartItems);
  const value = { cartItems, addItemsToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};