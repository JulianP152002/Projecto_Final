import { Link } from "react-router-dom";

export default function RenderProducts({ products }) {
  return (
    <div className="cars_cars-m">
      {products?.map((product) => (
        <div key={product._id}>
          <Link className="container_cars-m" to={`/Cars/${product.name}`}>
            <div className="cars-m_imgs">
              <img
                loading="lazy"
                className="cars-m_car"
                src={product.image}
                alt={`Imagen del vehiculo ${name}`}
              />
              <img
                loading="lazy"
                className="cars-m_logo"
                src="/src/assets/logo_cars.png"
                alt={`Imagen del vehiculo ${name}`}
              />
            </div>
            <div className="cars-m_description">
              <h3 className="cars-m_title">{product.name}</h3>
              <p className="cars-m_fuel">{product.description}</p>
              <p className="cars-m_precie">${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
