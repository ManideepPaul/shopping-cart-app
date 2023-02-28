const CartItem = ({ cartItem }) => {
  const { image, quantity, price } = cartItem;
  return (
    <div className="flex flex-col items-center p-2 my-5 border-2 border-solid rounded-md shadow-gray-200">
      <button className="text-xl place-self-end">&#10006;</button>
      <img src={image} alt="" className="w-32 my-5" />
      <div className="flex items-center justify-around w-full">
        <span className="text-xl font-extrabold">&#x20b9; {price}</span>
        <span className="flex justify-between w-12 text-xl font-extrabold">
          <button>&#10094;</button>
          <span>{quantity}</span>
          <button>&#10095;</button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
