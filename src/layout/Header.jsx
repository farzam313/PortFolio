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
  return (
    <header className="fixed flex-col top-0 left-0 w-full bg-gray-800 text-white h-16 z-50 shadow-md">
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <nav className=" flex justify-center  ">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="h-full px-4 flex items-center hover:bg-gray-700 align-center justify-center p-4 rounded "
          >
            <a href={`#${item.id}`} className="block w-full h-full">
              {item.label}
            </a>
          </div>
        ))}
      </nav>

      {isOpen && (
        <nav className="md: hidden mt-4 flex flex-col gap-4 bg-white shadow-lg p-4"></nav>
      )}
    </header>
  );
};

export default Header;
