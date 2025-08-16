export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  itemCounter: number;
  totalPrice: number;
};
