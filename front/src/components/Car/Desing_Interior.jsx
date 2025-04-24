import VideoDesing from "./Video";
import { SizeViewport } from "../../utils/SizeViport";

import Video1 from "../../assets/videos/Desing1.mp4";
import Video2 from "../../assets/videos/Desing2.mp4";
import Video3 from "../../assets/videos/Desing3.mp4";

export default function DesingInterior() {
  const { Size } = SizeViewport();
  const isMobile = Size < 768; // Cambia el valor según tu diseño responsivo

  return (
    <>
      <h1 className="text-4xl text-textgray pb-8 m-auto font-extralight">
        Diseño interior
      </h1>
      <div className="h-[70%]  ">
        <VideoDesing
          src="/videos/Desing1.mp4"
          trigger="visibility"
          width="90%"
          height="70%"
        />
      </div>
      <div className="flex lg:px-4 lg:pt-10 m-auto items-center">
        <div className="w-[90%] m-auto lg:pr-4 lg:w-full lg:block py-7">
          <VideoDesing
            src="/videos/Desing3.mp4"
            trigger={isMobile ? "visibility" : "hover"}
          />
          <h1 className="text-textgray text-4xl py-8">BMW Interaction Bar.</h1>
          <p className=" text-textgray text-2xl font-extralight">
            Como un atractivo funcional y fascinante, BMW Interaction Bar se
            extiende entre el salpicadero y las puertas. Las superficies
            táctiles permiten controlar el clima y otras funciones.
          </p>
        </div>
        <div className="hidden lg:pl-4 lg:block lg:w-full">
          <VideoDesing
            src="/videos/Desing3.mp4"
            trigger={isMobile ? "visibility" : "hover"}
          />
          <h1 className="text-textgray text-4xl py-8">
            Sonido Envolvente Bowers & Wilkins (opcional).
          </h1>
          <p className=" text-textgray text-2xl font-extralight">
            El puesto de conducción se convierte, con el sistema de sonido
            envolvente Bowers & Wilkins, en una sala de conciertos. Se ofrecen
            18 altavoces y 655 watts de potencia en un sistema de audio a
            medida.
          </p>
        </div>
      </div>
    </>
  );
}
