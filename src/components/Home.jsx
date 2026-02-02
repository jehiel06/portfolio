import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import profile from "/src/images/profile-jehiel-a.png";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <main id="home" className="relative min-h-screen bg-black pt-16">
      {/* ========== HIDDEN SEO CONTENT ========== */}
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
        <h1>Jehiel A - Java Full Stack Developer Portfolio</h1>
        <p>
          <strong>Jehiel A</strong> is a professional Java Full Stack Developer
          specializing in Spring Boot, React.js, and modern web technologies.
          <strong>Jehiel A</strong> builds scalable applications, REST APIs,
          and efficient software solutions. Based in Coimbatore,
          <strong>Jehiel A</strong> is a Computer Science student at
          Sri Ramakrishna Engineering College.
        </p>
        <h2>Jehiel A's Expertise</h2>
        <ul>
          <li>Java Full Stack Development</li>
          <li>Spring Boot Microservices</li>
          <li>React.js Frontend Development</li>
          <li>REST API Design</li>
          <li>Database Management</li>
          <li>Cloud Deployment</li>
        </ul>
        <p>
          Contact <strong>Jehiel A</strong> for Java development projects,
          internship opportunities, or software engineering roles.
          <strong>Jehiel A</strong> is open to full-time positions,
          freelance work, and collaborative projects.
        </p>
      </div>
      {/* ========== END SEO CONTENT ========== */}

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

            {/* Update TypeAnimation with your name */}
            <div className="h-16 sm:h-20 flex items-center">
              <TypeAnimation
                sequence={[
                  "Full Stack Java Developer",
                  2000,
                  "Java Developer - Jehiel A",
                  2000,
                  "React Developer",
                  2000,
                  "Java Spring Boot Developer",
                  2000,
                  "Computer Science Student",
                  2000,
                  "Software Engineer - Jehiel A",
                  2000,
                  "Web Application Developer",
                  2000,
                ]}
                wrapper="p"
                speed={50}
                className="text-white text-xl sm:text-3xl mt-4"
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <strong>Jehiel A</strong> builds scalable web applications with Java, Spring Boot, and
              React. Passionate about clean code and innovative solutions.
            </motion.p>

            {/* Hidden SEO paragraph */}
            <div className="hidden" aria-hidden="true">
              <p>
                <strong>Jehiel A</strong> is a skilled Java developer with expertise in
                modern frameworks and tools. <strong>Jehiel A's</strong> portfolio showcases
                projects in full-stack development, demonstrating technical proficiency
                and problem-solving abilities.
              </p>
            </div>

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
                href="Jehiel_A_resume.pdf"
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
                aria-label="GitHub Profile - Jehiel A"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/jehiel06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn Profile - Jehiel A"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:jehiel06.dev@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
                aria-label="Email Jehiel A"
              >
                <FaEnvelope className="w-7 h-7" />
              </a>
            </motion.div>

            {/* Quick Stats - Update with more context */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <p className="text-orange-500 text-3xl font-bold">SREC</p>
                <p className="text-gray-400 text-sm mt-1">Student - Jehiel A</p>
                {/* Hidden SEO text */}
                <div className="hidden" aria-hidden="true">
                  <p>Jehiel A studies Computer Science at SREC</p>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-orange-500 text-3xl font-bold">6+</p>
                <p className="text-gray-400 text-sm mt-1">Projects by Jehiel A</p>
                {/* Hidden SEO text */}
                <div className="hidden" aria-hidden="true">
                  <p>Jehiel A has completed multiple Java projects</p>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-orange-500 text-3xl font-bold">15+</p>
                <p className="text-gray-400 text-sm mt-1">Technologies</p>
                {/* Hidden SEO text */}
                <div className="hidden" aria-hidden="true">
                  <p>Jehiel A works with Java, Spring, React, and more</p>
                </div>
              </div>
            </motion.div>

            {/* Additional hidden SEO content */}
            <div className="hidden" aria-hidden="true">
              <h2>Jehiel A - Technical Skills</h2>
              <p>
                <strong>Jehiel A</strong> is proficient in Java programming,
                Spring Boot framework, React.js development, database design,
                REST API creation, and deployment technologies.
              </p>
              <h3>Contact Jehiel A</h3>
              <p>
                Connect with <strong>Jehiel A</strong> for software development
                opportunities, Java projects, or technical collaboration.
                <strong>Jehiel A</strong> is responsive and professional.
              </p>
            </div>
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
                title="Jehiel A - Java Developer"
              />
              {/* Hidden image text for SEO */}
              <div className="hidden" aria-hidden="true">
                <p>Profile photo of Jehiel A, Java Full Stack Developer</p>
              </div>
            </div>

            {/* Floating Badge - Update text */}
            <motion.div
              className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-nowrap text-sm font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Jehiel A - Open to Opportunities
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
          aria-label="Scroll to About Jehiel A"
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