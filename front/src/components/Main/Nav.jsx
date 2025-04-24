import { Link } from "react-router-dom";
import logo from "/src/assets/logo.svg";
import { Products } from "../../utils/Products";
import CarFilter from "../../hooks/CarFilter";
import { useEffect } from "react";
function Nav() {
  const { products, getProducts } = Products();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <section className=" fixed left-0 w-full border-b-[1.2px] border-gray-500/20 top-0 z-50 bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.08)]">
        <nav className="relative w-full justify-center flex items-center px-3 flex-row">
          <div className="menu_logo">
            <img className="w-[5rem] py-2" src={logo} alt="logo BMW" />
          </div>

          <ul className="menu_list">
            <li className="menu_link">
              <a href="/">Home</a>
            </li>

            <li className="menu_link">
              <Link href="/login">Lifestyle</Link>
            </li>

            <li className="menu_link">
              <a href="/"></a>Modelos
            </li>

            <li className="menu_link">
              <CarFilter products={products} />
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
export default Nav;
