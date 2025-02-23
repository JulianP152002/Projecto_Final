import BmwCoupe from "/src/assets/M440iCoupe.WebP";
function Header() {
  return (
    <header className="container_primary">
      <div className="primary_content">
        <div className="content_left">
          <h1 className="content-left_title">
            LOS MEJORES VEHICULOS <br />
            DEL MUNDO
          </h1>
          <p className="content-left_description">
            Tenemos para ti los mejores vehiculos del mercado
          </p>
          <button className="content-left_button">
            <a href="">Conocenos</a>
          </button>
        </div>

        <div className="content_right">
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
            className="content-right_img"
            src={BmwCoupe}
            alt="imagen vehiculo"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
