import "./css/index.css";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

import About from "./pages/About";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";

function DecidePage() {
  return <Home />;
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
