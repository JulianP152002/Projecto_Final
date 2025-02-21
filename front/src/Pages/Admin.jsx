import { useEffect, useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
function Admin() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URL}/products`)
      .then((Response) => Response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

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
        {products.map((product) => {
          return (
            <div key={product._id}>
              <h2>{product.name}</h2>
              <strong>{product.price}</strong>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Admin;
