function Footer() {
  return (
    <section>
      <footer className="layout_footer">
        <div className="fouter_container">
          <section className="fouter_top">
            <ul className="fouter_social">
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
          </section>
          <section className="fouter_main">
            <div className="fouter_right">
              <div className="fouter_widget">
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

              <div className="fouter_widget">
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
