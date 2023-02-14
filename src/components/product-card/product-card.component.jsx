const ProductCard = ({ product }) => {
  const { title, image, price } = product;
  return (
    <div className="grid justify-items-center ">
      <div>{title}</div>
      <img src={image} alt={title}  className="h-64 w-52"/>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
