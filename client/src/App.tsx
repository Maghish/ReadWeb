import "./css/index.css";
import { useRoutes } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";

export const Context = React.createContext({ mode: "Guest" });

function App() {
  let routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div className="min-h-screen min-w-full bg-palette2">
      <Context.Provider value={{ mode: "Guest" }}>{routes}</Context.Provider>
    </div>
  );
}

export default App;