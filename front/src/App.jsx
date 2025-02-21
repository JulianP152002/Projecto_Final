import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="/:id" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
