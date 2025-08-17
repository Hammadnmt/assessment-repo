export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: (items: CartItem[]) => void;
  cartEmpty: () => void;
  itemCounter: number;
  totalPrice: number;
  loading: boolean;
};
