import { useEffect } from "react";
import { Products } from "../../hooks/Products";
import RenderProducts from "../../hooks/RenderProducts";
function Cars() {
  const { products, getProducts } = Products();
  useEffect(() => {
    getProducts();
  }, []);
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const price = e.target[1].value;
    const description = e.target[2].value;
    const image = e.target[3].files[0];
    if (!image) {
      return alert("No hay archivo");
    }
    // if (
    //   file.type !== "image/jpeg" ||
    //   file.type !== "image/png" ||
    //   file.type !== "image/webp"
    // ) {
    //   return alert("El archivo no es una imagen");
    // }

    const res = await fetch(`${BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        price,
        description,
        image,
      }),
    });
    const data = await res.json();
    products.push(data);
  };

  return (
    <section className="content_cars">
      <h1 className="content_cars-title">
        Nuestros <span>Vehiculos</span>
      </h1>

      <h2 className="cars_title">BMW M</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="nombre" type="text" />
        <input placeholder="precio" type="text" />
        <input placeholder="descripcion" type="text" />
        <input
          className="border-0 bg-gray-600 cursor-pointer my-2 mx-2"
          type="file"
          accept="image/*"
        />
        <button
          className=" border-2 bg-amber-300 text-black px-4 py-2 "
          type="submit"
        >
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

      <hr />
    </section>
  );
}
export default Cars;
