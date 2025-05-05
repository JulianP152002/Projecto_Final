import { Navigate } from "react-router-dom";
import FormPost from "../components/admin/FormPost";
import { Products } from "../utils/Products";
import RenderProducts from "../hooks/RenderProducts";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Admin({ isLogged }) {
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const { products, getProducts, setProducts } = Products();

  const handleRefresh = async () => {
    console.log("holi");
    await getProducts();
    setUpdatedProducts([]); // Vacía los productos actualizados para que vuelva a usar el original
  };
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  if (!isLogged) {
    return <Navigate to="/" />;
  }
  const admin = true;

  return (
    <div className=" hola w-full relative py-14 flex flex-col  m-auto items-center text-center">
      <h1 className=" font-bold text-3xl pb-5">Subir nuevo vehiculo</h1>
      <FormPost
        className="flex "
        products={products}
        onRefresh={handleRefresh}
      />
      <RenderProducts
        products={updatedProducts.length > 0 ? updatedProducts : products}
        admin={admin}
        onDelete={handleDelete}
        onRefresh={handleRefresh}
      />
    </div>
  );
}
Admin.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
