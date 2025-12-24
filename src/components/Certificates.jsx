import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCertificate,
    FaCalendarAlt,
    FaExternalLinkAlt,
    FaGraduationCap,
    FaCode,
    FaServer,
    FaCloud
} from 'react-icons/fa';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: "Java Programming Masterclass",
            issuer: "Udemy",
            date: "2024",
            skills: ["Java", "OOP", "Data Structures", "Algorithms"],
            icon: <FaCode />,
            link: "https://udemy.com/certificate/example",
            color: "border-l-orange-500"
        },
        {
            id: 2,
            title: "Spring Boot & Microservices",
            issuer: "Coursera",
            date: "2023",
            skills: ["Spring Boot", "Microservices", "Docker", "REST APIs"],
            icon: <FaServer />,
            link: "https://coursera.org/certificate/example",
            color: "border-l-green-500"
        },
        {
            id: 3,
            title: "React.js Frontend Development",
            issuer: "freeCodeCamp",
            date: "2023",
            skills: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"],
            icon: <FaCode />,
            link: "https://freecodecamp.org/certification/example",
            color: "border-l-cyan-500"
        },
        {
            id: 4,
            title: "Cloud Computing Fundamentals",
            issuer: "Google Cloud",
            date: "2023",
            skills: ["Cloud Computing", "AWS Basics", "Deployment", "Security"],
            icon: <FaCloud />,
            link: "https://cloud.google.com/certification/example",
            color: "border-l-blue-500"
        },
        {
            id: 5,
            title: "Full Stack Web Development",
            issuer: "SREC",
            date: "2023",
            skills: ["MERN Stack", "Git", "Deployment", "Best Practices"],
            icon: <FaGraduationCap />,
            link: "#",
            color: "border-l-purple-500"
        },
        {
            id: 6,
            title: "Problem Solving (Advanced)",
            issuer: "HackerRank",
            date: "2023",
            skills: ["Algorithms", "Data Structures", "Problem Solving"],
            icon: <FaCode />,
            link: "https://hackerrank.com/certificate/example",
            color: "border-l-red-500"
        }
    ];

    const CertificateCard = ({ cert, index }) => (
        <motion.div
            className={`bg-black border border-gray-900 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${cert.color} border-l-4`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="text-orange-500 text-3xl">
                    {cert.icon}
                </div>
                <span className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full">
                    {cert.date}
                </span>
            </div>

            <h3 className="text-white text-xl font-bold mb-2 hover:text-orange-500 transition-colors cursor-pointer">
                {cert.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <FaCertificate className="w-4 h-4" />
                <span>Issued by {cert.issuer}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 bg-gray-900/50 text-gray-300 text-xs rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {cert.link && (
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors group"
                >
                    View Certificate
                    <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
            )}
        </motion.div>
    );

    return (
        <section id="certificates" className="min-h-screen bg-black py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl sm:text-6xl text-orange-500 font-bold mb-4">
                        Certifications & <span className="text-white">Achievements</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Validating my skills through recognized certifications and continuous learning.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    className="mt-16 bg-black border border-gray-900 rounded-2xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-orange-500 text-4xl font-bold mb-2">10+</div>
                            <div className="text-gray-400 text-sm">Certifications</div>
                        </div>
                        <div className="text-center">
                            <div className="text-orange-500 text-4xl font-bold mb-2">500+</div>
                            <div className="text-gray-400 text-sm">Hours of Learning</div>
                        </div>
                        <div className="text-center">
                            <div className="text-orange-500 text-4xl font-bold mb-2">100%</div>
                            <div className="text-gray-400 text-sm">Completion Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-orange-500 text-4xl font-bold mb-2">4.8/5</div>
                            <div className="text-gray-400 text-sm">Average Rating</div>
                        </div>
                    </div>
                </motion.div>

                {/* Learning Philosophy */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3 className="text-white text-2xl font-bold mb-4">
                        Continuous Learning Journey
                    </h3>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        I believe in lifelong learning and regularly update my skills through online courses,
                        documentation reading, and hands-on projects. Each certification represents not just
                        a credential, but a commitment to mastering new technologies and best practices.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;