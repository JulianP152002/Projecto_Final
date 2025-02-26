import app from "./app.js";
import "./db.js";
import Product from "./models/schema_model.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.post("/products", upload.single, async (req, res) => {
  const { name, price, description } = req.body; //llamo los datos de front
  const { image } = req.file;
  const Newproducts = await Product.create({
    name,
    price,
    description,
    image,
  }); // Los guardo en la base de datos
  res.send(Newproducts); // y le respondo al usuarion con los nuevos datos
});
