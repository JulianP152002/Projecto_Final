import mongoose from "mongoose";
import { Schema } from "mongoose";
const ModelSchema = new Schema(
  {
    name: { type: String },
    price: { type: String },
    description: { type: String },
    image: { type: String },
  },
  {
    Timestamps: true,
  }
);

export const Product = mongoose.model("Product", ModelSchema);
