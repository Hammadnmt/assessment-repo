import React from "react";
import { useProductCard } from "@/hooks/useProductCard";

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, name, price }) => {
  const { handleAddToCart } = useProductCard(name, _id, price);

  return (
    <div className="bg-black text-white rounded-lg border border-gray-700 shadow-md max-w-sm flex flex-col">
      {/* Image placeholder */}
      <div className="h-24 w-full flex items-center justify-center bg-gray-900 rounded-t-lg">
        <span className="text-gray-500 text-xs">[Image here]</span>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 p-3">
        <h2 className="text-sm font-semibold">{name}</h2>
        <p className="text-gray-400 text-xs leading-snug">
          The Arb Cloud is a model designed to help traders identify arbitrage opportunities for co-integrated
          assets.
        </p>

        <div className="flex items-center gap-2 mt-1">
          <span className="line-through text-gray-500 text-xs">$50</span>
          <span className="text-lg font-bold text-white">${price}</span>
          <span className="text-[10px] text-gray-400">USD/monthly</span>
        </div>

        <button
          className="bg-sky-400 text-black py-1.5 mt-2 rounded-md hover:bg-sky-300 font-semibold text-sm w-full"
          onClick={handleAddToCart}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
