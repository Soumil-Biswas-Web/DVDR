import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import MobileMenuToggle from "./components/MobileMenuToggle";

export default function Header() {

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) setIsAtTop(true);
    else setIsAtTop(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header stays fixed for tall pages */}
      <header className={`flex justify-between items-center px-5 sm:px-20 py-8 gap-4 print:hidden w-full fixed top-0 z-20 transition-all duration-300 ${isAtTop? "bg-opacity-0" : "bg-opacity-100 bg-[--background-color]"}`}>
        {/* Logo and Navbar */}
        <Link to={"/"} className="flex items-center gap-2 w-auto justify-between">
          <img className="h-16 object-contain" src="/DVDR/images/logos/logo.png" alt="Logo" />         
        </Link>

        <div className="flex gap-5">
          {/* Mobile Menu Icon */}
          {!isOpen &&           
            <MobileMenuToggle isOpen={isOpen} onClick={toggleMenu}/>
          }
          <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </header>
      {/* A dummy element so that body elements can stay centered in pages */}
      <div className="pt-[130px]"></div>
    </>
  );
}
