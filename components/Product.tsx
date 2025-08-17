import React from "react";
import { useProductCard } from "@/hooks/useProductCard";
import Image from "next/image";

interface ProductCardProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, name, price, description, image }) => {
  const { handleAddToCart } = useProductCard(name, _id, price, image);

  return (
    <div className="bg-black text-white rounded-lg border border-gray-700 shadow-md max-w-sm flex flex-col justify-between">
      <div className="h-24 w-full flex justify-baseline bg-gray-900 rounded-t-lg relative">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 p-3">
        <h2 className="text-sm font-semibold">{name}</h2>
        <p className="text-gray-400 text-xs leading-snug">{description}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="line-through text-gray-500 text-xs">$50</span>
          <span className="text-lg font-bold text-white">${price}</span>
          <span className="text-[10px] text-gray-400">USD/monthly</span>
        </div>
      </div>
      <div className="mb-1 p-3">
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
