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
      </ul>
    </>
  );
}
 
export default HamburgerMenuNavLinks;