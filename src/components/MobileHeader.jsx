import React, { useContext } from "react";
import "../styles/MobileHeader.css";

import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const MobileHeader = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isArabic, toggleLanguage } = useContext(LanguageContext);

  return (

    <header className={`mobile-header ${isArabic ? "rtl" : ""}`}>

      {/* Logo */}
      <div className="mobile-logo">
        {isArabic ? "مرحباً بكم في معرض أعمالي" : "Welcome To My Portfolio"}
      </div>

      {/* Actions */}
      <div className="mobile-actions">

        <button
          className="mobile-btn"
          onClick={toggleLanguage}
        >
          <FaGlobe/>
        </button>

        <button
          className="mobile-btn"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FaSun/> : <FaMoon/>}
        </button>

      </div>

    </header>

  );

};

export default MobileHeader;