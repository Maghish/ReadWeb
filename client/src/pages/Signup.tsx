import axios from "axios";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function SignupUser() {
    axios.post("/auth/signup", {
      username: username,
      email: email,
      password: password
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <form>
      <input
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="button" onClick={SignupUser}>
        Sign up!
      </button>
    </form>
  );
}

export default Signup;
