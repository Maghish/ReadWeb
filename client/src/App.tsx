import "./css/index.css";
import { useRoutes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import GetCookie from "./functions/GetCookie";
import SetCookie from "./functions/SetCookie";
import RemoveCookie from "./functions/RemoveCookie";

import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";

axios.defaults.baseURL = "http://localhost:7000";

export default function App() {
  let routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <div className="min-h-screen w-full">{routes}</div>;
}