import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/skills.css";

// React Icons Imports
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaDatabase, FaBootstrap, FaGitAlt, FaAws } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiRedux, SiTailwindcss, SiDocker, SiPostman } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const skillSet = [
    { icon: <FaReact />, label: "React.js" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <SiRedux />, label: "Redux" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <FaDatabase />, label: "DBMS / SQL" },
    { icon: <FaGitAlt />, label: "Git / GitHub" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <FaAws />, label: "AWS (Basics)" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <FaPython />, label: "Python" },
    { icon: <FaPhp />, label: "PHP" }
  ];

  return (
    <section className="skills-container">
      <motion.h1
        className="skills-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Technical <span>Skills</span>
      </motion.h1>

      <div className="skills-grid">
        {skillSet.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            data-aos="zoom-in"
            data-aos-delay={`${index * 70}`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="icon">{skill.icon}</div>
            <p>{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
