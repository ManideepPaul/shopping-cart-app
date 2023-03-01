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

const removeItemFromCart = (id, cartItems) => {
  return cartItems.filter(item => item.id !== id)
}

const reduceQuantityOfItem = (id, cartItems) => {
 const existingCartItem = cartItems.find(cartItem => cartItem.id === id);

 if(existingCartItem.quantity === 1) {
  return cartItems.filter(item => item.id !== id)
 }
 console.log('reduceQuantityOfItem')
 return cartItems.map(cartItem => cartItem.id === id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
}

export const CartContext = createContext({
  cartState: false,
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
  totalCost: 0,
  removeItem: () => {},
  reduceQuantity: () => {}
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

  const removeItem = (id) => {
    setCartItems(removeItemFromCart(id, cartItems));
  }

  const reduceQuantity = (id) => {
    setCartItems(reduceQuantityOfItem(id, cartItems))
  }

  const cartToggle = () => {
    setCartState(!cartState);
  };


  console.log(cartItems);
  const value = { cartItems, addItemsToCart, cartCount, totalCost, cartToggle, cartState, removeItem, reduceQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
