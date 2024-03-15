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

function DecidePage() {
  const [currentPage, setCurrentPage] = useState("");
  const [userToken, setUserToken] = useState("");
  const [currentUser, setCurrentUser] = useState<string | any>("");

  useEffect(() => {
    try {
      const token = GetCookie("userToken");
      if (token) {
        setUserToken(token);
      } else {
        setCurrentPage("Guest");
      }
    } catch (error: any) {
      throw error;
    }

    async function getCurrentUser() {
      try {
        const res = await axios.post("/api/auth/getcurrentuser", {
          token: userToken,
        });
        if (res.data.userData) {
          setCurrentUser(res.data.userData);
          setCurrentPage("Home");
        }
      } catch (error) {
        setCurrentPage("Guest");
      }
    }
    getCurrentUser();
  }, []);

  if (currentPage === "Home") {
    return (
      <>
        <Navbar page="Home" userCred={currentUser} />
        <Home currentPage="Home" userCred={currentUser} />
      </>
    );
  } else {
    return (
      <>
        <Navbar page="Guest" />
        <Home currentPage="Guest" />
      </>
    );
  }
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
        },
      ],
    },
  ]);

  return <div className="min-h-screen w-full">{routes}</div>;
}