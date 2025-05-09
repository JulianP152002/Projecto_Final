import app from "./app.js";
import "./db.js";
import { getProducts } from "./controllers/controllers.js";
import { SaveProducts } from "./controllers/controllers.js";
import { DeleteProducts } from "./controllers/controllers.js";
import { UpdateProducts } from "./controllers/controllers.js";
import { upload } from "./config/multer.js";
import rateLimit from "express-rate-limit";

const getLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Hasta 300 solicitudes por IP
  message: {
    status: false,
    error: "Demasiadas solicitudes GET. Intenta más tarde.",
  },
});

const changeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20, // Solo 20 solicitudes en 15 minutos
  message: {
    status: false,
    error: "Demasiadas acciones de escritura. Intenta más tarde.",
  },
});
app.get("/products", getLimiter, getProducts);

app.post(
  "/products",
  changeLimiter,
  upload.fields([{ name: "image", maxCount: 1 }]),
  SaveProducts
);
app.delete("/products/:id", changeLimiter, DeleteProducts);
app.put(
  "/products/:id",
  changeLimiter,
  upload.fields([{ name: "image", maxCount: 1 }]),
  UpdateProducts
);
