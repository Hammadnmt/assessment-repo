import { useCart } from "@/context/cart/cart.context";
import toast from "react-hot-toast";

export function useProductCard(name: string, id: string, price: number) {
  const { addToCart } = useCart();

  /**
   * Handles adding the product to the cart and shows a toast
   */
  const handleAddToCart = () => {
    addToCart({ _id: id, name, price, quantity: 1 });
    toast.success(`${name} added to cart`);
  };

  return { handleAddToCart };
}
