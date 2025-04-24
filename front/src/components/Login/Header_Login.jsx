import bg from "../../assets/background_login.jpg";
import logo from "../../assets/logo.svg";
export function Header() {
  return (
    <header>
      <nav className="flex bg-white py-4">
        <a className="flex w-fit px-4 " href="/">
          <img className="flex w-[60px]  p-1 " src={logo} alt={`logue BMW`} />
        </a>
      </nav>
      <div>
        <img className=" h-[38rem] lg:h-[45rem] w-full" src={bg} alt="" />
      </div>
    </header>
  );
}
