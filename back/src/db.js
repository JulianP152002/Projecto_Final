import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
export const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGODB_URI)
      .then((db) => console.log("data base running"));
  } catch (error) {
    console.log("error connecting to the database", error.message);
  }
};
connectDB();
