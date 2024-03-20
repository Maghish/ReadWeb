import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GetCookie from "../functions/GetCookie";
import axios from "axios";

function MyBooks() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>();
  const [currentUser, setCurrentUser] = useState<string | any>("");

  useEffect(() => {
    try {
      // Try to get the token
      const token = GetCookie("token");
      if (token) {
        axios.get("/api/auth/getcurrentuser").then((res) => {
          setUserLoggedIn(true);
          setCurrentUser(res.data.userData);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {userLoggedIn === false ? (
        <Navbar page="Guest" />
      ) : (
        <Navbar page="Home" userCred={currentUser} />
      )}
    </>
  );
}
 
export default MyBooks;