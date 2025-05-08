import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { PORT } from "./config.js";

const app = express();

const allowedOrigins = [
  "https://front-production-2321.up.railway.app", // producción (sin slash final)
  "http://localhost:5173", // desarrollo local
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No autorizado por CORS"));
    }
  },
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    status: false,
    error: "Demasiadas solicitudes. Intenta nuevamente en unos minutos.",
  },
});

app.use(limiter);
app.use(cors(corsOptions));
app.use(express.json());

app.listen(PORT);
console.log(`Server running on port ${PORT}`);

export default app;
