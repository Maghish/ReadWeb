function Navbar() {
  return (
    <div className="flex flex-row items-center w-full bg-palette5 px-4 py-2">
      <p className="font-extrabold font-Ubuntu text-lg text-palette3">
        ReadWeb
      </p>
      <ul className="flex flex-row items-center ml-[30px] font-Ubuntu">
        <li className="mr-[14px] text-palette3 text-sm cursor-pointer hover:text-palette2">
          About
        </li>
        <li className="mr-[14px] text-palette3 text-sm cursor-pointer hover:text-palette2">
          View all
        </li>
        <li className="mr-[14px] text-palette3 text-sm cursor-pointer hover:text-palette2">
          Write a book
        </li>
      </ul>
      <form className="ml-auto  h-full">
        <input className="outline-none bg-palette3 rounded-md text-palette5 px-3 py-1 text-sm" />
      </form>
      <button className="ml-auto rounded-lg bg-palette1 p-2 px-3 font-Ubuntu text-palette3">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
