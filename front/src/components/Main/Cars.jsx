import { useEffect, useState } from "react";
import { GetProducts } from "../../hooks/GetProducts";
import RenderProducts from "../../hooks/RenderProducts";
function Cars() {
  const [products, setProducts] = useState([]);
  const { data } = GetProducts();
  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <section className="content_cars">
      <h1 className="content_cars-title">
        Nuestros <span>Vehiculos</span>
      </h1>

      <h2 className="cars_title">BMW M</h2>

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
