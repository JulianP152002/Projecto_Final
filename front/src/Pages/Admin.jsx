import { Navigate } from "react-router-dom";
import FormPost from "../components/Main/FormPost";
import { Products } from "../hooks/Products";
import PropTypes from "prop-types";

export default function Admin({ isLogged }) {
  const { products } = Products();

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" hola w-full relative py-14 flex flex-col  m-auto items-center text-center">
      <h1 className=" font-bold text-3xl pb-5">Subir nuevo vehiculo</h1>
      <FormPost className="flex " products={products} />
    </div>
  );
}
Admin.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
