import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Logo } from "./Logo";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    // Set home as active on initial load
    setActiveSection('home');
    updateTabTitle('home');

    // Listen for hash changes (if someone visits with #about URL)
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['about', 'projects', 'certificates', 'contact'].includes(hash)) {
        setActiveSection(hash);
        updateTabTitle(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [menuOpen]);

  // Update URL when clicking nav items
  const handleNavClick = (section) => {
    setActiveSection(section);

    if (section === 'home') {
      window.history.replaceState(null, '', '/');
    } else {
      window.history.replaceState(null, '', `/#${section}`);
    }

    updateTabTitle(section);
  };

  // Update tab title
  const updateTabTitle = (section) => {
    let pageTitle = "Jehiel A | Java Full Stack Developer";

    switch (section) {
      case 'home':
        pageTitle = "Jehiel A | Java Full Stack Developer Portfolio";
        break;
      case 'about':
        pageTitle = "About Jehiel A | Java Full Stack Developer";
        break;
      case 'projects':
        pageTitle = "Projects by Jehiel A | Java Portfolio";
        break;
      case 'certificates':
        pageTitle = "Jehiel A's Certifications | Java Developer";
        break;
      case 'contact':
        pageTitle = "Contact Jehiel A | Java Developer";
        break;
    }

    document.title = pageTitle;
  };

  // Get active styling
  const getActiveClass = (section) => {
    if (activeSection === section) {
      return 'text-orange-500 font-semibold scale-105';
    }
    return 'text-gray-300';
  };

  // Listen for scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
              if (section === 'home') {
                window.history.replaceState(null, '', '/');
              } else {
                window.history.replaceState(null, '', `/#${section}`);
              }
              updateTabTitle(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] bg-black backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-64}
            onClick={() => handleNavClick('home')}
            className={`group flex items-center gap-3 font-bold cursor-pointer transition-all duration-300 ${getActiveClass('home')}`}
          >
            <Logo className="w-14 h-14" />
            <span className="text-2xl md:text-4xl group-hover:text-orange-500 transition-colors duration-300">
              Jehiel A
            </span>
            <span className="text-white text-2xl mb-2 md:text-4xl transition-colors duration-300">
              |
            </span>
            <span className="text-2xl md:text-4xl group-hover:text-orange-500 transition-colors duration-300">
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
            {/* Home - FIXED: Use Link for scrolling */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => handleNavClick('home')}
              className={`relative transition-all duration-300 cursor-pointer group ${getActiveClass('home')}`}
            >
              Home
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-orange-500 transition-all duration-300 rounded-full ${activeSection === 'home'
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full blur-sm transition-all duration-300 ${activeSection === 'home'
                ? 'opacity-70'
                : 'opacity-0 group-hover:opacity-50'
                }`}></span>
            </Link>

            {/* About */}
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => handleNavClick('about')}
              className={`relative transition-all duration-300 cursor-pointer group ${getActiveClass('about')}`}
            >
              About
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-orange-500 transition-all duration-300 rounded-full ${activeSection === 'about'
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full blur-sm transition-all duration-300 ${activeSection === 'about'
                ? 'opacity-70'
                : 'opacity-0 group-hover:opacity-50'
                }`}></span>
            </Link>

            {/* Projects */}
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => handleNavClick('projects')}
              className={`relative transition-all duration-300 cursor-pointer group ${getActiveClass('projects')}`}
            >
              Projects
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-orange-500 transition-all duration-300 rounded-full ${activeSection === 'projects'
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full blur-sm transition-all duration-300 ${activeSection === 'projects'
                ? 'opacity-70'
                : 'opacity-0 group-hover:opacity-50'
                }`}></span>
            </Link>

            {/* Certificates */}
            <Link
              to="certificates"
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => handleNavClick('certificates')}
              className={`relative transition-all duration-300 cursor-pointer group ${getActiveClass('certificates')}`}
            >
              Certificates
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-orange-500 transition-all duration-300 rounded-full ${activeSection === 'certificates'
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full blur-sm transition-all duration-300 ${activeSection === 'certificates'
                ? 'opacity-70'
                : 'opacity-0 group-hover:opacity-50'
                }`}></span>
            </Link>

            {/* Contact */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => handleNavClick('contact')}
              className={`relative transition-all duration-300 cursor-pointer group ${getActiveClass('contact')}`}
            >
              Contact
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-orange-500 transition-all duration-300 rounded-full ${activeSection === 'contact'
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full blur-sm transition-all duration-300 ${activeSection === 'contact'
                ? 'opacity-70'
                : 'opacity-0 group-hover:opacity-50'
                }`}></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};