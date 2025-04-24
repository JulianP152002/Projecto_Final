export default function Highlights() {
  const potencia = 340;
  const cien = 400;
  const Velocidad = 193;
  return (
    <article className=" w-full flex flex-col items-center px-6 text-textc ">
      <p className="w-full py-6 text-colortext flex justify-between">
        <span className=" font-extralight text-2xl">Potencia:</span>{" "}
        <span className=" font-extralight text-3xl">{potencia} hp</span>
      </p>
      <p className="w-full py-6 text-colortext flex justify-between">
        <span className=" font-extralight text-2xl">0-100 khm/h:</span>{" "}
        <span className=" font-extralight text-3xl">{cien} hp</span>
      </p>
      <p className="w-full py-6 text-colortext flex justify-between">
        <span className=" font-extralight text-2xl">Vmax:</span>{" "}
        <span className=" font-extralight text-3xl">{Velocidad} km/h</span>
      </p>
    </article>
  );
}
