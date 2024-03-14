function Navbar() {
  return (
    <div className="flex flex-row items-center w-full h-[60px] bg-palette9 px-[50px] py-[17px]">
      <a
        className="font-Ubuntu font-bold text-xl text-palette1 cursor-pointer"
        href="/"
      >
        ReadWeb
      </a>
      <ul className="flex flex-row ml-[70px] items-center">
        <li className="font-Ubuntu text-palette2 mr-6 cursor-pointer transition duration-150 ease-in hover:text-palette5">
          <a href="/about">About</a>
        </li>
        <li className="font-Ubuntu text-palette2 mr-6 cursor-pointer transition duration-150 ease-in hover:text-palette5">
          <a href="/explore">Explore</a>
        </li>
        <li className="font-Ubuntu text-palette2 cursor-pointer transition duration-150 ease-in hover:text-palette5">
          <a href="https://github.com/Maghish/ReadWeb.git">Github</a>
        </li>
      </ul>
      <button className=""></button>
      <button className="ml-auto bg-inherit border-2 border-palette1 w-[110px] h-[45px] rounded-lg font-Ubuntu text-palette1">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
