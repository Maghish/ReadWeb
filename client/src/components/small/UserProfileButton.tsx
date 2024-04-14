import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../App";
import RemoveCookie from "../../functions/RemoveCookie";
import axios from "axios";

function UserProfileButtonMenu() {
  const { userCred } = useContext(Context);

  function LogoutUser() {
    RemoveCookie("token");
    delete axios.defaults.headers.common["Authorization"];
    window.location.reload();
  }

  return (
    <div className="absolute top-[50px] right-[20px] min-w-24 h-auto bg-palette3 rounded-md shadow-lg flex flex-col p-3">
      <a href="/" className="text-center cursor-pointer pb-[6px] border-b-2 border-palette4 hover:opacity-70">{userCred.username}</a>
      <button onClick={LogoutUser} className="cursor-pointer mt-[6px] hover:opacity-70">Logout</button>
    </div>
  )
}

function UserProfileButton() {
  const [buttonMenuVisible, setButtonMenuVisible] = useState(false);

  return (
    <div className="ml-auto flex w-auto">
      <button
        className="cursor-pointer self-center"
        onClick={() => {
          setButtonMenuVisible(!buttonMenuVisible);
        }}
      >
        <FaRegUserCircle color="#F5F3F4" size="24px" />
      </button>
      {buttonMenuVisible ? <UserProfileButtonMenu /> : ""}
    </div>
  );
}
 
export default UserProfileButton;
