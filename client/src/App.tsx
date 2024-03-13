import "./css/index.css";
import { useRoutes } from "react-router-dom";

function DecidePage() {
  return <></>;
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
      ],
    },
  ]);

  return <div className="min-h-screen max-h-full">{routes}</div>;
}

export default App;
