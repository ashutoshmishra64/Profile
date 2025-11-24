import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home-title"
      >
        Hi, I'm <span>Ashutosh Mishra</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="home-role"
      >
        Full Stack Developer | MERN Instructor | Research Contributor
      </motion.h2>

      <p className="home-summary" data-aos="fade-up">
        Experienced MERN Stack Developer and Technical Instructor skilled in building scalable web apps,
        automating ERP systems, and training 200+ students in modern technologies. Strong background in
        end-to-end project delivery, real-time deployment, and academic research in AI and automation.
      </p>

      <motion.div
        className="home-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="https://drive.google.com/file/d/1TVhOzVZ6CIzM8_bk0jXqIh_nACuGyI5H/view?usp=sharing" download className="btn primary" target="_blank">Download Resume</a>
        <a href="/projects" className="btn secondary">View Projects</a>
      </motion.div>

      <div className="stats-container">
        <div className="stat-card" data-aos="zoom-in">
          <h3>200+</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
          <h3>15+</h3>
          <p>Freelance Websites Delivered</p>
        </div>
        <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
          <h3>6+</h3>
          <p>Enterprise Projects Developed</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
