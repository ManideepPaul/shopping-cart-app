const Cart = ({ cartToggle }) => {
  
  return (
    <dialog
      class="open:bg-white border-2 p-6 rounded-lg shadow-gray-200 shadow-md backdrop:bg-gray-500 w-96"
      open
    >
      <div className="flex justify-between pb-2 text-3xl border-b-2">
        <span className="">Items in your Cart</span>
        <button className="text-4xl font-bold" onClick={cartToggle}>
          X
        </button>
      </div>
    </dialog>
  );
};

export default Cart;
