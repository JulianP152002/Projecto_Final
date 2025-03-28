export default function RenderProducts({ products }) {
  return (
    <div className="cars_cars-m">
      {products?.map((product) => (
        <div key={product._id}>
          <a className="container_cars-m" href={`/Cars/`}>
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
                src="/src/assets/Bmw.WebP"
                alt={`Imagen del vehiculo ${name}`}
              />
            </div>
            <div className="cars-m_description">
              <h3 className="cars-m_title">{product.name}</h3>
              <p className="cars-m_fuel">{product.price}</p>
              <p className="cars-m_precie">${product.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
