import { IconContext } from "react-icons";
import { LoginFormComponentProps } from "../vite-env";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import SetCookie from "../functions/SetCookie";

function LoginForm(props: LoginFormComponentProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function HandleFormClose() {
    props.loginFormState(false);
  }

  function HandleLogIn() {
    axios
      .post("/api/auth/loginuser", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        SetCookie('token', response.data.token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        window.location.reload();
      })
      .catch((error) => { console.log(error) })
  }

  return (
    <div className="fixed w-screen h-screen inset-0 backdrop-blur-sm flex items-center justify-center">
      <div className="h-[600px] w-[500px] bg-gradient-to-tr from-palette9/65 from-10%  via-palette9/80 via-30% to-palette9 to-80% shadow-2xl shadow-palette9/70 rounded-xl flex flex-col items-center p-10">
        <div className="relative self-end">
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              size: "24px",
              className: "cursor-pointer hover:opacity-85",
            }}
          >
            <IoClose onClick={HandleFormClose} />
          </IconContext.Provider>
        </div>

        <span className="mt-[20px] text-palette1 text-2xl font-Ubuntu">
          Login
        </span>
        <input
          className="mt-[25px] w-full h-[50px] bg-palette2 outline-none rounded-lg p-4 font-Ubuntu placeholder:text-palette3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="mt-[25px] w-full h-[50px] bg-palette2 outline-none rounded-lg p-4 font-Ubuntu placeholder:text-palette3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="mt-[55px] w-auto bg-gradient-to-r from-palette7 via-palette6 to-palette5 rounded-lg py-4 px-7 text-palette2 font-Ubuntu"
          onClick={HandleLogIn}
        >
          Login
        </button>
        <span className="mt-auto text-palette1 w-auto">
          Don't have an account?
          <span className="ml-2 cursor-pointer text-palette5 underline underline-offset-2">
            Signup!
          </span>
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
