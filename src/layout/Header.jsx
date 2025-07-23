import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import DeveloperLogo from "./DeveloperLogo";
import NavBar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => (
    <button onClick={() => setIsOpen(!isOpen)}>
      <div className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition duration-100 ease-in-out">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </button>
  );

  const Icon = () => (
    <a href="#home" onClick={() => setIsOpen(false)}>
      <div className="block items-center justify-between h-[50px]   px-4">
        <DeveloperLogo />
      </div>
    </a>
  );

  return (
    <>
      <header className="hidden lg:flex  fixed justify-between top-0 left-0 w-full bg-gray-800 text-white h-16 z-50">
        <div className="flex items-center justify-between  h-full w-full">
          {<Icon />}

          {<NavBar className="gap-4 px-4 " />}
        </div>
      </header>

      <header className="lg:hidden fixed flex-col top-0 left-0 w-full  text-white z-50 shadow-md">
        <div className="flex items-center bg-gray-800 justify-between w-full py-4 mb-[0.9px]">
          <Icon />
          <ToggleMenu />
        </div>
        <div>
          {isOpen && (
            <div className="flex flex-col items-center justify-center w-full  bg-gray-800 h-[90vh] py-30">
              <NavBar setIsOpen={setIsOpen} className="flex-col w-full py-5 " />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
