import React from "react";
import Image from "next/image";
interface ProductCardProps {
  title: string;
  newPrice: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, newPrice, image }) => {
  return (
    <div className="bg-black text-white m-1 max-w-xs rounded-lg border-[1px] border-gray-600 p-4 shadow-lg flex flex-col justify-between gap-3">
      <div className="">
        <div>
          <Image src={null} alt={title} width={10} height={10} alt="Product Image" />
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div>
          <span className="text-2xl font-bold">${newPrice}</span>
        </div>
      </div>
      <div className="w-full">
        <button className="bg-sky-400 text-black py-2 rounded-md hover:bg-sky-300 font-semibold w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
