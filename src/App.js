import Navbar from "./components/navbar/navbar.component";
import Products from "./components/products/products.component";

function App() {
  return (
    <div className="App font-open-sans-condensed">
      <Navbar className='drop-shadow-2xl' />
      <Products />
    </div>
  );
}

export default App;
