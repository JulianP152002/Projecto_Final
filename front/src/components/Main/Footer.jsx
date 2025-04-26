function Footer() {
  return (
    <section>
      <footer className="w-full m-auto px-[4rem] py-[3rem]">
        <div className="w-full max-w-full h-full">
          <section className="fouter_main">
            <div className="flex text-xl flex-row basis-[100%]  lg:basis-[50%] ">
              <div className=" mb-[4rem]  basis-[50%] lg:basis-[65%]">
                <h6 className=" text-[1.8rem] md:text-[1.9rem] lg:text-4xl xl:text-2xl 2xl:text-6xl font-bold ">
                  Contacto
                </h6>

                <ul className="widget_list">
                  <li className="flex flex-col font-normal :">
                    <a
                      className="text-[1.6rem] lg:text-[2r md:text-[1.8rem]em] text-nowrap xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      Red Oficial BMW
                    </a>
                  </li>

                  <li className="flex flex-col font-normal :">
                    <a
                      className="text-[1.6rem] lg:text-[2rem] text-now md:text-[1.8rem]rap lg:text-4xl xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      Agenda tu Prueba de Manejo
                    </a>
                  </li>

                  <li className="flex flex-col font-normal">
                    <a
                      className="text-[1.6rem] lg:text-[2rem] text-now md:text-[1.8rem]rap lg:text-4xl xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      Solicita Cotizacion
                    </a>
                  </li>

                  <li className="flex flex-col font-normal :">
                    <a
                      className="text-[1.6rem] lg:text-[2rem] text-now md:text-[1.8rem]rap lg:text-4xl xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      Configura tu BMW
                    </a>
                  </li>

                  <li className="flex flex-col font-normal :">
                    <a
                      className="text-[1.6rem] lg:text-[2r md:text-[1.8rem]em] text-nowrap xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-[4rem] basis-[50%]">
                <h6 className=" text-[1.8rem] md:text-[1.9rem] lg:text-4xl xl:text-2xl 2xl:text-6xl font-bold">
                  Descubre BMW
                </h6>

                <ul className="lg:text-2xl">
                  <li className="flex flex-col font-normal :">
                    <a
                      className="text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      BMW.CO
                    </a>
                  </li>

                  <li className="flex flex-col font-normal :">
                    <a
                      className="text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      MINI
                    </a>
                  </li>
                  <li className="flex flex-col font-normal :">
                    <a
                      className="text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.5rem] pt-3 hover:text-btnblue transition-color duration-500 hover:scale-105  font-normal"
                      href=""
                    >
                      BMW Motorrad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className=" flex flex-col lg:flex-row justify-between items-center">
            <div className="fouter_copyright">
              <span className="copyright_text">
                &copy; 2023, Todos los derechos reservados a{" "}
                <a href="misitioweb">Julian Parra</a>
              </span>
            </div>

            <div className="fouter_links">
              <ul className="fouter_flinks">
                <li className="flinks_item flinks_item--separator">
                  <a className="flinks_title" href="">
                    Politica de privacidad
                  </a>
                </li>

                <li className="flinks_item">
                  <a className="flinks_title" href="">
                    Terminos de uso
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
    </section>
  );
}
export default Footer;
