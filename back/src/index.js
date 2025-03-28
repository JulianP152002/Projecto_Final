import app from "./app.js";
import "./db.js";
import { getProducts } from "./controllers/controllers.js";
import { SaveProducts } from "./controllers/controllers.js";
import { upload } from "./config/multer.js";
import { Product } from "./models/schema_model.js";
import { uploadFile } from "./utils/upload.js";
app.get("/products", getProducts);

app.post(
  "/products",
  upload.fields([{ name: "image", maxCount: 1 }]),
  SaveProducts
);
