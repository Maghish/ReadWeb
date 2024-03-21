import { FaRegCircleUser } from "react-icons/fa6";
import { IconContext } from "react-icons";
import SignupForm from "./SignupForm";
import {
  NavbarComponentProps,
  UserProfileButtonComponentProps,
  UserProfileButtonMenuComponentProps,
} from "../vite-env";
import { useEffect, useRef, useState } from "react";
import LoginForm from "./LoginForm";
import { IoMdArrowDropup } from "react-icons/io";

function UserProfileButtonMenu({ username, setVisibility }: UserProfileButtonMenuComponentProps) {
  const menuDivRef = useRef<HTMLDivElement>(null);
  
  function HandleOuterComponentClick(event: any) {
    if (menuDivRef.current && !menuDivRef.current.contains(event.target)) {
      setVisibility(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', HandleOuterComponentClick);

    return () => document.removeEventListener('mousedown', HandleOuterComponentClick);
  })

  return (
    <div ref={menuDivRef} className="absolute top-[40px] flex flex-col items-center w-auto">
      <IoMdArrowDropup color="#FFFFFF" size="18px" />
      <ul className="relative bottom-[7px] rounded-lg w-28 bg-palette1 h-auto px-2 py-4 flex flex-col">
        <li className="mb-2 w-full pb-2 border-b-2 border-palette2 font-Ubuntu text-sm text-center cursor-pointer hover:opacity-75">Profile</li>
        <li className="mb-2 w-full pb-2 border-b-2 border-palette2 font-Ubuntu text-sm text-center cursor-pointer hover:opacity-75">Write a book</li>
        <li className="w-full font-Ubuntu text-sm text-center cursor-pointer hover:opacity-75">Logout</li>
      </ul>
    </div>
  );
}

function UserProfileButton(props: UserProfileButtonComponentProps) {
  const [dropDownMenuVisible, setDropDownMenuVisible] =
    useState<boolean>(false);

  return (
    <div className="ml-auto group flex flex-col items-center cursor-pointer w-auto">
      <IconContext.Provider value={{ size: "25px", color: "#FFFFFF" }}>
        <FaRegCircleUser
          onClick={() => {
            dropDownMenuVisible
              ? setDropDownMenuVisible(false)
              : setDropDownMenuVisible(true);
          }}
        />
      </IconContext.Provider>
      {dropDownMenuVisible ? (
        <UserProfileButtonMenu username={props.username} setVisibility={(v: boolean) => {setDropDownMenuVisible(v)}}  />
      ) : (
        <span className="absolute w-max top-[50px] scale-0 border-2 border-[#4b4b4b] bg-[#373737] p-2 text-xs text-palette2 group-hover:scale-100">
          {props.username}
        </span>
      )}
    </div>
  );
}

function LoginSignupButtons() {
  const [signupFormVisible, setSignupFormVisible] = useState<boolean>(false);
  const [loginFormVisible, setLoginFormVisible] = useState<boolean>(false);

  return (
    <>
      <div className="ml-auto flex flex-row">
        <button
          id="Login"
          className="bg-inherit border-2 border-palette1 w-[110px] h-[45px] rounded-lg font-Ubuntu text-palette1"
          onClick={() => setLoginFormVisible(true)}
        >
          Login
        </button>
        <button
          id="Signup"
          className="bg-palette1 w-[110px] h-[45px] rounded-lg font-Ubuntu text-palette9 ml-4"
          onClick={() => setSignupFormVisible(true)}
        >
          Signup
        </button>
      </div>
      {signupFormVisible ? (
        <SignupForm
          signupFormState={(v: boolean) => {
            setSignupFormVisible(v);
          }}
        />
      ) : (
        ""
      )}

      {loginFormVisible ? (
        <LoginForm
          loginFormState={(v: boolean) => {
            setLoginFormVisible(v);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}

function Navbar(props: NavbarComponentProps) {
  return (
    <div className="fixed flex flex-row items-center w-full h-[60px] bg-palette9 px-[50px] py-[17px]">
      <a
        className="font-Ubuntu font-bold text-xl text-palette1 cursor-pointer"
        href="/"
      >
        ReadWeb
      </a>
      <ul className="flex flex-row ml-[70px] items-center">
        {props.page === "Guest" ? (
          ""
        ) : (
          <li className="font-Ubuntu text-palette2 mr-6 cursor-pointer transition duration-150 ease-in hover:text-palette5">
            <a href="/mybooks">My Books</a>
          </li>
        )}
        <li className="font-Ubuntu text-palette2 mr-6 cursor-pointer transition duration-150 ease-in hover:text-palette5">
          <a href="/explore">Explore</a>
        </li>
        <li className="font-Ubuntu text-palette2 cursor-pointer transition duration-150 ease-in hover:text-palette5">
          <a href="https://github.com/Maghish/ReadWeb.git">Github</a>
        </li>
      </ul>
      {props.page === "Guest" ? (
        <LoginSignupButtons />
      ) : (
        <UserProfileButton username={props.username!} />
      )}
    </div>
  );
}

export default Navbar;
