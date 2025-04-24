import mongoose from "mongoose";
import { Schema } from "mongoose";
const ModelSchema = new Schema(
  {
    name: { type: String, requiere: true },
    price: { type: String, requiere: true },
    description: { type: String },
    image: { type: String, requiere: true },
    category: { type: String, requiere: true },
  },
  {
    Timestamps: true,
  }
);

export const Product = mongoose.model("Product", ModelSchema);
