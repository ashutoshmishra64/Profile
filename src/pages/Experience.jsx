import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const jobs = [
    {
      role: "Lecturer, Developer, Research Contributor",
      company: "Avviare Educational Hub | Noida, U.P.",
      period: "July 2025 – Present",
      details: "Educating 200+ students in MERN, Cloud Computing, and AI. Guiding them to build deployable real-world projects."
    },
    {
      role: "Lecturer, Full Stack Developer",
      company: "Haridwar University | Roorkee",
      period: "August 2024 – June 2025",
      details: "Developed ERP modules for attendance & grade management reducing workload by 40%. Published research in IJSREM."
    },
    {
      role: "Full Stack Developer",
      company: "BSA Tech | Allahabad",
      period: "October 2022 – August 2024",
      details: "Built ERP workflows using Laravel & React. Implemented authentication, dashboards, payroll automation."
    },
    {
      role: "IT Trainer, Developer",
      company: "NSIC | Okhla, New Delhi",
      period: "February 2024 – July 2024",
      details: "Trained students in MERN & deployment with real-time project execution."
    },
    {
      role: "IT Trainer",
      company: "APTECH Institute | Faridabad",
      period: "May 2023 – August 2024",
      details: "Trained 50+ students in Java, PHP & Python improving coding confidence & placements."
    }
  ];

  return (
    <section className="exp-container">
      <motion.h1
        className="exp-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Work <span>Experience</span>
      </motion.h1>

      <div className="timeline">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            data-aos="fade-up"
            whileHover={{ scale: 1.03 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{job.role}</h2>
              <h3>{job.company}</h3>
              <span className="period">{job.period}</span>
              <p>{job.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
