import { useParams } from "react-router-dom";
import { Products } from "../utils/Products";

import { useEffect } from "react";

import SkeletonCar from "../Skeletons/SkeletonPage";
import RenderCar from "../hooks/RenderCar";
import Nav from "../components/Main/Nav";
export default function Car() {
  const { id } = useParams();

  const { products, getProducts } = Products();
  useEffect(() => {
    getProducts();
  }, []); // hay que arreglar esto, ya que si coloco products se crea un loop infinito
  // Mientras productos no se haya cargado o esté vacío

  const car = products.find((p) => p.name === id);

  if (!car) {
    return <div>Carro no encontrado</div>;
  }
  if (!products.length || !car) {
    return (
      <div className="p-4 max-w-4xl mx-auto animate-pulse space-y-4">
        <SkeletonCar />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <RenderCar car={car} />
    </>
  );
}
