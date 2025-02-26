import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import RenderProducts from "../hooks/RenderProducts";
import { Products } from "../hooks/Products";

function Admin({ isLogged }) {
  const { products, getProducts } = Products();
  useEffect(() => {
    getProducts();
  }, []);
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const price = e.target[1].value;
    const description = e.target[2].value;

    const res = await fetch(`${BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        price,
        description,
      }),
    });
    const data = await res.json();
    products.push(data);
  };

  return (
    <div>
      <h1 className="text-red">Products</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="nombre" type="text" />
        <input placeholder="precio" type="text" />
        <input placeholder="descripcion" type="text" />
        <input type="file" />
        <button className="" type="submit">
          Enviar
        </button>
      </form>
      <div className="cars_cars-m">
        {products?.length > 0 ? (
          <RenderProducts products={products} />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
export default Admin;
