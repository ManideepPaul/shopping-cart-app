import { useContext } from "react";
import { ProductContext } from '../../context/product/product.context'
import ProductCard from "../product-card/product-card.component";

const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-3 gap-8 m-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
