import PropTypes from "prop-types";
import { Header } from "../components/Login/Header_Login";
import { LoginForm } from "../components/Login/Login_Form";

Login.propTypes = {
  Validation: PropTypes.func.isRequired,
};
function Login({ Validation }) {
  return (
    <section className="relative flex-col overflow-x-hidden w-full h-full   text-black flex ">
      <Header />
      <h1 className=" mx-6 text-[#262626] text-6xl font-sans  my-4">
        Ingresar a BMW APP
      </h1>

      <div className=" w-4xl py-5 flex flex-col pl-24 h-full">
        <LoginForm Validation={Validation} />
      </div>
    </section>
  );
}
export default Login;
