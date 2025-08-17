import { useCart } from "@/context/cart/cart.context";
import toast from "react-hot-toast";

export function useProductCard(name: string, id: string, price: number, image: string) {
  const { addToCart } = useCart();

  /**
   * Handles adding the product to the cart and shows a toast
   */
  const handleAddToCart = () => {
    addToCart({ _id: id, name, price, quantity: 1, image });
    toast.success(`${name} added to cart`);
  };

  return { handleAddToCart };
}
