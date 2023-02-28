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
  cartState: false,
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
  totalCost: 0,
});

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, cartItem) => cartItem.quantity * cartItem.price + total, 0).toFixed(2)
    setTotalCost(totalPrice)
  }, [cartItems])

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const cartToggle = () => {
    console.log('here')
    setCartState(!cartState);
    console.log(cartState)
  };
  console.log(cartItems);
  const value = { cartItems, addItemsToCart, cartCount, totalCost, cartToggle, cartState };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
