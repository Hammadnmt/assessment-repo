import React from "react";
import { CartItem } from "@/context/cart/cart.types";
import { useCart } from "@/context/cart/cart.context";
import Image from "next/image";

interface Props {
  item: CartItem;
  key: string;
  formatCurrency: (amount: number) => string;
}

/**
 * Component to render a single cart item row (dark themed)
 */
export const CartItemRow: React.FC<Props> = ({ item, formatCurrency }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <li className="px-6 py-4 flex items-center gap-4 border-b border-gray-700 last:border-b-0">
      {/* Item details */}
      <div className="flex-2 min-w-0">
        <Image
          src={item.image}
          width={50}
          height={50}
          alt={item.name}
          className="mb-[3px] object-cover rounded-[2px]"
        />
        <div className="mt-1 text-sm text-gray-400">Price: {formatCurrency(item.price)}</div>
        <p className="font-medium text-white truncate">{item.name}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item._id)}
          disabled={item.quantity <= 1}
          className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label={`Decrease ${item.name} quantity`}
        >
          −
        </button>
        <span className="w-10 text-center font-medium text-white select-none">{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item._id)}
          className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800 text-white"
          aria-label={`Increase ${item.name} quantity`}
        >
          +
        </button>
      </div>

      {/* Line total */}
      <div className="w-28 text-right font-semibold text-white">
        {formatCurrency(item.price * item.quantity)}
      </div>

      {/* Remove */}
      <button onClick={() => removeFromCart(item._id)} className="ml-2 text-sm text-red-500">
        Remove
      </button>
    </li>
  );
};
