import bg from "../../assets/background_login.jpg";
import logo from "../../assets/logo.svg";
export function Header() {
  return (
    <header>
      <nav className=" items-center justify-center flex bg-white py-3">
        <a className="flex w-fit px-4 " href="/">
          <img className="flex w-[60px]  p-1 " src={logo} alt={`logue BMW`} />
        </a>
      </nav>

      <div>
        <img
          className=" h-[28rem] sm:h-[30rem] md:h-[32rem] lg:h-[45rem] xl:h-[48rem] 2xl:h-[52rem] w-full"
          src={bg}
          alt=""
        />
      </div>
    </header>
  );
}
