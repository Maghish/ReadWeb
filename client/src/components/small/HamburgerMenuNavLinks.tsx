function HamburgerMenuNavLinks() {
  return (
    <>
      <ul className="w-auto flex flex-col px-7 py-2 gap-y-3 bg-palette9 h-auto">
        <li className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Explore
        </li>
        <li className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          My books
        </li>
        <li className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Bookmarks
        </li>
        <li className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Write a book
        </li>
        <li className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Github
        </li>
        <div className="inline-flex items-center gap-4 mt-3">
          <button className="border-2 border-palette2 rounded-md w-20 bg-inherit text-palette2 text-sm p-2 font-Roboto hover:opacity-90">
            Login
          </button>
          <button className="border-2 border-palette2 rounded-md w-20 bg-palette2 text-palette9 text-sm p-2 font-Roboto hover:opacity-90">
            Sign Up
          </button>
        </div>
      </ul>
    </>
  );
}
 
export default HamburgerMenuNavLinks;