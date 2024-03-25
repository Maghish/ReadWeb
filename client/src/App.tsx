import "./css/index.css";
import React, { useEffect, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import axios from "axios";

import GetCookie from "./functions/GetCookie";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

axios.defaults.baseURL = "http://localhost:7000/api";

export const Context = React.createContext<any | undefined>(undefined);

function DecidePage() {
  const [userCred, setUserCred] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function GetCurrentUser() {
    try {
      const res = await axios.get("/auth/getcurrentuser");
      console.log(res);
      setUserCred(res.data.userData);
      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    const token = GetCookie("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      GetCurrentUser().then((response: boolean) => {
        if (response) {
          setIsLoading(false);
        }
      })
      
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setUserCred(null);
      setIsLoading(false);
    }
  }, []);

  if (userCred && !isLoading) {
    return (
      <Context.Provider value={{ userCred: userCred }}>
        <Home />
      </Context.Provider>
    );
  }

  if (!userCred && !isLoading) {
    return <Navigate to="/login" />;
  }
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
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <div className="min-h-screen min-w-full bg-palette2">{routes}</div>;
}

export default App;
