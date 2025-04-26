import { Link } from "react-router-dom";

export default function RenderProducts({ products }) {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {products?.map((product) => (
        <div key={product._id} className="w-full ">
          <Link
            className="block bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            to={`/Cars/${product.name}`}
          >
            <div className="relative">
              <img
                loading="lazy"
                // className="cars-m_car relative w-[50%] h-auto hover:scale-110 transition-all duration-500"
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
        </div>
      ))}
    </div>
  );
}
