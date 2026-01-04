import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState('home');

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveClass = (section) => {
    return activeSection === section ? 'text-orange-500' : 'text-white';
  };

  const handleItemClick = (section) => {
    // Update URL
    if (section === 'home') {
      window.history.replaceState(null, '', '/');
    } else {
      window.history.replaceState(null, '', `/#${section}`);
    }

    // Update active section
    setActiveSection(section);

    // Close menu
    setMenuOpen(false);
  };

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
        {/* Home */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-64}
          onClick={() => handleItemClick('home')}
          className={`text-2xl font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer ${getActiveClass('home')}`}
        >
          Home
        </Link>

        {/* About */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-64}
          onClick={() => handleItemClick('about')}
          className={`text-2xl font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer ${getActiveClass('about')}`}
        >
          About
        </Link>

        {/* Projects */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-64}
          onClick={() => handleItemClick('projects')}
          className={`text-2xl font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer ${getActiveClass('projects')}`}
        >
          Projects
        </Link>

        {/* Certificates */}
        <Link
          to="certificates"
          smooth={true}
          duration={500}
          offset={-64}
          onClick={() => handleItemClick('certificates')}
          className={`text-2xl font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer ${getActiveClass('certificates')}`}
        >
          Certificates
        </Link>

        {/* Contact */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-64}
          onClick={() => handleItemClick('contact')}
          className={`text-2xl font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer ${getActiveClass('contact')}`}
        >
          Contact
        </Link>
      </nav>

      {/* Download CV Button */}
      <a
        href="Jehiel_A_resume.pdf"
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