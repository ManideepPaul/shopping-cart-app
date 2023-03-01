import { useContext } from "react";
import { CartContext } from "../../context/cartProducts/cart.context";

const CartItem = ({ cartItem }) => {
  const { removeItem, addItemsToCart, reduceQuantity } = useContext(CartContext)
  const { image, quantity, price, id } = cartItem;

  const handleDelete = () => {
    removeItem(id)
  }

  const handleIncrement = () => {
    addItemsToCart(cartItem)
  }

  const handleDecrement = () => {
    reduceQuantity(id)
  }

  return (
    <div className="flex flex-col items-center p-2 m-2 border-2 border-solid rounded-md shadow-gray-200">
      <button className="text-xl place-self-end" onClick={handleDelete}>&#10006;</button>
      <img src={image} alt="" className="w-32 my-5" />
      <div className="flex items-center justify-around w-full">
        <span className="text-xl font-extrabold">&#x20b9; {price}</span>
        <span className="flex justify-between w-12 text-xl font-extrabold">
          <button onClick={handleDecrement}>&#10094;</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>&#10095;</button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
