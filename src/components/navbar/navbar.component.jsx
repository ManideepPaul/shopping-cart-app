const Navbar = () => {
  return (
    <div className="flex justify-between flex-wrap py-4 px-8 shadow-gray-200 shadow-md">
      <span className="text-3xl font-semibold tracking-wide ">
        SHOPPING CART
      </span>
      <button className="text-2xl tracking-wide font-semibold text-white rounded-full bg-orange-400 active:bg-orange-500 py-2 px-8">
        CART <span className="pl-2">6</span>
      </button>
    </div>
  );
};

export default Navbar;
