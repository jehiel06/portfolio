import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJava,
  FaReact,
  FaDatabase,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaCloud
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiDialogflow,
  SiContactlesspayment,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiKubernetes,
  SiApachekafka
} from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Movie Ticket Booking Chatbot",
      description: "A full-stack movie ticket booking platform with real-time ticket booking, and responsive chatbot. Built with microservices architecture.",
      technologies: ["Java", "Spring Boot", "React.js", "MongoDB", "DialogFlow", "Docker"],
      icons: [<FaJava />, <SiSpringboot />, <FaReact />, <SiMongodb />, <SiDialogflow />, <SiContactlesspayment />],
      github: "https://github.com/yourusername/event-https://github.com/jehiel06/movie-ticket-booking-chatbot",
      live: "https://movie-ticket-booking-chatbot.vercel.app",
      category: "fullstack",
      status: "completed",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Music Platform",
      description: "A simple music platform website built using HTML, CSS, and JavaScript that allows users to play and control music through an interactive and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/jehiel06/Music-Platform",
      live: "https://jehiel06.github.io/Music-Platform",
      category: "frontend",
      status: "completed",
      image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "NexVerify Intern Project",
      description: "NexVerify is a backend-focused intern project developed using Java Spring Boot and PostgreSQL. The project is designed to handle secure data verification and backend operations, including RESTful APIs, database integration, and business logic implementation. The application is currently under active development.",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
      icons: [<FaJava />, <SiSpringboot />, <SiPostgresql />],
      github: "https://github.com/jehiel06/nexverify-project",
      live: "",
      category: "backend",
      status: "in-progress",
      image: ""
    },
    {
      id: 4,
      title: "Simple Calculator",
      description: "A simple calculator made using HTML, CSS, and JavaScript that performs basic arithmetic operations with a clean and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/jehiel06/Calculator",
      live: "https://jehiel06.github.io/Calculator/",
      category: "frontend",
      status: "completed",
      image: "https://plus.unsplash.com/premium_photo-1726736475597-0793f5754bbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Stone Paper Scissors",
      description: "A fun Stone Paper Scissors game developed using HTML, CSS, and JavaScript where users can play against the computer with an interactive and responsive interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/jehiel06/game",
      live: "https://jehiel06.github.io/game/",
      category: "frontend",
      status: "completed",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="group relative bg-black border border-gray-900 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'completed'
        ? 'bg-green-900/30 text-green-400 border border-green-700/50'
        : 'bg-yellow-900/30 text-yellow-400 border border-yellow-700/50'
        }`}>
        {project.status === 'completed' ? 'Completed' : 'In Progress'}
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-900/50 text-gray-300 text-xs rounded-full border border-gray-800 hover:border-orange-500/50 hover:text-orange-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-3 mb-6">
          {project.icons.map((Icon, idx) => (
            <div
              key={idx}
              className="text-gray-400 text-xl hover:text-orange-500 hover:scale-125 transition-all duration-300"
            >
              {Icon}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 group/btn"
          >
            <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 group/btn"
            >
              <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="min-h-screen bg-black py-20">
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
            My <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent work. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-orange-500 text-4xl font-bold mb-2">8+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-4xl font-bold mb-2">15+</div>
            <div className="text-gray-400 text-sm">Technologies Used</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-4xl font-bold mb-2">100%</div>
            <div className="text-gray-400 text-sm">Code Quality</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-4xl font-bold mb-2">5K+</div>
            <div className="text-gray-400 text-sm">Lines of Code</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Interested in collaborating or have a project in mind?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/50"
          >
            <FaCode className="w-5 h-5" />
            Let's Build Something Amazing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;