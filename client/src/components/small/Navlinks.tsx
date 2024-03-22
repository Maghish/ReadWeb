import { useContext } from "react";
import { Context } from "../../App";

function Navlinks() {
  const { mode } = useContext(Context);

  return (
    <>
      <div className="ml-[120px] mr-auto w-auto flex items-center gap-5 invisible md:visible">
        <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Explore
        </span>
        {mode === "User" ? (
          <>
            <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
              My books
            </span>
            <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
              Bookmarks
            </span>
            <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
              Write a book
            </span>
          </>
        ) : (
          ""
        )}
        <span className="text-palette2 text-sm font-Roboto cursor-pointer transition-all duration-200 ease-in hover:text-palette5">
          Github
        </span>
      </div>
    </>
  );
}
 
export default Navlinks;