import DetailCar from "../components/Car/Details_Car";
import Highlights from "../components/Car/highlights";
import DesingInterior from "../components/Car/Desing_Interior";
import TecnologeCar from "../components/Car/TecnologeCar";
export default function RenderCar({ car }) {
  return (
    <div className="w-full py-5 h-auto flex flex-col items-center justify-center rounded">
      <h1 className="text-5xl m-auto text-titlecolor font-extralight mt-4">
        {car.name}
      </h1>

      <img
        src={car.image}
        alt={car.name}
        className="h-full w-[60%] object-contain"
      />
      <Highlights car={car} />
      <button className=" w-[96%] h-[50px] cursor-pointer bg-btngray hover:bg-btnblue transition-all duration-700  flex items-center justify-center hover:duration-300">
        <a
          className="w-full p-7"
          href="https://www.bmw.com.co/cotiza?skuId=4260"
        >
          <span className="text-emerald-50">Cotiza</span>
        </a>
      </button>
      <div className="lg:hidden">
        <DetailCar />
      </div>
      <div className="hidden lg:flex">
        <DetailCar />
      </div>
      <DesingInterior />
      <TecnologeCar />
    </div>
  );
}
