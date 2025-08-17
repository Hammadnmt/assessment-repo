import React from "react";
import { CartItem } from "@/context/cart/cart.types";
import { useCart } from "@/context/cart/cart.context";
import Image from "next/image";

interface Props {
  item: CartItem;
  key: string;
  formatCurrency: (amount: number) => string;
}

export const CartItemRow: React.FC<Props> = ({ item, formatCurrency }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <li className="px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:gap-6 border-b border-gray-700 last:border-b-0">
      {/* Image + Details */}
      <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
        <Image src={item.image} width={60} height={60} alt={item.name} className="object-cover rounded-md" />
        <div className="min-w-0">
          <p className="font-medium text-white truncate">{item.name}</p>
          <div className="text-sm text-gray-400">Price: {formatCurrency(item.price)}</div>
        </div>
      </div>

      {/* Qty + Total + Remove (stacked on mobile) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-3 sm:mt-0">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseQuantity(item._id)}
            disabled={item.quantity <= 1}
            className="h-8 w-8 flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label={`Decrease ${item.name} quantity`}
          >
            −
          </button>
          <span className="w-8 text-center font-medium text-white select-none">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item._id)}
            className="h-8 w-8 flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800 text-white"
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>

        {/* Line total */}
        <div className="mt-2 sm:mt-0 w-full sm:w-28 text-right font-semibold text-white">
          {formatCurrency(item.price * item.quantity)}
        </div>

        {/* Remove */}
        <button onClick={() => removeFromCart(item._id)} className="mt-2 sm:mt-0 text-sm text-red-500">
          Remove
        </button>
      </div>
    </li>
  );
};
