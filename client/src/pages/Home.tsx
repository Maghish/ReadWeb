import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GetCookie from "../functions/GetCookie";
import GetCurrentUser from "../functions/GetCurrentUser";

function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState <boolean>();
  const [userToken, setUserToken] = useState("");
  const [currentUser, setCurrentUser] = useState<string | any>("");

  useEffect(() => {
    try {
      const token = GetCookie("userToken");
      if (token) {
        setUserToken(token);
      } else {
        setUserLoggedIn(false);
      }
    } catch (error: any) {
      throw error;
    }

    try {
      GetCurrentUser(userToken).then((res) => {
        if (res) {
          setCurrentUser(res);
          setUserLoggedIn(true);
        } else {
          setUserLoggedIn(false);
        }
      });
    } catch (error: any) {
      console.log(error);
      setUserLoggedIn(false);
    }
  }, []);

  return (
    <>
      {userLoggedIn === false ? <Navbar page="Guest" /> : <Navbar page="Home" userCred={currentUser} />}
    </>
  );
}

export default Home;
