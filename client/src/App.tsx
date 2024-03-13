import "./css/index.css";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

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
      ],
    },
  ]);

  return <div className="min-h-screen w-full">{routes}</div>;
}
