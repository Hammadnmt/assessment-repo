import { CartItemModel, CartItem } from "@/model/Cart"; // Assuming you have a CartItem model

const cartService = {
  /**
   * Get all items in the cart
   * @returns {Promise<CartItem[]>} Array of cart items
   * @throws {Error} Throws an error if fetching fails
   */
  getAllItems: async (): Promise<CartItem[]> => {
    try {
      const items = await CartItemModel.find();
      return items;
    } catch (error: unknown) {
      console.error("Error fetching cart items:", error);
      throw new Error(error instanceof Error ? error.message : "Failed to fetch cart items");
    }
  },

  /**
   * Add an item to the cart
   * @param {Partial<CartItem>} item - The item to add
   * @returns {Promise<CartItem>} The added cart item
   * @throws {Error} Throws an error if adding fails
   */
  addItem: async (item: Partial<CartItem>): Promise<CartItem> => {
    try {
      const newItem = new CartItemModel(item);
      await newItem.save();
      return newItem;
    } catch (error: unknown) {
      console.error("Error adding item to cart:", error);
      throw new Error(error instanceof Error ? error.message : "Failed to add item to cart");
    }
  },

  /**
   * Update quantity of a cart item
   * @param {string} id - The ID of the cart item
   * @param {number} quantity - New quantity
   * @returns {Promise<CartItem | null>} Updated cart item or null if not found
   * @throws {Error} Throws an error if updating fails
   */
  updateItemQuantity: async (id: string, quantity: number): Promise<CartItem | null> => {
    try {
      const updatedItem = await CartItemModel.findByIdAndUpdate(
        id,
        { quantity },
        { new: true } // Return the updated document
      );
      return updatedItem;
    } catch (error: unknown) {
      console.error(`Error updating cart item ${id}:`, error);
      throw new Error(error instanceof Error ? error.message : "Failed to update cart item");
    }
  },

  /**
   * Remove an item from the cart
   * @param {string} id - The ID of the cart item to remove
   * @returns {Promise<CartItem | null>} Removed cart item or null if not found
   * @throws {Error} Throws an error if deletion fails
   */
  removeItem: async (id: string): Promise<CartItem | null> => {
    try {
      const removedItem = await CartItemModel.findByIdAndDelete(id);
      return removedItem;
    } catch (error: unknown) {
      console.error(`Error removing cart item ${id}:`, error);
      throw new Error(error instanceof Error ? error.message : "Failed to remove cart item");
    }
  },
};

export default cartService;
