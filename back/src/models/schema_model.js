import mongoose from "mongoose";
import { Schema } from "mongoose";
const ModelSchema = new Schema(
  {
    name: {
      type: String,
      requiere: true,
      unique: true,
      trim: true, //esto es para eliminar los espacios en blanco que dee el usuario
    },
    price: { type: String, requiere: true, trim: true },
    description: { type: String, trime: true },
    image: { type: String, requiere: true, trim: true },
    category: { type: String, requiere: true, trim: true },
    potencia: { type: String, requiere: true, trim: true },
    velocidad: { type: String, requiere: true, trim: true },
    hps: { type: String, requiere: true, trim: true },
  },
  {
    collection: "products",
  },

  {
    Timestamps: true,
  }
);

export const Product = mongoose.model("Product", ModelSchema);
