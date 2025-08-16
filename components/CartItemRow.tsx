import React from "react";
import { CartItem } from "@/context/cart/cart.types";
import { useCart } from "@/context/cart/cart.context";

interface Props {
  item: CartItem;
  key: string;
  formatCurrency: (amount: number) => string;
}

/**
 * Component to render a single cart item row
 */
export const CartItemRow: React.FC<Props> = ({ item, formatCurrency }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <li className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition">
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-800 truncate">{item.name}</p>
        <div className="mt-1 text-sm text-gray-500">Price: {formatCurrency(item.price)}</div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item._id)}
          disabled={item.quantity <= 1}
          className="h-9 w-9 rounded-xl border border-gray-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 active:scale-95 transition"
          aria-label={`Decrease ${item.name} quantity`}
        >
          −
        </button>
        <span className="w-10 text-center font-medium text-gray-800 select-none">{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item._id)}
          className="h-9 w-9 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 active:scale-95 transition"
          aria-label={`Increase ${item.name} quantity`}
        >
          +
        </button>
      </div>

      {/* Line total */}
      <div className="w-28 text-right font-semibold text-gray-900">
        {formatCurrency(item.price * item.quantity)}
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item._id)}
        className="ml-2 text-sm text-red-600 hover:text-red-700 hover:underline"
      >
        Remove
      </button>
    </li>
  );
};
