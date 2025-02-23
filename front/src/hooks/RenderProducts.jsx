export default function RenderProducts({ products }) {
  const id = "jns";
  return (
    <div>
      {products?.map((product) => (
        <div key={product._id}>
          <a className="container_cars-m" href={`/Cars/`}>
            <div className="cars-m_imgs">
              <img
                loading="lazy"
                className="cars-m_car"
                src={`/src/icons/imgs/${id}.WebP`}
                alt={`Imagen del vehiculo ${name}`}
              />
              <img
                loading="lazy"
                className="cars-m_logo"
                src="/src/icons/imgs/logobmw.WebP"
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
