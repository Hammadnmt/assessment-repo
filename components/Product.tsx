import React from "react";
import { useProductCard } from "@/hooks/useProductCard";

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, name, price }) => {
  const { handleAddToCart } = useProductCard(name, _id, price);

  return (
    <div className="product-card bg-black text-white m-1 max-w-xs rounded-lg border border-gray-600 p-4 shadow-lg flex flex-col justify-between gap-3">
      <div className="product-details">
        <h2 className="text-lg font-bold">{name}</h2>
        <span className="text-2xl font-bold">${price}</span>
      </div>
      <div className="w-full">
        <button
          className="add-to-cart-btn bg-sky-400 text-black py-2 rounded-md hover:bg-sky-300 font-semibold w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
