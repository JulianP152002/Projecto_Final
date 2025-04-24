import Video3 from "../../assets/Videos/Conectividad.mp4";

import VideoDesing from "./Video";
export default function TecnologeCar() {
  return (
    <>
      {" "}
      <h1 className="text-4xl text-textgray pb-8 m-auto font-extralight">
        SISTEMA DE ASISTENCIA Y CONECTIVIDAD
      </h1>
      <VideoDesing src={Video3} trigger="visibility" />
    </>
  );
}
