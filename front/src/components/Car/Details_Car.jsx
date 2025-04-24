import { SizeViewport } from "../../utils/SizeViport";
import Video1 from "../../assets/Videos/Detail1.mp4";
import Video2 from "../../assets/Videos/Details2.mp4";
import Video3 from "../../assets/Videos/Details3.mp4";

import VideoDesing from "./Video";
export default function DetailCar() {
  const { Size } = SizeViewport();
  const isMobile = Size < 768; // Cambia el valor según tu diseño responsivo

  return (
    <div className={isMobile ? "scroll-layout" : "w-full flex"}>
      <div className={isMobile ? "carousel" : "w-full flex"}>
        <ul className={isMobile ? "content" : "flex justify-around pt-10"}>
          <li className=" m-auto w-full  flex flex-col">
            <h3 className="text-textgray m-auto text-2xl font-extralight">
              DISEÑO
            </h3>
            <h1 className="text-4xl text-textgray pb-8 m-auto font-extralight">
              PRESENTACION DEL EXTERIOR
            </h1>

            <VideoDesing
              src={Video1}
              trigger={isMobile ? "visibility" : "hover"}
              width="100%"
              height="80%"
            />

            <h1 className="text-textgray text-4xl py-8">
              También en la oscuridad: inconfundible.
            </h1>
            <p className=" text-textgray text-2xl font-extralight">
              Especialmente en la oscuridad llama la atención la parrilla BMW
              "Iconic Glow". La luz blanca resalta sus contornos cuando el
              vehículo está parado o en marcha.
            </p>
          </li>
          <li className=" m-auto w-full  flex flex-col">
            <h3 className="text-textgray m-auto text-2xl font-extralight">
              DISEÑO
            </h3>
            <h1 className="text-4xl text-textgray pb-8 m-auto font-extralight">
              PRESENTACION DEL EXTERIOR
            </h1>

            <VideoDesing
              src={Video2}
              trigger={isMobile ? "visibility" : "hover"}
              width="100%"
              height="80%"
            />

            <h1 className="text-textgray text-4xl py-8">
              Un acceso luminoso al vehículo.
            </h1>
            <p className=" text-textgray text-2xl font-extralight">
              Un acceso luminoso al vehículo. Con la Alfombra de luz de
              bienvenida proyecta un diseño de luz ambiental en el área de
              entrada a través de una luz integrada en los espejos laterales.
            </p>
          </li>
          <li className=" m-auto w-full pt-8  flex flex-col ">
            <h3 className="text-textgray m-auto text-2xl font-extralight">
              DISEÑO
            </h3>
            <h1 className="text-4xl text-textgray pb-8 m-auto font-extralight">
              PRESENTACION DEL EXTERIOR
            </h1>

            <VideoDesing
              src={Video3}
              trigger={isMobile ? "visibility" : "hover"}
              width="100%"
              height="80%"
            />

            <h1 className="text-textgray text-4xl py-8">
              Sentado casi como al aire libre.
            </h1>
            <p className=" text-textgray text-2xl font-extralight">
              Especialmente en la oscuridad llama la atención la parrilla BMW
              Iconic Glow. La luz blanca resalta sus contornos cuando el
              vehículo está parado o en marcha. Un acceso luminoso al vehículo.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
