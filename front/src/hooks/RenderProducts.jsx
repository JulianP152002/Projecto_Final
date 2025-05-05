import { Link } from "react-router-dom";
import { deleteProduct } from "../api/ApiProducts";
import { useState } from "react";
import FormEdit from "../components/admin/FormEdit";
export default function RenderProducts({
  products,
  admin,
  onDelete,
  onRefresh,
}) {
  const [productEdit, setProductEdit] = useState(null);
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {products?.map((product) => (
        <div key={product._id} className="w-full ">
          {admin ? (
            <div className="block bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={`Imagen del vehiculo ${product.name}`}
                  className="w-full  object-contain transition-transform duration-500 hover:scale-105"
                />
                <img
                  loading="lazy"
                  alt="Logo del vehículo"
                  className="absolute bottom-3 right-8 w-30 h-12 opacity-80"
                  src="/src/assets/logo_cars.png"
                />
              </div>
              <div className="p-4 flex items-center flex-col gap-2">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-xl text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold mt-2 text-[1.3rem]">
                  ${product.price}
                </p>

                <div className="flex gap-x-2 mt-4">
                  <span>{new Date(product.date).toLocaleDateString()}</span>
                  <button
                    onClick={async () => {
                      const success = await deleteProduct(product._id);
                      if (success) {
                        onDelete(product._id);
                      }
                    }}
                    className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => setProductEdit(product)}
                    className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              className="block bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              to={`/Cars/${product.name}`}
            >
              <div className="relative">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={`Imagen del vehiculo ${product.name}`}
                  className="w-full  object-contain transition-transform duration-500 hover:scale-105"
                />
                <img
                  loading="lazy"
                  alt="Logo del vehículo"
                  className="absolute bottom-3 right-8 w-30 h-12 opacity-80"
                  src="/src/assets/logo_cars.png"
                />
              </div>
              <div className="p-4 flex items-center flex-col gap-2">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-xl text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold mt-2 text-[1.3rem]">
                  ${product.price}
                </p>
              </div>
            </Link>
          )}
        </div>
      ))}
      {productEdit && (
        <FormEdit
          product={productEdit}
          onClose={() => setProductEdit(null)}
          onUpdated={() => {
            setProductEdit(null);
            onRefresh();
          }}
        />
      )}
    </div>
  );
}
