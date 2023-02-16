import { useState } from "react";
import Cart from "../cart/cart.component";
import Button from "../button/button.component";

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
      <Button
        onClick={handleClick}
        buttonType='nav'
      >
        CART <span className="pl-2">6</span>
      </Button>
      {cartState && <Cart cartToggle={cartToggle} />}
    </div>
  );
};

export default Navbar;
