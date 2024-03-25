import "./css/index.css";
import { Navigate, useRoutes } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

axios.defaults.baseURL = "http://localhost:7000/api"

function DecidePage() {
  return <Navigate to="/login" />
}

function App() {
  let routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <DecidePage />,
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        }
      ],
    },
  ]);

  return (
    <div className="min-h-screen min-w-full bg-palette2">
      {routes}
    </div>
  );
}

export default App;