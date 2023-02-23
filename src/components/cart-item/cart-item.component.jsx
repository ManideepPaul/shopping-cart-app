const CartItem = ({ cartItem }) => {
  const { image, quantity, price } = cartItem;
  return (
    <div className="flex items-center justify-between">
      <img src={image} alt="" className="w-20 my-5" />
      <span className="text-xl font-extrabold">{quantity}</span>
      <span className="text-xl font-extrabold">{price}</span>
    </div>
  );
};

export default CartItem;
