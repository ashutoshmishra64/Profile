import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="about-container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span>Me</span>
      </motion.h1>

      <motion.p
        className="about-text"
        data-aos="fade-up"
      >
        I am a MERN Stack Developer and Technical Instructor with hands-on experience
        developing scalable web applications, automating ERP systems, and
        mentoring students in full-stack development. I have trained 200+ students
        and successfully delivered enterprise-grade automation projects for
        universities and organizations, improving workflow efficiency by up to 40%.
      </motion.p>

      <div className="about-sections">
        <motion.div
          className="about-box"
          data-aos="zoom-in"
        >
          <h2>Education</h2>
          <ul>
            <li>MCA — IGNOU (2023–2025)</li>
            <li>BCA — IGNOU (2020–2023)</li>
          </ul>
        </motion.div>

        <motion.div
          className="about-box"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h2>Core Strengths</h2>
          <ul>
            <li>Full-stack Web Development (MERN)</li>
            <li>ERP & Automation Workflow Engineering</li>
            <li>API Design, Security & Deployment</li>
            <li>Performance Optimization & Testing</li>
            <li>Real-time projects & Student Mentoring</li>
            <li>Strong communication & team leadership</li>
          </ul>
        </motion.div>

        <motion.div
          className="about-box"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h2>What I Do</h2>
          <ul>
            <li>Build enterprise ERP systems</li>
            <li>Develop scalable web applications</li>
            <li>Train students & teams professionally</li>
            <li>Deploy full-stack projects on cloud</li>
            <li>Write research & technical papers</li>
          </ul>
        </motion.div>
      </div>

      <div className="bottom-highlight" data-aos="fade-up">
        <p>
          Passionate about empowering students and building innovative systems
          that make learning and management more efficient.
        </p>
      </div>
    </section>
  );
};

export default About;
