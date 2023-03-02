import { useContext } from "react";
import Cart from "../cart/cart.component";
import Button from "../button/button.component";
import { CartContext } from "../../context/cartProducts/cart.context";

const Navbar = () => {
  const { cartCount, cartToggle, cartState } = useContext(CartContext);

  const handleClick = () => {
    cartToggle();
  };

  return (
    <div className="sticky top-0 z-10 flex flex-wrap justify-between px-8 py-4 bg-white shadow-md shadow-gray-200">
      <span className="text-3xl font-semibold tracking-wide ">
        SHOPPING CART
      </span>
      <Button onClick={handleClick} buttonType="nav">
        CART <span className="pl-2">{cartCount}</span>
      </Button>
      {cartState && <Cart cartToggle={cartToggle} />}
    </div>
  );
};

export default Navbar;
