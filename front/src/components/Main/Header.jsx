import BmwCoupe from "/src/assets/M440iCoupe.webp";
function Header() {
  return (
    <header className="  container_primary h-[40rem] lg:h-[48rem]">
      <div className="relative flex justify-between items-center w-full h-full lg:gap-10 lg:py-10 lg:px-20   ">
        <div className="flex flex-col pt-[10rem] text-white  w-full m-auto text-center ">
          <h1 className=" w-full text-extrabold  lg:-ml-0 text-extrabold lg:text-6xl text-5xl">
            LOS MEJORES VEHICULOS <br />
            DEL MUNDO
          </h1>
          <p className="content-left_description text-3xl lg:text-4xl py-8">
            Tenemos para ti los mejores vehiculos del mercado
          </p>
          <button className="content-left_button m-auto">
            <a href="">Conocenos</a>
          </button>
        </div>

        <div className="content_right hidden lg:flex">
          <div className="content-right_horario">
            <h3 className="horario_title">Open</h3>
            <p className="horario_days">
              Lun-Sab{" "}
              <span className="horario_hour horario_hour-1">
                08:00AM-07:00PM
              </span>
            </p>
            <p className="horario_days">
              Domin-Fest
              <span className="horario_hour horario_hour-close">CERRADO</span>
            </p>
          </div>
          <img
            className="content-right_img hidden lg:block"
            src={BmwCoupe}
            alt="imagen vehiculo"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
