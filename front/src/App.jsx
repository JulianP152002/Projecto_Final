import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import SkeletonPage from "./Skeletons/SkeletonPage";
import { useState } from "react";
import { Suspense, lazy } from "react";

const Username = "julian";
const Password = "julian123";
const Car = lazy(() => import("./Pages/Car"));
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const Validation = (username, password) => {
    const Valueusername = username;
    const Valuepassword = password;
    return Valueusername === Username && Valuepassword === Password
      ? setIsLogged(true)
      : setIsLogged(false);
  };

  return (
    <>
      <Router>
        <Suspense fallback={<SkeletonPage />}>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route
              path="/admin"
              element={<Login Validation={Validation} />}
            ></Route>
            <Route path="/:id" element={<Admin isLogged={isLogged} />}></Route>
            <Route path="/Cars/:id" element={<Car />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
