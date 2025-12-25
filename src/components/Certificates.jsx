import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCertificate,
    FaCalendarAlt,
    FaExternalLinkAlt,
    FaGraduationCap,
    FaCode,
    FaServer,
    FaPython,
    FaJava,
    FaUniversity,
} from 'react-icons/fa';

import {
    SiSalesforce,
    SiSpringboot,
} from 'react-icons/si';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: "Full Stack Java Training",
            issuer: "LiveTech",
            date: "Sep 2025",
            skills: ["Advanced Java", "Spring", "Spring Boot", "MySQL", "React js", "Tailwind"],
            icon: <FaJava />,
            link: "https://drive.google.com/file/d/1yxoEqEV3w4cNCkhiIyWpBgx8uxjzzN_l/view?usp=drive_link",
            color: "border-l-orange-500"
        },
        {
            id: 2,
            title: "Java Full Stack",
            issuer: "Wise TechSource Pvt. Ltd.",
            date: "Sep 2024",
            skills: ["Core Java", "Spring Boot", "JPA", "Hibernate", "H2"],
            icon: <FaJava />,
            link: "https://www.linkedin.com/posts/jehiel06_java-fsd-certificate-activity-7241806538951008256-3ZHc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbPEikBZgQ3qNh-tC91LdIRMWjsyNPX7PM",
            color: "border-l-blue-500"
        },
        {
            id: 3,
            title: "Advanced Java Programming",
            issuer: "LinkedIn",
            date: "Aug 2024",
            skills: ["Java", "Exception Handling", "Multithreading", "Collections Framework", "Generics"],
            icon: <FaJava />,
            link: "https://www.linkedin.com/learning/certificates/2107bf558aa06eabe4894bec535d88acbbca768e16fdc9d53405ef7167543afe",
            color: "border-l-white"
        },
        {
            id: 4,
            title: "Programming using Java",
            issuer: "Infosys Springboard",
            date: "April 2025",
            skills: ["Core Java", "Object-Oriented Programming (OOP)", "Methods & Constructors", "Arrays & Strings"],
            icon: <FaJava />,
            link: "https://drive.google.com/file/d/1-LgvC8lavW47VA5oY7JP4RPid7QPgGCc/view?usp=drive_link",
            color: "border-l-green-500"
        },
        {
            id: 5,
            title: "Building Full-Stack Apps with React and Spring",
            issuer: "LinkedIn",
            date: "Aug 2024",
            skills: ["Spring Framework", "Spring Boot", "React.js"],
            icon: <SiSpringboot />,
            link: "https://www.linkedin.com/learning/certificates/70b46a24daf3f08a5fd737c5754b212b7777ac9ee31831ed44d46801d13f3596",
            color: "border-l-red-500"
        },
        {
            id: 6,
            title: "Advanced Diploma in Java Programming (ADJP)",
            issuer: "CSC Computer Education (P) Ltd",
            date: "Sep 2023",
            skills: ["C (Programming Language)", "C++", "Java", "Servlets", "HTML5", "Cascading Style Sheets (CSS)"],
            icon: <FaCode />,
            link: "https://drive.google.com/file/d/1Ih7y4cGGeSjakAGJp4o1tRNywOHza2Ta/view?usp=drive_link",
            color: "border-l-yellow-500"
        },
        {
            id: 7,
            title: "Cyber Security and Privacy",
            issuer: "NPTEL",
            date: "Oct 2025",
            skills: [
                "Cyber Security Fundamentals",
                "Privacy Protection",
                "Cryptography Basics",
                "Network Security",
                "Malware & Threat Analysis",
                "Secure Communication"
            ],
            icon: <FaUniversity />,
            link: "https://drive.google.com/file/d/1eC7detbmJW1mSN4DO6923y288rBZRmmI/view?usp=drive_link",
            color: "border-l-purple-500"
        },
        {
            id: 8,
            title: "Privacy and Security in Online Social Media",
            issuer: "NPTEL",
            date: "April 2025",
            skills: [
                "Online Privacy Protection",
                "Social Media Security",
                "Data Protection & Privacy",
                "Cyber Threats in Social Platforms",
                "User Behavior & Privacy Risks"
            ],
            icon: <FaUniversity />,
            link: "https://drive.google.com/file/d/1khhMF77hJWID91sbHjJd6Mr2QzYO7t8A/view?usp=drive_link",
            color: "border-l-white"
        },
        {
            id: 9,
            title: "Superbadge: Agentforce Service",
            issuer: "Salesforce",
            date: "June 2025",
            skills: ["Topic & Action Configuration", "Einstein Agent Setup & Deployment", "Service Process Automation"],
            icon: <SiSalesforce />,
            link: "https://www.salesforce.com/trailblazer/jehiel06",
            color: "border-l-green-500"
        },
        {
            id: 10,
            title: "Superbadge: Prompt Builder Templates",
            issuer: "Salesforce",
            date: "Jun 2025",
            skills: ["Prompt Template Development", "Template Testing & Iteration", "Integration with Salesforce Automation"],
            icon: <SiSalesforce />,
            link: "https://www.salesforce.com/trailblazer/jehiel06",
            color: "border-l-white"
        },
        {
            id: 11,
            title: "Certificate Course in Python (CCP)",
            issuer: "CSC Computer Education (P) Ltd",
            date: "June 2023",
            skills: ["Python", "Functions", "Modules", "Packages", "OOPS", "File IO"],
            icon: <FaPython />,
            link: "https://drive.google.com/file/d/1Ih7y4cGGeSjakAGJp4o1tRNywOHza2Ta/view?usp=drive_link",
            color: "border-l-blue-500"
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