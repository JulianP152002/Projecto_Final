import { useState } from "react";
import PropTypes from "prop-types";
import { updateProduct } from "../../api/ApiProducts";
export default function FormEdit({ product, onClose, onUpdated }) {
  const [formState, setFormState] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    category: product.category,
    potencia: product.potencia,
    velocidad: product.velocidad,
    hps: product.hps,
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) =>
      formData.append(key, value)
    );

    if (image) {
      formData.append("image", image);
    }

    try {
      await updateProduct(product._id, formData);
      onUpdated(); // callback para que el padre actualice la lista
    } catch {
      setError("Error al actualizar el producto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>

        {[
          "name",
          "price",
          "description",
          "category",
          "potencia",
          "velocidad",
          "hps",
        ].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formState[field]}
            onChange={handleChange}
            placeholder={field}
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            required
          />
        ))}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-3"
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      </form>
    </div>
  );
}

FormEdit.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdated: PropTypes.func.isRequired,
};
