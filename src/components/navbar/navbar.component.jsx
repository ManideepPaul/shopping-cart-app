import { useState } from "react";

const Navbar = () => {
  const [dialogState, setDialogState] = useState(false);
  const handleClick = () => {
    dialogToggle()
};

const dialogToggle = () => {
      setDialogState(!dialogState);
  }
  return (
    <div className="flex justify-between flex-wrap py-4 px-8 shadow-gray-200 shadow-md">
      <span className="text-3xl font-semibold tracking-wide ">
        SHOPPING CART
      </span>
      <button
        onClick={handleClick}
        className="text-2xl tracking-wide font-semibold text-white rounded-full bg-orange-400 active:bg-orange-500 py-2 px-8"
      >
        CART <span className="pl-2">6</span>
      </button>
      {dialogState ? (
        <dialog
          class="open:bg-white border-2 p-6 rounded-lg shadow-gray-200 shadow-md backdrop:bg-gray-500 w-96"
          open
        >
          <div className="flex justify-between text-3xl pb-2 border-b-2">
            <span className="">Items in your Cart</span>
            <button className="text-4xl font-bold" onClick={dialogToggle}>X</button>
          </div>
        </dialog>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
