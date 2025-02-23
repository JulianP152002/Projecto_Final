import Logue from "/src/assets/Bmw.WebP";
function Nav() {
  return (
    <div>
      <section className="container_navbar">
        <nav className="navbar_left">
          <div className="menu_logo">
            <img src={Logue} alt="" />
          </div>

          <ul className="menu_list">
            <li className="menu_link">
              <a href="index.php">Home</a>
            </li>

            <li className="menu_link">
              <a href="index.php">Nuestros modelos</a>
            </li>

            <li className="menu_link">
              <a href="index.php">Electricos</a>
            </li>

            <li className="menu_link">
              <a href="index.php">Encuentranos</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
export default Nav;
