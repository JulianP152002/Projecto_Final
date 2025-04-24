import { useEffect } from "react";
import { Products } from "../../utils/Products";
import RenderProducts from "../../hooks/RenderProducts";

function Cars() {
  const { products, getProducts } = Products();

  useEffect(() => {
    getProducts();
  }, []); // hay que arreglar esto, ya que si coloco products se crea un loop infinito
  const ProductsM = products.filter((product) => product.category == "BMW M");
  const ProductsX = products.filter((product) => product.category == "BMW X");
  const Hibridos = products.filter((product) => product.category == "Hibridos");

  const Convertibles = products.filter(
    (product) => product.category == "Convertibles"
  );

  const ProductsElectricos = products.filter(
    (product) => product.category == "Electricos"
  );

  return (
    <section className="content_cars">
      <h1 className="content_cars-title">
        Nuestros <span>Vehiculos</span>
      </h1>
      <nav className="w-full flex py-6 ">
        <ul className=" w-full flex border-b-[1px] border-gray-300">
          <li className=" cursor-pointer mr-6 text-gray-500 hover:text-gray-800 transition-all hover:border-b-[2px] pb-4 ">
            BMW M
          </li>
          <li className=" cursor-pointer mr-6 text-gray-500 hover:text-gray-800 transition-all hover:border-b-[2px] pb-4 ">
            BMW X
          </li>
          <li className=" cursor-pointer mr-6 text-gray-500 hover:text-gray-800 transition-all hover:border-b-[2px] pb-4 ">
            Eléctricos
          </li>
          <li className=" cursor-pointer mr-6 text-gray-500 hover:text-gray-800 transition-all hover:border-b-[2px] pb-4 ">
            Híbrido conectable
          </li>
          <li className=" cursor-pointer mr-6 text-gray-500 hover:text-gray-800 transition-all hover:border-b-[2px] pb-4 ">
            Convertibles
          </li>
        </ul>
      </nav>

      {products?.length > 0 ? (
        <>
          <h2 className="-ml-5 text-3xl ">BMW M</h2>
          <div className="cars_cars-m">
            <RenderProducts products={ProductsM} />
          </div>
          <hr />
          <h2 className="pt-8 pb-4 -ml-5 text-3xl ">BMW X</h2>
          <div className="cars_cars-m">
            <RenderProducts products={ProductsX} />
          </div>
          <hr />
          <h2 className="pt-8 pb-4 -ml-5 text-3xl ">BMW ELECTRICOS</h2>
          <div className="cars_cars-m">
            <RenderProducts products={ProductsElectricos} />
          </div>
          <h2 className="pt-8 pb-4 -ml-5 text-3xl ">BMW Hibridos</h2>
          <div className="cars_cars-m">
            <RenderProducts products={Hibridos} />
          </div>
          <h2 className="pt-8 pb-4 -ml-5 text-3xl ">CONVERTILES</h2>
          <div className="cars_cars-m">
            <RenderProducts products={Convertibles} />
          </div>
        </>
      ) : (
        <p>No hay Carros</p>
      )}

      <hr />
    </section>
  );
}
export default Cars;
