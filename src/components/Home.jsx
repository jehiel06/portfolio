import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import profile from "/src/images/profile.jpg";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <main id="home" className="relative min-h-screen bg-black pt-16">
      {/* Container matching navbar width */}
      <div className="max-w-7xl mx-auto px-4 py-20 pb-30">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          {/* Left Text Section */}
          <motion.div
            className="text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 text-xl sm:text-2xl">Hello!</span>
            <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-4 mt-2">
              <span className="text-white text-4xl sm:text-6xl font-bold">
                I'm
              </span>
              <span className="text-orange-500 text-4xl sm:text-5xl font-bold">
                Jehiel A
              </span>
            </div>

            <TypeAnimation
              sequence={[
                "Full Stack Java Developer",
                2000,
                "Web Developer",
                2000,
                "React Developer",
                2000,
                "Java Enthusiast",
                2000,
                "Computer Science Student",
                2000,
                "Problem Solver",
                2000,
                "Data Structure and Algorithm",
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-white text-xl sm:text-3xl mt-4"
              repeat={Infinity}
            />

            <motion.p
              className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Building scalable web applications with Java, Spring Boot, and
              React. Passionate about clean code and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/50 cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </Link>
              <a
                href="resume.pdf"
                download
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links with React Icons */}
            <motion.div
              className="flex gap-6 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a
                href="https://github.com/jehiel06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/jehiel06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:jehiel06.dev@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
                aria-label="Email"
              >
                <FaEnvelope className="w-7 h-7" />
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <p className="text-orange-500 text-3xl font-bold">SREC</p>
                <p className="text-gray-400 text-sm mt-1">Student</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-orange-500 text-3xl font-bold">8+</p>
                <p className="text-gray-400 text-sm mt-1">Projects Done</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-orange-500 text-3xl font-bold">10+</p>
                <p className="text-gray-400 text-sm mt-1">Technologies</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Border Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full blur-lg opacity-30 animate-pulse"></div>

            <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-96 lg:h-96">
              <img
                className="rounded-full object-cover w-full h-full border-4 border-orange-400 shadow-2xl shadow-orange-500/20"
                src={profile}
                alt="Jehiel A - Full Stack Java Developer"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-nowrap text-sm font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Open to Opportunities
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down with Ripple Effect */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="relative cursor-pointer group"
        >
          <motion.div className="flex flex-col items-center text-gray-400 group-hover:text-orange-500 transition-colors">
            {/* Multiple ripple rings */}
            <motion.div
              className="absolute w-16 h-16 border-2 border-orange-500 rounded-full opacity-0"
              animate={{
                scale: [1, 2, 3],
                opacity: [0.5, 0.3, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute w-16 h-16 border-2 border-orange-500 rounded-full opacity-0"
              animate={{
                scale: [1, 2, 3],
                opacity: [0.5, 0.3, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />

            <span className="text-sm mb-2 z-10">Scroll Down</span>
            <motion.svg
              className="w-6 h-6 z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileTap={{ scale: 0.8, y: 10 }}
              transition={{ type: "spring" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </Link>
      </motion.div>
    </main>
  );
};