import { Product } from "../models/schema_model.js";
import { uploadFile } from "../utils/upload.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
};

export const SaveProducts = async (req, res) => {
  try {
    const { name, price, description, category, potencia, velocidad, hps } =
      req.body;
    const image = req.files.image;

    const { donwloadURL } = await uploadFile(image[0]);
    const Newproducts = await new Product({
      name,
      price,
      description,
      image: donwloadURL,
      category,
      potencia,
      velocidad,
      hps,
    }).save(); // Los guardo en la base de datos

    return res.status(200).json({ Newproducts });
  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
};

export const DeleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ status: false, message: "No existe el producto" });
    }
    return res
      .status(204)
      .json({ status: true, message: "Producto eliminado" });
  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
};
export const UpdateProducts = async (req, res) => {
  const { id } = req.params;

  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true, //con esto le digo que me devuelva el producto actualizado
    runValidators: true, //con esto le digo que valide los datos
  });
  if (!updatedProduct) {
    return res
      .status(404)
      .json({ status: false, message: "No existe el producto" });
  }
  res.json(updatedProduct);
};
