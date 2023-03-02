import { useContext } from "react";
import { CartContext } from "../../context/cartProducts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const Cart = ({ cartToggle }) => {
  const { cartItems, totalCost } = useContext(CartContext);
  return (
    <div className='fixed right-0 top-0 z-10 w-screen h-screen bg-[#cfd1d055]'>
      <div
        className="fixed right-0 z-10 w-1/3 h-screen p-6 bg-white border-2 rounded-lg shadow-md top-20 shadow-gray-200 backdrop:bg-gray-500"
      >
        <div className="flex justify-between pb-5 text-4xl border-b-2">
          <span className="">Items in your Cart</span>
          <button className="text-4xl font-bold" onClick={cartToggle}>
            &#10006;
          </button>
        </div>
        <div className="hover:overflow-y-auto overflow-hidden h-[70%]">
          {cartItems.length === 0 ? (
            <div className="m-16 text-2xl font-semibold text-center">
              Your Cart is empty.
            </div>
          ) : (
            cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <Button buttonType="checkout" children="checkout">
            Checkout
          </Button>
          <span className="text-xl">
            &#x20b9;{" "}
            <span className="text-2xl font-extrabold">{totalCost}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
