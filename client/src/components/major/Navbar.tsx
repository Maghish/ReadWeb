import { useState } from "react";
import Navlinks from "../small/Navlinks";
import { MdMenu } from "react-icons/md";
import HamburgerMenuNavLinks from "../small/HamburgerMenuNavLinks";

function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <>
      <div className="min-w-full w-auto min-h-16 bg-palette9 px-4 sm:px-7 py-2 flex flex-row items-center">
        {/* Header */}
        <a
          href="/"
          className="text-palette1 text-2xl font-Roboto font-bold cursor-pointer"
        >
          ReadWeb
        </a>
        {/* Nav Links */}
        <Navlinks />
        <MdMenu
          color="#FFFFFF"
          size="32px"
          className="visible md:invisible cursor-pointer flex-shrink-0 flex-grow-0 justify-end hover:opacity-80"
          onClick={() => {
            setHamburgerActive(!hamburgerActive);
          }}
        />
      </div>
      {hamburgerActive ? <HamburgerMenuNavLinks /> : ""}
    </>
  );
}

export default Navbar;
