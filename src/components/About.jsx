import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaLaptopCode,
    FaRocket,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaGraduationCap,
    FaAward,
    FaJava,
    FaReact,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaDatabase,
    FaUnity
} from 'react-icons/fa';
import {
    SiSpringboot,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiC,
    SiCplusplus,
    SiApachekafka,
    SiUnity
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// TechCard Component with Individual Mouse-Tracking Glow
const TechCard = ({ tech, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <motion.div
            className="group relative bg-black border border-gray-900 rounded-xl p-3 sm:p-4 hover:border-orange-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle Mouse-tracking orange glow inside card */}
            {isHovered && (
                <div
                    className="absolute pointer-events-none"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        width: '150px',
                        height: '150px',
                        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.1) 40%, transparent 70%)',
                        transform: 'translate(-50%, -50%)',
                        filter: 'blur(20px)',
                        transition: 'opacity 0.2s',
                    }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                <div className={`text-3xl sm:text-4xl ${tech.color} group-hover:scale-125 transition-transform duration-300`}>
                    {tech.icon}
                </div>
                <p className="text-gray-400 text-xs font-medium text-center group-hover:text-white transition-colors">
                    {tech.name}
                </p>
            </div>
        </motion.div>
    );
};

const About = () => {
    const techStack = [
        { name: 'Java', icon: <FaJava />, color: 'text-orange-600' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
        { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
        { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400' },
        { name: 'Kafka', icon: <SiApachekafka />, color: 'text-gray-300' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
        { name: 'C', icon: <SiC />, color: 'text-blue-600' },
        { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-500' },
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
        { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-300' },
        { name: 'REST APIs', icon: <TbApi />, color: 'text-orange-400' },
        { name: 'Unity', icon: <FaUnity />, color: 'text-white' }
    ];

    return (
        <section id="about" className="min-h-screen bg-black py-16 sm:py-20">
            {/* ========== ADD THIS SECTION FOR SEO ========== */}
            {/* Hidden but accessible to search engines */}
            <div className="hidden" aria-hidden="true">
                <h1>About Jehiel A - Java Full Stack Developer</h1>
                <p>
                    <strong>Jehiel A</strong> is a passionate Computer Science student at
                    Sri Ramakrishna Engineering College, Coimbatore, specializing in
                    Full Stack Java Development. <strong>Jehiel A</strong> possesses
                    comprehensive skills in Java, Spring Boot, React.js, MongoDB, Docker,
                    and modern web technologies. With a strong focus on building scalable
                    applications, <strong>Jehiel A</strong> combines technical expertise
                    with problem-solving abilities to create efficient software solutions.
                </p>
                <p>
                    <strong>Jehiel A's</strong> portfolio showcases expertise in backend
                    development with Java and Spring Boot, frontend development with React.js,
                    database management with MongoDB and MySQL, and DevOps tools like Docker
                    and Git. <strong>Jehiel A</strong> is actively seeking internship
                    opportunities and collaborative projects in Java development.
                </p>
                <h2>Jehiel A's Technical Skills</h2>
                <ul>
                    <li>Java Programming - Jehiel A develops robust applications</li>
                    <li>Spring Boot Framework - Jehiel A builds microservices</li>
                    <li>React.js Development - Jehiel A creates responsive interfaces</li>
                    <li>MongoDB & MySQL - Jehiel A designs efficient databases</li>
                    <li>Docker Containerization - Jehiel A deploys applications</li>
                    <li>REST API Development - Jehiel A implements web services</li>
                </ul>
                <h2>Contact Jehiel A</h2>
                <p>
                    Interested in working with <strong>Jehiel A</strong>? Connect via
                    LinkedIn or email for Java development opportunities, project
                    collaborations, or technical discussions. <strong>Jehiel A</strong>
                    is available for internships, freelance projects, and full-time roles
                    in software development.
                </p>
            </div>
            {/* ========== END SEO SECTION ========== */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title - ADD SEO FRIENDLY VERSION */}
                <div className="hidden" aria-hidden="true">
                    <h1>Jehiel A - Java Full Stack Developer Portfolio</h1>
                </div>

                <motion.div
                    className="text-4xl sm:text-5xl md:text-6xl text-orange-500 font-bold mb-8 sm:mb-12 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className='text-white'>Me</span>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Introduction - ENHANCE WITH MORE NAME MENTIONS */}
                    <motion.div
                        className="space-y-3 sm:space-y-4 px-2 sm:px-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center sm:text-left">
                            Hi, I'm <span className="text-orange-500 font-bold">Jehiel A</span>
                        </h2>
                        <h3 className="text-lg sm:text-xl md:text-2xl text-orange-500 font-medium text-center sm:text-left">
                            Computer Science Student & Aspiring Full Stack Java Developer
                        </h3>

                        {/* ADD SEO-FRIENDLY PARAGRAPH */}
                        <div className="hidden sm:block" aria-hidden="true">
                            <p className="text-gray-400 text-sm">
                                <strong>Jehiel A</strong> specializes in Java Full Stack Development
                                with Spring Boot and React. <strong>Jehiel A's</strong> expertise includes
                                building scalable web applications, REST APIs, and modern user interfaces.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education & Quick Info - ADD SEO TEXT */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="bg-black border border-gray-900 rounded-xl p-4 sm:p-6 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                            <FaGraduationCap className="text-orange-500 text-2xl sm:text-3xl mb-3" />
                            <h4 className="text-white text-base sm:text-lg font-semibold mb-2">Education</h4>
                            <p className="text-gray-300 text-xs sm:text-sm">B.E Computer Science and Engineering</p>
                            <p className="text-orange-500 text-xs sm:text-sm font-medium mt-1">Sri Ramakrishna Engineering College</p>
                            <p className="text-gray-400 text-xs mt-1">Coimbatore, Tamil Nadu</p>

                            {/* ADD SEO TEXT */}
                            <div className="hidden" aria-hidden="true">
                                <p><strong>Jehiel A</strong> is currently pursuing Computer Science Engineering at SREC Coimbatore.</p>
                            </div>
                        </div>

                        <div className="bg-black border border-gray-900 rounded-xl p-4 sm:p-6 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                            <FaAward className="text-orange-500 text-2xl sm:text-3xl mb-3" />
                            <h4 className="text-white text-base sm:text-lg font-semibold mb-2">Focus Areas</h4>
                            <p className="text-gray-300 text-xs sm:text-sm">Full Stack Development</p>
                            <p className="text-gray-300 text-xs sm:text-sm">Java & Spring Boot Ecosystem</p>
                            <p className="text-gray-300 text-xs sm:text-sm">Modern Web Technologies</p>

                            {/* ADD SEO TEXT */}
                            <div className="hidden" aria-hidden="true">
                                <p><strong>Jehiel A</strong> focuses on Java Full Stack Development with Spring Boot and React.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Description - ENHANCE WITH MORE "JEHIEL A" MENTIONS */}
                    <motion.div
                        className="bg-black border border-gray-900 rounded-xl p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-justify sm:text-left break-words">
                            I'm <strong>Jehiel A</strong>, a passionate Computer Science student at{' '}
                            <span className="text-white font-semibold">
                                Sri Ramakrishna Engineering College, Coimbatore
                            </span>
                            , with a strong focus on building scalable, user-friendly web applications.
                            <strong>Jehiel A's</strong> journey in software development has been driven by curiosity and a desire
                            to solve real-world problems through innovative technology solutions.
                        </p>

                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-justify sm:text-left break-words">
                            <strong>Jehiel A</strong> specializes in{' '}
                            <span className="text-orange-500 font-semibold">
                                Full Stack Java Development
                            </span>
                            , working with technologies like{' '}
                            <span className="text-orange-500 font-semibold">
                                Java, Spring Boot, React.js, MongoDB, Docker, and Kafka
                            </span>.
                            <strong>Jehiel A's</strong> approach to development emphasizes clean code, best practices,
                            and creating intuitive user experiences.
                        </p>

                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-justify sm:text-left break-words">
                            Beyond academics, <strong>Jehiel A</strong> actively engages in personal projects that challenge
                            learning new frameworks and tools. <strong>Jehiel A</strong> is particularly interested in building
                            enterprise-level applications, microservices architecture, RESTful APIs,
                            and responsive frontend interfaces. <strong>Jehiel A's</strong> goal is to continuously improve
                            craft and contribute to meaningful projects that make a positive impact.
                        </p>

                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-justify sm:text-left break-words">
                            <strong>Jehiel A</strong> is currently seeking{' '}
                            <span className="text-white font-semibold">
                                internship opportunities, collaborative projects, and open-source contributions
                            </span>{' '}
                            where <strong>Jehiel A</strong> can apply skills, learn from experienced developers,
                            and grow as a software engineer. <strong>Jehiel A</strong> believes in the power of teamwork
                            and is eager to contribute to innovative solutions in a professional environment.
                        </p>

                        {/* ADD EXTENDED SEO CONTENT (Hidden) */}
                        <div className="hidden" aria-hidden="true">
                            <h3>Jehiel A's Development Philosophy</h3>
                            <p>
                                <strong>Jehiel A</strong> follows industry best practices in software development,
                                focusing on code quality, testing, and maintainability. <strong>Jehiel A</strong>
                                believes in continuous learning and staying updated with the latest technologies
                                in the Java ecosystem.
                            </p>
                            <h3>Why Work With Jehiel A</h3>
                            <p>
                                <strong>Jehiel A</strong> brings dedication, technical skills, and problem-solving
                                abilities to every project. With expertise in both frontend and backend technologies,
                                <strong>Jehiel A</strong> can handle complete software development lifecycles.
                            </p>
                        </div>
                    </motion.div>

                    {/* What I Do Cards - ADD SEO TEXT */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="bg-black border border-gray-900 rounded-xl p-4 sm:p-6 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                            <FaCode className="text-orange-500 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                            <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">Backend Development</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">Building robust REST APIs and microservices with Java, Spring Boot, and MongoDB</p>

                            {/* SEO TEXT */}
                            <div className="hidden" aria-hidden="true">
                                <p><strong>Jehiel A</strong> specializes in Java backend development with Spring Boot.</p>
                            </div>
                        </div>

                        <div className="bg-black border border-gray-900 rounded-xl p-4 sm:p-6 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                            <FaLaptopCode className="text-orange-500 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                            <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">Frontend Development</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">Creating responsive, modern UIs with React.js, Tailwind CSS, and modern JavaScript</p>

                            {/* SEO TEXT */}
                            <div className="hidden" aria-hidden="true">
                                <p><strong>Jehiel A</strong> develops frontend interfaces using React.js and modern CSS.</p>
                            </div>
                        </div>

                        <div className="bg-black border border-gray-900 rounded-xl p-4 sm:p-6 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                            <FaRocket className="text-orange-500 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                            <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">Problem Solving</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">Tackling complex challenges with efficient algorithms, data structures, and best practices</p>

                            {/* SEO TEXT */}
                            <div className="hidden" aria-hidden="true">
                                <p><strong>Jehiel A</strong> applies problem-solving skills to software development challenges.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack with Individual Card Glow - ADD SEO DESCRIPTIONS */}
                    <motion.div
                        className="bg-black border border-gray-900 rounded-2xl p-4 sm:p-6 md:p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="text-center mb-6 sm:mb-8">
                            <h4 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                                <span className="text-orange-500">Tech Stack</span> & Tools
                            </h4>
                            <p className="text-gray-400 text-xs sm:text-sm">Technologies I work with</p>

                            {/* SEO DESCRIPTION */}
                            <div className="hidden" aria-hidden="true">
                                <p><strong>Jehiel A</strong> works with Java, Spring Boot, React, MongoDB, Docker, and other modern technologies.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                            {techStack.map((tech, index) => (
                                <TechCard key={index} tech={tech} index={index} />
                            ))}
                        </div>

                        {/* Additional Info - ADD SEO */}
                        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-900 text-center">
                            <p className="text-gray-400 text-xs sm:text-sm">
                                <span className="text-orange-500 font-semibold">Always Learning</span> • Exploring new technologies and frameworks
                            </p>

                            {/* HIDDEN SEO CONTENT */}
                            <div className="hidden" aria-hidden="true">
                                <p><strong>Jehiel A</strong> continuously updates skills with the latest Java and web technologies.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section with LinkedIn - ADD SEO */}
                    <motion.div
                        className="mt-8 sm:mt-12 space-y-4 sm:space-y-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <a
                                href="#contact"
                                className="bg-orange-500 hover:bg-orange-600 cursor-pointer transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-white hover:scale-105 shadow-lg hover:shadow-orange-500/50 text-sm sm:text-base w-full sm:w-auto text-center"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:scale-105 text-sm sm:text-base w-full sm:w-auto text-center"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Social Links - ADD SEO TEXT */}
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                            <a
                                href="https://www.linkedin.com/in/jehiel06/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 group text-xs sm:text-sm"
                            >
                                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform" />
                                <span className="text-xs sm:text-sm">LinkedIn Profile</span>
                            </a>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 group text-xs sm:text-sm"
                            >
                                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform" />
                                <span className="text-xs sm:text-sm">GitHub Profile</span>
                            </a>
                            <a
                                href="mailto:jehiel.2301116@srec.ac.in"
                                className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 group text-xs sm:text-sm"
                            >
                                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform" />
                                <span className="text-xs sm:text-sm hidden sm:inline">jehiel06.dev@gmail.com</span>
                                <span className="text-xs sm:text-sm inline sm:hidden">Email</span>
                            </a>
                        </div>

                        {/* HIDDEN SEO CONTACT INFO */}
                        <div className="hidden" aria-hidden="true">
                            <h3>Contact Information for Jehiel A</h3>
                            <p>
                                Connect with <strong>Jehiel A</strong> via LinkedIn for professional networking,
                                GitHub to view projects, or email for direct communication. <strong>Jehiel A</strong>
                                is responsive to collaboration opportunities and technical inquiries.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ========== ADD THIS AT THE VERY BOTTOM ========== */}
            {/* Comprehensive SEO section that Google will crawl */}
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
                <h1>Jehiel A - Java Full Stack Developer</h1>
                <h2>About Jehiel A</h2>
                <p>
                    <strong>Jehiel A</strong> is a Computer Science student and Java Full Stack Developer
                    specializing in modern web technologies. With expertise in Java, Spring Boot, React.js,
                    MongoDB, and Docker, <strong>Jehiel A</strong> builds scalable applications and
                    efficient software solutions.
                </p>

                <h2>Jehiel A's Technical Skills</h2>
                <ul>
                    <li>Java Programming Language</li>
                    <li>Spring Boot Framework</li>
                    <li>React.js Library</li>
                    <li>MongoDB Database</li>
                    <li>MySQL Database</li>
                    <li>Docker Containerization</li>
                    <li>Apache Kafka</li>
                    <li>REST API Development</li>
                    <li>Git Version Control</li>
                    <li>Python Programming</li>
                </ul>

                <h2>Jehiel A's Education</h2>
                <p>
                    <strong>Jehiel A</strong> is pursuing a Bachelor of Engineering in Computer Science
                    at Sri Ramakrishna Engineering College, Coimbatore. The curriculum includes data structures,
                    algorithms, software engineering, database management, and web development.
                </p>

                <h2>Projects by Jehiel A</h2>
                <p>
                    <strong>Jehiel A</strong> has developed various projects demonstrating full-stack
                    development skills. These include web applications, REST APIs, database systems,
                    and responsive user interfaces built with Java and modern frameworks.
                </p>

                <h2>Contact Jehiel A</h2>
                <p>
                    For Java development opportunities, project collaborations, or technical discussions,
                    contact <strong>Jehiel A</strong> via LinkedIn or email. <strong>Jehiel A</strong> is
                    available for internships, freelance work, and full-time positions in software development.
                </p>

                <h3>Keywords: Jehiel A, Java Developer, Full Stack Developer, Spring Boot Developer,
                    React Developer, Java Portfolio, Software Engineer, Web Developer,
                    Jehiel A Portfolio, Jehiel A Java</h3>
            </div>
        </section>
    );
};

export default About;