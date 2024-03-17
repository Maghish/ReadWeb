function SignupForm() {
  return (
    <div className="fixed w-screen h-screen inset-0 backdrop-blur-sm flex items-center justify-center">
      <div className="h-[600px] w-[500px] bg-gradient-to-tr from-palette9/65 from-10%  via-palette9/80 via-30% to-palette9 to-80% shadow-2xl shadow-palette9/70 rounded-xl flex flex-col items-center p-10">
        <span className="mt-[20px] text-palette1 text-2xl font-Ubuntu">
          Sign Up
        </span>
        <input
          className="mt-[40px] w-full h-[50px] bg-palette2 outline-none rounded-lg p-4 font-Ubuntu placeholder:text-palette3"
          placeholder="Username"
        ></input>
        <input
          className="mt-[25px] w-full h-[50px] bg-palette2 outline-none rounded-lg p-4 font-Ubuntu placeholder:text-palette3"
          placeholder="Email"
        ></input>
        <input
          className="mt-[25px] w-full h-[50px] bg-palette2 outline-none rounded-lg p-4 font-Ubuntu placeholder:text-palette3"
          type="password"
          placeholder="Password"
        ></input>
        <button className="mt-[55px] w-auto bg-gradient-to-r from-palette7 via-palette6 to-palette5 rounded-lg py-4 px-7 text-palette2 font-Ubuntu">
          Sign Up
        </button>
        <span className="mt-auto text-palette1 w-auto">
          Don't have an account?
          <span className="ml-2 cursor-pointer text-palette5 underline underline-offset-2">
            Sign up!
          </span>
        </span>
      </div>
    </div>
  );
}

export default SignupForm;
