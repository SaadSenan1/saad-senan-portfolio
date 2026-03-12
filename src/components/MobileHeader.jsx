// src/components/MobileHeader.jsx
import React, { useContext } from "react";
import { FaHome, FaLaptopCode, FaProjectDiagram, FaUser, FaEnvelope, FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/MobileHeader.css";

const MobileHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isArabic, toggleLanguage } = useContext(LanguageContext);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mobile-header">
      <button className="mobile-nav-item" onClick={() => scrollTo("home")}>
        <FaHome className="nav-icon" />
        <span className="nav-label">{isArabic ? "الرئيسية" : "Home"}</span>
      </button>

      <button className="mobile-nav-item" onClick={() => scrollTo("skills")}>
        <FaLaptopCode className="nav-icon" />
        <span className="nav-label">{isArabic ? "المهارات" : "Skills"}</span>
      </button>

      <button className="mobile-nav-item" onClick={() => scrollTo("projects")}>
        <FaProjectDiagram className="nav-icon" />
        <span className="nav-label">{isArabic ? "مشاريع" : "Projects"}</span>
      </button>

      <button className="mobile-nav-item" onClick={() => scrollTo("about")}>
        <FaUser className="nav-icon" />
        <span className="nav-label">{isArabic ? "عنّي" : "About"}</span>
      </button>

      <button className="mobile-nav-item" onClick={() => scrollTo("contact")}>
        <FaEnvelope className="nav-icon" />
        <span className="nav-label">{isArabic ? "تواصل" : "Contact"}</span>
      </button>

      <button className="mobile-nav-item mode-toggle" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun className="nav-icon" /> : <FaMoon className="nav-icon" />}
        <span className="nav-label">{theme === "dark" ? "Light" : "Dark"}</span>
      </button>

      <button className="mobile-nav-item" onClick={toggleLanguage}>
        <FaGlobe className="nav-icon" />
        <span className="nav-label">{isArabic ? "EN" : "عربي"}</span>
      </button>
    </nav>
  );
};

export default MobileHeader;