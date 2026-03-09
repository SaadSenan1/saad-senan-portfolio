// src/components/Sidebar.jsx
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import {
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaGlobe
} from "react-icons/fa";

import profileImg from "../assets/profile.jpg";
import "../styles/sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, isArabic, t } = useContext(LanguageContext);
const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - 40,
      behavior: "smooth",
    });
  }

  if (!collapsed) {
    setCollapsed(true); // يغلق السايدبار بالموبايل
  }
};
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className={`hamburger ${!collapsed ? "active" : ""}`}
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* COLLAPSED VIEW */}
      {collapsed && (
        <div className="collapsed-content">
          <img
            src={profileImg}
            alt={t.hero.name}
            className="logo-small"
          />

          <button className="icon-btn" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
<FaGlobe 
  className="language-icon"
  onClick={toggleLanguage}
  title={isArabic ? "English" : "العربية"}
/>
<div onClick={() => scrollToSection("skills")}>
  <FaTools className="menu-icon" title={t.sidebar.skills} />
</div>
<div onClick={() => scrollToSection("projects")}>
  <FaProjectDiagram className="menu-icon" title={t.sidebar.projects} />
</div>

          <div onClick={() => scrollToSection("about")}>
  <FaUser className="menu-icon" title={t.sidebar.about} />
</div>




<div onClick={() => scrollToSection("contact")}>
  <FaEnvelope className="menu-icon" title={t.sidebar.contact} />
</div>


        </div>
      )}

      {/* EXPANDED VIEW */}
      {!collapsed && (
        <div className="expanded-content">
          {/* PROFILE */}
          <div className="profile-expanded">
            <img src={profileImg} alt={t.hero.name} />
            <h3>{t.hero.name}</h3>
            <p>{t.hero.role}</p>
            <p className="tech-stack">{t.hero.role.split("|")[1]?.trim() || "React.js | Vue.js"}</p>
          </div>

          {/* DARK MODE TOGGLE */}
          <div className="glass-toggle">
            <span className="theme-label">
              {theme === "dark" ? t.sidebar.darkMode : t.sidebar.lightMode}
            </span>
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* LANGUAGE BUTTON - GLASS TOGGLE STYLE */}
<div className="glass-toggle">
  <span className="theme-label">
    {isArabic ? "العربية" : "English"}
  </span>

  <label className="switch">
    <input type="checkbox" checked={isArabic} onChange={toggleLanguage} />
    <span className="slider"></span>
  </label>
</div>

         {/* NAVIGATION */}
<div className="nav-icons">
  

  <div className="menu-icon-wrapper" onClick={() => scrollToSection("skills")}>
    <FaTools className="menu-icon" /> {t.sidebar.skills}
  </div>

  <div className="menu-icon-wrapper" onClick={() => scrollToSection("projects")}>
    <FaProjectDiagram className="menu-icon" /> {t.sidebar.projects}
  </div>
<div className="menu-icon-wrapper" onClick={() => scrollToSection("about")}>
    <FaUser className="menu-icon" /> {t.sidebar.about}
  </div>
  <div className="menu-icon-wrapper" onClick={() => scrollToSection("contact")}>
    <FaEnvelope className="menu-icon" /> {t.sidebar.contact}
  </div>

          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;