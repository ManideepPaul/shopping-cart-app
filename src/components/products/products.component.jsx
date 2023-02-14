import { useContext } from "react";
import { ProductContext } from "../context/product/product.context";
import ProductCard from "../product-card/product-card.component";

const Products = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
