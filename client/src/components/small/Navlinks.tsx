import UserProfileButton from "./UserProfileButton";

function Navlinks() {
  return (
    <>
      <div className="ml-[120px] w-full flex items-center gap-5 invisible md:visible">
        <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Explore
        </span>
        <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          My books
        </span>
        <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Bookmarks
        </span>
        <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Write a book
        </span>
        <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Github
        </span>
        <UserProfileButton />
      </div>
    </>
  );
}

export default Navlinks;
