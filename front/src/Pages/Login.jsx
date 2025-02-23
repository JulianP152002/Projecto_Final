import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Username = "julian";
const Password = "julian123";

function Login(props) {
  const navigate = useNavigate();
  const password = useRef();
  const username = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValueUsername = username.current.value;
    const ValuePassword = password.current.value;
    props.Validation(ValueUsername, ValuePassword);
    ValueUsername == Username && ValuePassword == Password
      ? navigate(`/${Username}`)
      : navigate(`/`);
  };

  return (
    <div className=" py-11 bg-blue-950 text-white flex flex-col justify-around items-center m-auto h-vh w-full ">
      <h1 className=" my-4">Login admin</h1>
      <form className="flex flex-col" onSubmit={handleSubmit} action="">
        <input
          ref={username}
          className="border-1"
          type="text"
          placeholder="Usuario"
        />
        <input
          ref={password}
          className="border-1"
          type="text"
          placeholder="Contraseña"
        />
        <button className="border-1 bg-black px-4 py-2 rounded-4xl my-4 hover:scale-105 transition pointer">
          Enviar
        </button>
      </form>
    </div>
  );
}
export default Login;
