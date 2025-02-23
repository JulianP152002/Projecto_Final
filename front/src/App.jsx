import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import { useState } from "react";
const Username = "julian";
const Password = "julian123";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const Validation = (username, password) => {
    const Valueusername = username;
    const Valuepassword = password;
    return Valueusername === Username && Valuepassword === Password
      ? setIsLogged(true)
      : setIsLogged(false);
  };
  // if (username === Username && password === Password) {
  //   setIsLogged(true);
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/admin"
            element={<Login Validation={Validation} />}
          ></Route>
          <Route path="/:id" element={<Admin isLogged={isLogged} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
