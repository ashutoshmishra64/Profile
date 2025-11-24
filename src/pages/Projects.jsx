import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/projects.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "University ERP Automation System",
      description: "Developed ERP modules for admissions, attendance, payroll & grade automation reducing workflow time by 40%.",
      tech: "React, Laravel (PHP), MySQL",
      live: "#",
      github: "#"
    },
    {
      title: "QR-based Attendance System",
      description: "Python/Django + React Native app enabling students to scan QR to mark attendance reducing roll-call time by 70%.",
      tech: "Python, Django, React Native, SQLite",
      live: "#",
      github: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Chat app with typing status, online users list & WebSocket backend supporting 500+ users.",
      tech: "Node.js, WebSockets, MongoDB",
      live: "#",
      github: "#"
    },
    {
      title: "E-Learning LMS Website",
      description: "Modern LMS with video courses, notes, teacher & student dashboards, and certificate generation.",
      tech: "MERN Stack",
      live: "#",
      github: "#"
    }
  ];

  return (
    <section className="projects-container">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Featured <span>Projects</span>
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay={`${index * 120}`}
            whileHover={{ scale: 1.07 }}
            onClick={() => setSelectedProject(project)}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <h4>Tech Used: {selectedProject.tech}</h4>

            <div className="modal-buttons">
              <a href={selectedProject.live} className="btn primary" target="_blank">Live Demo</a>
              <a href={selectedProject.github} className="btn secondary" target="_blank">GitHub</a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
