import { useState } from "react";
import { Navigate } from "react-router-dom";
import { GetProducts } from "../hooks/GetProducts";
import RenderProducts from "../hooks/RenderProducts";

function Admin({ isLogged }) {
  const [products, setProducts] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  const { data } = GetProducts();
  setProducts(data);
  // useEffect(() => {
  //   fetch(`${BACKEND_URL}/products`)
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

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
    setProducts([...products, data]);
  };

  return (
    <div>
      <h1 className="text-red">Products</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="nombre" type="text" />
        <input placeholder="precio" type="text" />
        <input placeholder="descripcion" type="text" />
        <button className="" type="submit">
          Enviar
        </button>
      </form>
      <div>
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
