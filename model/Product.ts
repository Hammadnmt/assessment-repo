import { models, model, Schema, Document } from "mongoose";

// TypeScript interface (optional but recommended)
export interface ProductItem extends Document {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

// Schema definition
const productSchema = new Schema<ProductItem>(
  {
    name: {
      type: String,
      required: true,
      trim: true, // removes extra spaces
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // price cannot be negative
    },
    image: {
      type: String,
      default: "", // optional
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

// Create model
export const Product = models.Product || model<ProductItem>("Product", productSchema);
