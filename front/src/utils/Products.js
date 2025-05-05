import { useState } from "react";
import { GetProducts } from "./GetProducts";
export function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const newProduscts = await GetProducts();
    setProducts(newProduscts);
  };
  return { products, getProducts, setProducts };
}
