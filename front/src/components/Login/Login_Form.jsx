import PropTypes from "prop-types";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Username = "julian";
const Password = "julian123";
LoginForm.propTypes = {
  Validation: PropTypes.func.isRequired,
};

export function LoginForm({ Validation }) {
  const navigate = useNavigate();
  const password = useRef();
  const username = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValueUsername = username.current.value;
    const ValuePassword = password.current.value;
    Validation(ValueUsername, ValuePassword);
    ValueUsername == Username && ValuePassword == Password
      ? navigate(`/${Username}`)
      : navigate(`/`);
  };
  return (
    <form className="flex  w-full flex-col" onSubmit={handleSubmit} action="">
      <input
        ref={username}
        className="border-1 border-[#7d889752] py-[3px} my-1 px-[3px} "
        type="text"
        placeholder="Usuario"
      />
      <input
        ref={password}
        className="border-1 border-[#7d889752] py-[3px} my-1 px-[3px}"
        type="password"
        placeholder="Contraseña"
      />
      <button className="  bg-[#1c69d4] text-[#ffffff] font-bold cursor-pointer px-4 py-[1.30rem]  my-4 hover:bg-[#1552a8]  transition duration-150 pointer">
        Iniciar Sesion
      </button>
    </form>
  );
}
