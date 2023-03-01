import { useContext } from "react";
import { CartContext } from "../../context/cartProducts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const Cart = ({ cartToggle }) => {
  const { cartItems, totalCost } = useContext(CartContext);
  return (
    <dialog
      className="z-10 p-6 border-2 rounded-lg shadow-md open:bg-white shadow-gray-200 backdrop:bg-gray-500 w-96"
      open
    >
      <div className="flex justify-between pb-5 text-4xl border-b-2">
        <span className="">Items in your Cart</span>
        <button className="text-4xl font-bold" onClick={cartToggle}>
          &#10006;
        </button>
      </div>
      {/* <header className="flex justify-between mt-2 text-2xl font-semibold">
        <span>Product</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </header> */}
      {cartItems.length === 0 ? <div className="m-16 text-2xl font-semibold text-center">Your Cart is empty.</div> : (cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      )))}
       <div className="flex items-center justify-between">
        <Button buttonType="checkout" children="checkout">Checkout</Button>
        <span className="text-xl">&#x20b9; <span  className="text-2xl font-extrabold">{totalCost}</span></span>
      </div>
    </dialog>
  );
};

export default Cart;
