function Footer() {
  return (
    <section>
      <footer className="w-full m-auto px-[4rem] py-[3rem]">
        <div className="w-full max-w-full h-full">
          {/* <section className="fouter_top">
            <ul className="flex flex-row items-center justify-spac">
              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-facebook-f social_img"></i>
                </a>
              </li>

              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-twitter social_img"></i>
                </a>
              </li>

              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-youtube social_img"></i>
                </a>
              </li>

              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-linkedin social_img"></i>
                </a>
              </li>

              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-instagram social_img"></i>
                </a>
              </li>

              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-pinterest-p social_img"></i>
                </a>
              </li>

              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-vimeo-v social_img"></i>
                </a>
              </li>

              <li className="social_item">
                <a className="socail_link" href="">
                  <i className="fa-brands fa-behance social_img"></i>
                </a>
              </li>
            </ul>
          </section> */}
          <section className="fouter_main">
            <div className="flex flex-row basis-[100%]  lg:basis-[50%] ">
              <div className=" mb-[4rem] basis-[50%] lg:basis-[33%]">
                <h6 className="widget_title">Contacto</h6>

                <ul className="widget_list">
                  <li className="widget_item">
                    <a className="widget_link" href="">
                      Red Oficial BMW
                    </a>
                  </li>

                  <li className="widget_item">
                    <a className="widget_link" href="">
                      Agenda tu Prueba de Manejo
                    </a>
                  </li>

                  <li className="widget_item">
                    <a className="widget_link" href="">
                      Solicita Cotizacion
                    </a>
                  </li>

                  <li className="widget_item">
                    <a className="widget_link" href="">
                      Configura tu BMW
                    </a>
                  </li>

                  <li className="widget_item">
                    <a className="widget_link" href="">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-[4rem] basis-[33%]">
                <h6 className="widget_title">Descubre BMW</h6>

                <ul className="widget_list">
                  <li className="widget_item">
                    <a className="widget_link" href="">
                      BMW.CO
                    </a>
                  </li>

                  <li className="widget_item">
                    <a className="widget_link" href="">
                      MINI
                    </a>
                  </li>
                  <li className="widget_item">
                    <a className="widget_link" href="">
                      BMW Motorrad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="fouter_bottom">
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
