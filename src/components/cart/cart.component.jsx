import { useContext } from "react";
import { CartContext } from "../../context/cartProducts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const Cart = ({ cartToggle }) => {
  const { cartItems, totalCost } = useContext(CartContext);
  return (
    <dialog
      class="open:bg-white border-2 p-6 rounded-lg shadow-gray-200 shadow-md backdrop:bg-gray-500 z-10 w-96"
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
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
       <div className="flex items-center justify-between">
        <Button buttonType="checkout" children="checkout">Checkout</Button>
        <span className="text-xl">&#x20b9; <span  className="text-2xl font-extrabold">{totalCost}</span></span>
      </div>
    </dialog>
  );
};

export default Cart;
