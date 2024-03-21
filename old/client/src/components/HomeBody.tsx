import { useEffect, useState } from "react";
import { HomeBodyComponentProps } from "../vite-env";
import axios from "axios";

function HomeBody(props: HomeBodyComponentProps) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    axios
      .post("/api/book/getallbooks", {
        filter: "None",
        extraData: "",
      })
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div>
      <p>Daily Release</p>
      <p>Weekly Release</p>
      <p>Most Popular</p>
      <p>Most Rated</p>
      <p>Resume Reading</p>
    </div>
  );
}

export default HomeBody;
