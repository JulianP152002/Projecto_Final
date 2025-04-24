import { Link } from "react-router-dom";
import logo from "/src/assets/logo.svg";
function Nav() {
  return (
    <div>
      <section className="container_navbar">
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
              <a href="/"></a>Mas BMW
            </li>

            <li className="menu_link">
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
                  type="text"
                  className="outline-none text-[15px] bg-transparent  text-white font-normal px-3"
                />
              </search>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
export default Nav;
