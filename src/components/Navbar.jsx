import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "../styles/navbar.css";
import "aos/dist/aos.css";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar">
      <div className="logo">Ashutosh<span>Mishra</span></div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={()=>setMenuOpen(false)}>About</Link></li>
        <li><Link to="/skills" onClick={()=>setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/experience" onClick={()=>setMenuOpen(false)}>Experience</Link></li>
        <li><Link to="/projects" onClick={()=>setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link></li>
      </ul>

      <div className="right-side">
        <button className="theme-btn" onClick={toggleTheme}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
