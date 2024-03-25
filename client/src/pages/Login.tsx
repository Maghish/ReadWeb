import axios from "axios";
import { useState } from "react";
import SetCookie from "../functions/SetCookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function LoginUser() {
    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response: any) => {
        console.log(response);
        SetCookie("token", response.data.token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        navigate("/");
      });
  }

  return (
    <div className="absolute min-w-full min-h-screen bg-palette2 flex items-center justify-center">
      <form className="flex flex-col bg-palette9 w-[500px] min-h-[400px] h-auto p-10 rounded-lg gap-y-7">
        <h1 className="text-palette2 text-2xl self-center font-Roboto">
          Log in
        </h1>
        <input
          className="bg-palette2 p-3 rounded-lg outline-none text-sm font-Roboto placeholder:text-palette4"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="bg-palette2 p-3 rounded-lg outline-none text-sm font-Roboto placeholder:text-palette4"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="bg-inherit border-2 border-palette2 text-palette2 font-Roboto w-fit p-3 px-5 rounded-md self-center"
          type="button"
          onClick={LoginUser}
        >
          Log in
        </button>
        <span className="mt-5 text-palette3 self-center font-Roboto">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-palette5 cursor-pointer hover:underline hover:underline-offset-4"
          >
            Sign up!
          </a>
        </span>
      </form>
    </div>
  );
}
 
export default Login;