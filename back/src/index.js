import app from "./app.js";
import "./db.js";
import { getProducts } from "./controllers/controllers.js";
import { SaveProducts } from "./controllers/controllers.js";
import { DeleteProducts } from "./controllers/controllers.js";
import { UpdateProducts } from "./controllers/controllers.js";
import { upload } from "./config/multer.js";

app.get("/products", getProducts);

app.post(
  "/products",
  upload.fields([{ name: "image", maxCount: 1 }]),
  SaveProducts
);
app.delete("/products/:id", DeleteProducts);
app.put(
  "/products/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  UpdateProducts
);
