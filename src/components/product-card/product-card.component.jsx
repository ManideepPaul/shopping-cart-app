import { useContext } from "react";
import { CartContext } from "../../context/cartProducts/cart.context";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { title, image, price } = product;
  const { addItemsToCart } = useContext(CartContext);

  const handleAddItem = () => addItemsToCart(product)
  return (
    <div className="grid px-10 py-5 duration-200 border-2 border-solid rounded-lg shadow-md justify-items-center hover:scale-105">
      <div className="pb-4 text-lg font-extrabold">{title}</div>
      <img src={image} alt={title} className="w-56 h-64" />
      <span className="pt-4 text-xl font-bold">&#x20b9; {price}</span>
      <Button buttonType="addToCart" children="ADD TO CART" onClick={handleAddItem}/>
    </div>
  );
};

export default ProductCard;
