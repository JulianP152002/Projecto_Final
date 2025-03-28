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
    const { name, price, description } = req.body;
    const image = req.files.image;

    const { donwloadURL } = await uploadFile(image[0]);
    const Newproducts = await new Product({
      name,
      price,
      description,
      image: donwloadURL,
    }).save(); // Los guardo en la base de datos
    // res.send(Newproducts); // y le respondo al usuarion con los nuevos datos
    return res.status(200).json({ Newproducts });
  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
};
