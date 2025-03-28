import { useState } from "react";
import PropTypes from "prop-types";
import { UseSendProducts } from "../../hooks/UseSendProducts";

export default function FormPost({ products }) {
  const [image, setImage] = useState(null);
  const [isloding, setisLoding] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoding(true);
    let formData = new FormData();
    let name = e.target[0].value;
    let price = e.target[1].value;
    let description = e.target[2].value;
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    if (!image) {
      setError("Por favor selecciona una imagen");
      return;
    }
    if (products.some((product) => product.name === name)) {
      setError("El vehiculo ya existe");
      setisLoding(false);
      return;
    }
    UseSendProducts(formData, products, setImage, e, setisLoding, setError);
  };
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  const classButton = `text-black transition-all duration-500 text-red ${
    isloding
      ? "bg-gray-500 "
      : "bg-blue-500/80 rounded-xl px-4 cursor-pointer hover:bg-blue-500 transition py-1 "
  }`;

  return (
    <form
      className="items-center lg-bg-red flex flex-col px-2 py-6  border-1 border-gray-500 m-auto"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <input
        className="w-[90%]  border-[0.5px] my-1 border-gray-400/70 px-1 rounded-[4px]"
        name="name"
        placeholder="Nombre"
        required
        type="text"
      />
      <input
        className="w-[90%] border-[0.5px] my-1 border-gray-400/70 px-1 rounded-[4px]"
        name="price"
        placeholder="Precio"
        required
        type="text"
      />
      <input
        className="w-[90%] border-[0.5px] my-1 border-gray-400/70 px-1 rounded-[4px]"
        name="description"
        placeholder="Descripcion"
        type="text"
      />
      <input
        required
        name="image"
        className="border-0 cursor-pointer rounded-xl bg-gray-500/60 hover:scale-105 transition-all duration-500 my-2 py-1 px-2 "
        type="file"
        onChange={handleChange}
        accept="image/*"
        placeholder="Imagen del vehiculo"
      />
      {image && (
        <img
          className=" w-60 rounded-2xl py-2"
          src={URL.createObjectURL(image)}
          alt="imagen"
        />
      )}
      <h2 className="text-red-600 font-bold">{error}, intentalo de nuevo.</h2>
      <button
        disabled={isloding ? true : false}
        className={classButton}
        type="submit"
      >
        {isloding ? "Subiendo..." : "Subir"}
      </button>
    </form>
  );
}

FormPost.propTypes = {
  products: PropTypes.array.isRequired,
};
