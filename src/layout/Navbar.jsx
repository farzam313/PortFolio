import React, { useEffect, useState } from "react";

const Navbar = ({ className, setIsOpen }) => {
  const navItems = [
    { id: "home", label: "Home" },

    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contacts" },
    { id: "about", label: "About" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-center h-full ${className}`}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setIsOpen(false)}
          className={`flex w-full h-full justify-center py-4 px-4 rounded-2xl transition duration-300 ease-in-out
            ${
              activeSection === item.id
                ? "underline underline-offset-8 text-green-400 font-bold"
                : "hover:bg-gray-600 hover:text-blue-300"
            }`}
        >
          <div>{item.label}</div>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
