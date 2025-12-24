import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';
import { Logo } from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-white text-xl font-bold">Jehiel A</h3>
                <p className="text-gray-400 text-sm">Java Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Full Stack Java Developer passionate about building scalable web applications 
              with Spring Boot and React.js. Open to internships and collaborations.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jehiel06/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="mailto:jehiel06.dev@gmail.com"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="certificates"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer text-sm"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="block text-xs text-gray-500 mb-1">Email</span>
                <a href="mailto:jehiel.2301116@srec.ac.in" className="hover:text-orange-500 transition-colors">
                  jehiel06.dev@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-gray-500 mb-1">Location</span>
                Coimbatore, Tamil Nadu
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-gray-500 mb-1">Education</span>
                SREC Coimbatore
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Jehiel A. Made with <FaHeart className="inline text-orange-500 text-xs" /> using React & Tailwind CSS
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm group"
              aria-label="Back to top"
            >
              Back to Top
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;