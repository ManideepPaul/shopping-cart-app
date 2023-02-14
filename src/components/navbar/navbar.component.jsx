import { useState } from "react";
import Cart from "../cart/cart.component";

const Navbar = () => {
  const [cartState, setCartState] = useState(false);
  const handleClick = () => {
    cartToggle();
  };
  const cartToggle = () => {
    setCartState(!cartState);
  };

  return (
    <div className="flex flex-wrap justify-between px-8 py-4 shadow-md shadow-gray-200">
      <span className="text-3xl font-semibold tracking-wide ">
        SHOPPING CART
      </span>
      <button
        onClick={handleClick}
        className="px-8 py-2 text-2xl font-semibold tracking-wide text-white bg-orange-400 rounded-full active:bg-orange-500"
      >
        CART <span className="pl-2">6</span>
      </button>
      {cartState && <Cart cartToggle={cartToggle} />}
    </div>
  );
};

export default Navbar;
