import React from 'react';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.98)] backdrop-blur-sm z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-7 text-white text-4xl focus:outline-none cursor-pointer hover:text-orange-500 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center gap-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-64}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Download CV Button in Mobile Menu */}
      <a
        href="resume.pdf"
        download
        className="mt-10 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        onClick={() => setMenuOpen(false)}
      >
        <FaDownload className="w-4 h-4" />
        Download CV
      </a>
    </div>
  );
};
