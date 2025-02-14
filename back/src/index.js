import app from "./app.js";
import './db.js'
import Product from './models/schema_model.js'
import { PORT } from "./config.js";

app.get('/products',async (req, res)=>{
    const products = await Product.find();
    res.send(products)
})

app.post('/products',async (req, res)=>{
    const {name, price, description} = req.body //llamo los datos de front
    const Newproducts = await Product.create({
        name,
        price,
        description
    }); // Los guardo en la base de datos
    res.send(Newproducts) // y le respondo al usuarion con los nuevos datos
})