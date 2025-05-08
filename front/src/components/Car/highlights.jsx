import PropTypes from "prop-types";

export default function Highlights({ car }) {
  return (
    <article className=" w-full h-auto flex flex-col items-center px-6 text-textc ">
      <p className="w-full py-6 text-colortext flex justify-between">
        <span className=" font-extralight text-2xl">Potencia:</span>{" "}
        <span className=" font-extralight text-3xl">{car.potencia} hp</span>
      </p>
      <p className="w-full py-6 text-colortext flex justify-between">
        <span className=" font-extralight text-2xl">0-100 khm/h:</span>{" "}
        <span className=" font-extralight text-3xl">{car.hps} hp</span>
      </p>
      <p className="w-full py-6 text-colortext flex justify-between">
        <span className=" font-extralight text-2xl">Vmax:</span>{" "}
        <span className=" font-extralight text-3xl">{car.velocidad} km/h</span>
      </p>
    </article>
  );
}

Highlights.propTypes = {
  car: PropTypes.shape({
    potencia: PropTypes.string.isRequired,
    hps: PropTypes.string.isRequired,
    velocidad: PropTypes.string.isRequired,
  }).isRequired,
};
