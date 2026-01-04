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
      {/* Hidden SEO Content */}
      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        }}
        aria-hidden="true"
      >
        <h2>Contact Jehiel A - Java Full Stack Developer</h2>
        <p>
          Connect with <strong>Jehiel A</strong> for Java development opportunities,
          project collaborations, or technical discussions. <strong>Jehiel A</strong>
          is available for internships, freelance projects, and full-time roles.
        </p>
        <h3>Jehiel A's Contact Information</h3>
        <p>
          Email: jehiel06.dev@gmail.com<br />
          Location: Coimbatore, Tamil Nadu<br />
          Education: Sri Ramakrishna Engineering College<br />
          LinkedIn: linkedin.com/in/jehiel06<br />
          GitHub: github.com/jehiel06
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-white text-xl font-bold">Jehiel A</h3>
                <p className="text-gray-400 text-sm">Java Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              <strong>Jehiel A</strong> is a Full Stack Java Developer passionate about building scalable web applications
              with Spring Boot and React.js. <strong>Jehiel A</strong> is open to internships and collaborations.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jehiel06/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn Profile of Jehiel A"
                title="Connect with Jehiel A on LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/jehiel06"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="GitHub Profile of Jehiel A"
                title="View Jehiel A's projects on GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="mailto:jehiel06.dev@gmail.com"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="Email Jehiel A"
                title="Email Jehiel A for opportunities"
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
                  aria-label="Go to Home section - Jehiel A Portfolio"
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
                  aria-label="Go to About Jehiel A section"
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
                  aria-label="View Projects by Jehiel A"
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
                  aria-label="View Certifications of Jehiel A"
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
                  aria-label="Contact Jehiel A"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact <span className="text-orange-500">Jehiel A</span></h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="block text-xs text-gray-500 mb-1">Email</span>
                <a
                  href="mailto:jehiel06.dev@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                  title="Email Jehiel A"
                >
                  jehiel06.dev@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-gray-500 mb-1">Location</span>
                Coimbatore, Tamil Nadu
                <div className="hidden" aria-hidden="true">
                  <p><strong>Jehiel A</strong> is based in Coimbatore, Tamil Nadu</p>
                </div>
              </li>
              <li className="text-gray-400">
                <span className="block text-xs text-gray-500 mb-1">Education</span>
                SREC Coimbatore
                <div className="hidden" aria-hidden="true">
                  <p><strong>Jehiel A</strong> studies at Sri Ramakrishna Engineering College</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright - Updated with your name */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <strong className="text-orange-500">Jehiel A</strong>. Made with <FaHeart className="inline text-orange-500 text-xs" /> using React & Tailwind CSS
              <span className="block text-xs text-gray-600 mt-1">
                Portfolio of Jehiel A - Java Full Stack Developer
              </span>
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm group"
              aria-label="Back to top of Jehiel A's portfolio"
              title="Return to top of page"
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