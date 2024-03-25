import Navbar from "../components/major/Navbar";
import { Context } from "../App";
import { useContext } from "react";

function Home() {
  const { userCred } = useContext(Context); 

  return (
    <>
      <Navbar />
      <p>{userCred.username}</p>
    </>
  ) 
}
 
export default Home;