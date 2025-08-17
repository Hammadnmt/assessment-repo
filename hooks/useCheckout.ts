import { useCart } from "@/context/cart/cart.context";
import { useState, useEffect } from "react";

/**
 * Hook to manage checkout page state and derived values
 */
export function useCheckout() {
  const { items, totalPrice, itemCounter, clearCart, cartEmpty, loading } = useCart();
  const [isEmpty, setIsEmpty] = useState(true);

  // Update `isEmpty` whenever cart items change
  useEffect(() => {
    setIsEmpty(!items || items.length === 0);
  }, [items]);

  return { items, totalPrice, itemCounter, isEmpty, loading, clearCart, cartEmpty };
}
