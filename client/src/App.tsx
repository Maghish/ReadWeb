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

axios.defaults.baseURL = "https://localhost:4000"

function DecidePage() {
  const [userToken, setUserToken] = useState("");
  const [currentUser, setCurrentUser] = useState<string | any>("");

  useEffect(() => {
    async function getCurrentUser() {
      const res = await axios.post("/api/auth/getcurrentuser", {
        token: userToken
      })
      setCurrentUser(res.data.userData);
    }

    getCurrentUser();
  }, [])

  try {
    const token = GetCookie("userToken");
    if (token) {
      setUserToken(token);
    }
    else {
      return <Home currentPage="Guest" />;
    }
  } 

  catch (error: any) {
    throw error;  
  }  

  return <Home currentPage="Home" {...currentUser} />;
}

export default function App() {
  let routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <DecidePage />,
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
        }
      ],
    },
  ]);

  return <div className="min-h-screen w-full">{routes}</div>;
}
