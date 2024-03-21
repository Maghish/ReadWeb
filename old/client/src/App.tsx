import "./css/index.css";
import { useRoutes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import GetCookie from "./functions/GetCookie";
import SetCookie from "./functions/SetCookie";
import RemoveCookie from "./functions/RemoveCookie";

import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import WriteBook from "./pages/WriteBook";
import Profile from "./pages/Profile";

axios.defaults.baseURL = "http://localhost:7000";

const token = GetCookie("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
} else {
  delete axios.defaults.headers.common["Authorization"];
}

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
          path: "mybooks",
          element: <MyBooks />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "writebook",
          element: <WriteBook />
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <div className="min-h-screen w-full bg-palette2">{routes}</div>;
}
