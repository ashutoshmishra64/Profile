import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";

import { FaWhatsapp, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="contact-container">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact <span>Me</span>
      </motion.h1>

      <motion.p
        className="contact-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Let's build something amazing together 🚀
      </motion.p>

      <div className="contact-grid">
        <motion.a
          href="mailto:ashutoshmishra4658@gmail.com"
          className="contact-card"
          data-aos="zoom-in"
          whileHover={{ scale: 1.07 }}
        >
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>ashutoshmishra4658@gmail.com</p>
        </motion.a>

        <motion.a
          href="https://wa.me/+917048968027"
          target="_blank"
          className="contact-card"
          data-aos="zoom-in"
          data-aos-delay="200"
          whileHover={{ scale: 1.07 }}
        >
          <FaWhatsapp className="icon" />
          <h3>WhatsApp</h3>
          <p>+91 7048968027</p>
        </motion.a>

        <motion.div
          className="contact-card"
          data-aos="zoom-in"
          data-aos-delay="400"
          whileHover={{ scale: 1.07 }}
        >
          <FaLocationDot className="icon" />
          <h3>Location</h3>
          <p>Faridabad, Haryana, India</p>
        </motion.div>

        <motion.div
          className="contact-card"
          data-aos="zoom-in"
          data-aos-delay="600"
          whileHover={{ scale: 1.07 }}
        >
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+91 7048968027</p>
        </motion.div>
      </div>

      <motion.div
        className="thank-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h4>Available for remote & onsite opportunities ✨</h4>
      </motion.div>
    </section>
  );
};

export default Contact;
