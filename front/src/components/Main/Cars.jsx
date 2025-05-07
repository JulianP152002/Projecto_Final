import { useEffect, useState, useMemo } from "react";
import { Products } from "../../utils/Products";
import RenderProducts from "../../hooks/RenderProducts";
import SkeletonCar from "../../Skeletons/SkeletonCar";
import { Element } from "react-scroll";
function Cars() {
  const { products, getProducts } = Products();
  const [category, setCategory] = useState("BMW M");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);
  const filteredCars = useMemo(() => {
    return products.filter((product) => product.category === category);
  }, [products, category]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [category]);
  const categories = [
    "BMW M",
    "BMW X",
    "Electricos",
    "Hibridos",
    "Convertibles",
  ];

  const LiClass =
    "cursor-pointer  lg:text-2xl mr-6 text-xl sm:text-base text-gray-500 hover:text-gray-800 transition-all hover:border-b-2 pb-2 sm:pb-4 whitespace-nowrap";
  const LiClassHover =
    "cursor-pointer lg:text-2xl mr-6 text-xl sm:text-base text-gray-800 transition-all border-b-2 pb-2 sm:pb-4 font-semibold whitespace-nowrap";

  return (
    <Element name="cars" className="cars px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Nuestros <span>Vehiculos</span>
      </h1>
      <nav className="w-full overflow-x-auto whitespace-nowrap">
        <ul className=" flex border-b border-gray-300 mb-6 min-w-fit">
          {categories?.map((cat) => (
            <li
              key={cat}
              onClick={() => setCategory(cat)}
              className={category === cat ? LiClassHover : LiClass}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>

      {loading ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 })?.map((_, i) => (
            <SkeletonCar key={i} />
          ))}
        </div>
      ) : products?.length > 0 ? (
        <>
          <h2 className="ml-5 text-3xl">{category}</h2>
          {filteredCars.length > 0 ? (
            <RenderProducts products={filteredCars} />
          ) : (
            <p className=" py-5 text-xl lg:text-2xl  text-center text-gray-500 mt-4">
              No hay vehículos en esta categoría.
            </p>
          )}
          <hr />
        </>
      ) : (
        <p className=" py-5 text-xl lg:text-2xl  text-center text-gray-500 mt-4">
          No hay Carros
        </p>
      )}

      <hr />
    </Element>
  );
}
export default Cars;
