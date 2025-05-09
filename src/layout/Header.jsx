import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contacts" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => (
    <div className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition duration-100 ease-in-out">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  );

  const Icon = () => (
    <div className="block items-center justify-between h-full w-full px-4">
      <a href="#home">{"<Farzam />"}</a>
    </div>
  );
  const NavBar = ({ className = " " }) => (
    <nav className={`flex  items-center  justify-center  h-full ${className}`}>
      {navItems.map((item) => (
        <a
          href={`#${item.id}`}
          className="flex w-full h-full justify-center hover:bg-blue-300 rounded-2xl transition duration-100 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex py-4 px-4 justify-center ">{item.label}</div>
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <header className="hidden md:flex  fixed justify-between top-0 left-0 w-full bg-gray-800 text-white h-16 z-50 shadow-md">
        <div className="flex items-center justify-between h-full w-full">
          {<Icon />}

          {<NavBar className="gap-4 px-4 " />}
        </div>
      </header>

      <header className="md:hidden fixed flex-col top-0 left-0 w-full  text-white z-50 shadow-md">
        <div className="flex items-center bg-gray-800 justify-between w-full py-4 mb-[1px]">
          <Icon />
          <ToggleMenu />
        </div>
        <div>
          {isOpen && (
            <div className="flex flex-col items-center justify-center w-full  bg-gray-800 min-h-screen">
              <NavBar className="flex-col w-full " />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
