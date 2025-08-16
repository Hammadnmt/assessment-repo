export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: () => void;
  removeFromCart: () => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  itemCounter: number;
  totalPrice: number;
};
