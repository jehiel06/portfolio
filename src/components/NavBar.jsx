import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { Logo } from "./Logo";  // Add this import


export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] bg-black backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="group flex items-center gap-3 text-white text-2xl md:text-4xl font-bold cursor-pointer transition-colors duration-300"
            >
              <Logo className="w-14 h-14" />
              <span className="group-hover:text-orange-500 transition-colors duration-300">
                Jehiel A 
              </span>
              <span className="text-orange-500 group-hover:text-white transition-colors duration-300">
                |
              </span>
              <span className="group-hover:text-orange transition-colors duration-300">
                Dev
              </span>
            </Link>

          <div
            className="w-7 h-5 relative cursor-pointer text-white z-40 md:hidden hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>


          <div className="hidden md:flex text-xl items-center space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-64}
              className="relative text-gray-200 hover:text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer group"
              activeClass="text-orange-500"
              spy={true}
            >
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>{" "}
            </Link>


            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-64}
              className="relative text-gray-300 hover:text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer group"
              activeClass="text-orange-500"
              spy={true}
            >
              About
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>{" "}
            </Link>


            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-64}
              className="relative text-gray-300 hover:text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer group"
              activeClass="text-orange-500"
              spy={true}
            >
              Projects
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>{" "}
            </Link>


            <Link
              to="certificates"
              smooth={true}
              duration={500}
              offset={-64}
              className="relative text-gray-300 hover:text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer group"
              activeClass="text-orange-500"
              spy={true}
            >
              Certificates
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>{" "}
            </Link>


            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              className="relative text-gray-300 hover:text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer group"
              activeClass="text-orange-500"
              spy={true}
            >
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};