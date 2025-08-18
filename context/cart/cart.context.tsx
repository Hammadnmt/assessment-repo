"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { CartContextType, CartItem } from "./cart.types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Load initial cart from API

  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) setItems(data.data);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);
  const clearCart = async (items: CartItem[]) => {
    try {
      setLoading(true);
      for (const item of items) {
        await fetch(`/api/cart/${item._id}`, { method: "DELETE" });
      }
      setItems([]);
    } catch (error) {
      setLoading(false);
      console.error("Failed to clear cart:", error);
    } finally {
      setLoading(false);
    }
  };
  //  Cart functions with API integration
  const addToCart = async (item: CartItem) => {
    try {
      const existing = Array.isArray(items) && items.find((i) => i._id === item._id);
      const payload = existing ? { quantity: existing.quantity + 1 } : { ...item, quantity: 1 };

      const method = existing ? "PUT" : "POST";
      const url = existing ? `/api/cart/${item._id}` : "/api/cart";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      await fetchCart();
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };
  const cartEmpty = () => {
    setItems([]);
  };
  const removeFromCart = async (id: string) => {
    try {
      await fetch(`/api/cart/${id}`, { method: "DELETE" });
      await fetchCart();
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    }
  };

  const increaseQuantity = async (id: string) => {
    const item = items.find((item) => item._id === id);
    await fetch(`api/cart/${id}`, {
      method: "PUT",
      body: JSON.stringify({ quantity: (item?.quantity ?? 0) + 1 }),
    });
    await fetchCart();
  };

  const decreaseQuantity = async (id: string) => {
    const item = items.find((item) => item._id === id);
    if (!item) return;

    try {
      await fetch(`/api/cart/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      });
      await fetchCart();
    } catch (error) {
      console.error("Failed to decrease quantity:", error);
    }
  };

  function calcualtions() {
    const itemCounter = items.length;
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return { itemCounter, totalPrice };
  }
  const { itemCounter, totalPrice } = calcualtions();

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartEmpty,
        clearCart,
        itemCounter,
        totalPrice,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
