import { Schema, model, Document } from "mongoose";

// Interface for TypeScript type checking
export interface CartItem extends Document {
  name: string;
  price: number;
  quantity: number;
}

// Define the schema for a cart item
const cartItemSchema = new Schema<CartItem>(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Price cannot be negative
    },
    quantity: {
      type: Number,
      required: true,
      min: 1, // Quantity must be at least 1
      default: 1,
    },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

// Create and export the model
export const CartItemModel = model<CartItem>("CartItem", cartItemSchema);
