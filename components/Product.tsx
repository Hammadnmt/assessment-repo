import React from "react";
import Image from "next/image";
import { useCart } from "@/context/cart/cart.context";
interface ProductCardProps {
  title: string;
  newPrice: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-black text-white m-1 max-w-xs rounded-lg border-[1px] border-gray-600 p-4 shadow-lg flex flex-col justify-between gap-3">
      <div className="">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
        <div>
          <span className="text-2xl font-bold">${price}</span>
        </div>
      </div>
      <div className="w-full">
        <button
          className="bg-sky-400 text-black py-2 rounded-md hover:bg-sky-300 font-semibold w-full"
          onClick={() => addToCart({ id, name, price, quantity: 1 })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
