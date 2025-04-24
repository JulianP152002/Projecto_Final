import { useState, useEffect, useMemo } from "react";
import RenderProducts from "../hooks/RenderProducts";
import SkeletonCar from "../Skeletons/SkeletonCar";
export default function CarFilter({ products }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useMemo(() => {
    const timeout = setTimeout(() => {
      const NewCars = products.filter((car) => {
        if (search === "") {
          return;
        }
        return car.name.toLowerCase().includes(search.toLowerCase());
      });

      setFiltered(NewCars);

      return () => clearTimeout(timeout);
    }, 500);
    setLoading(true);
    setLoading(false);
  }, [search]);

  return (
    <div>
      <search className=" p-5 overflow-hidden w-[40px] h-[40px] hover:w-[200px] bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
        <div className="flex  fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Isolation_Mode"
            data-name="Isolation Mode"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
          </svg>
        </div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="outline-none text-[15px] bg-transparent  text-white font-normal px-3"
        />
      </search>
      {search !== "" && (
        <ul className="  px-4 py-6 w-[50%] flex rounded-2xl h-[30rem] absolute backdrop-blur-3xl bg-white/40 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {loading ? <SkeletonCar /> : <RenderProducts products={filtered} />}

          <div className="w-full m-auto flex justify-center">
            {filtered.length === 0 && !loading && (
              <h1 className="text-center absolute left-60 text-gray-700 font-bold text-[15px]">
                No se encontraron resultados...
              </h1>
            )}
          </div>
        </ul>
      )}
    </div>
  );
}
