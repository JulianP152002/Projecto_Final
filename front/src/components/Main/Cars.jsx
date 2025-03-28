import { useEffect } from "react";
import { Products } from "../../hooks/Products";
import RenderProducts from "../../hooks/RenderProducts";

function Cars() {
  const { products, getProducts } = Products();
  // const [image, setImage] = useState(null);

  useEffect(() => {
    getProducts();
  }, []); // hay que arreglar esto, ya que si coloco products se crea un loop infinito

  return (
    <section className="content_cars">
      <h1 className="content_cars-title">
        Nuestros <span>Vehiculos</span>
      </h1>

      <h2 className="cars_title">BMW M</h2>
      {/* 
      <FormPost products={products}></FormPost> */}
      <div className="cars_cars-m">
        {/* {form.image && (
          <img
            className=" w-40"
            src={URL.createObjectURL(form.image)}
            alt="imagen"
          />
        )} */}
        {products?.length > 0 ? (
          <RenderProducts products={products} />
        ) : (
          <p>No hay Carros</p>
        )}
      </div>

      <hr />
    </section>
  );
}
export default Cars;
