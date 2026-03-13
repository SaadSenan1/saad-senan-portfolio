import React, { useContext } from "react";
import "../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {

  const { isArabic } = useContext(LanguageContext);

  return (
    <footer className={`footer ${isArabic ? "rtl" : ""}`}>

      <div className="footer-container">

        {/* Logo + description */}
        <div className="footer-col">

          <h2 className="footer-logo">Saad</h2>

          <p className="footer-text">
            {isArabic
              ? "مطور واجهات حديثة أصمم مواقع سريعة وجذابة."
              : "Modern frontend developer creating fast and elegant web experiences."}
          </p>

        </div>

        {/* Navigation */}
        <div className="footer-col">

          <h3>
            {isArabic ? "التصفح" : "Navigation"}
          </h3>

          <a href="#home">{isArabic ? "الرئيسية" : "Home"}</a>
          <a href="#about">{isArabic ? "من أنا" : "About"}</a>
          <a href="#projects">{isArabic ? "المشاريع" : "Projects"}</a>
          <a href="#contact">{isArabic ? "تواصل" : "Contact"}</a>

        </div>

        {/* Contact */}
        <div className="footer-col">

          <h3>
            {isArabic ? "تواصل" : "Contact"}
          </h3>

          <p>Email</p>

          <div className="footer-social">

            <a href="https://github.com/saadsenan1"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/saad-senan-a34557374/overlay/1759267629857/single-media-viewer/?profileId=ACoAAFyhRggB8Iee_m2hhthp0CzQQHQbC-fsokI"><FaLinkedin/></a>
           
            <a href="mailto:saadsinan06@hotmail.com"><FaEnvelope/></a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Saad. 
          {isArabic
            ? " جميع الحقوق محفوظة."
            : " All rights reserved."}
        </p>

      </div>

    </footer>
  );
};

export default Footer;