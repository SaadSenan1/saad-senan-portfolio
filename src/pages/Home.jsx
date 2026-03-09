// src/pages/Home.jsx
import React, { useContext, useEffect } from "react";
import cvFile from "../assets/cv.pdf";
import { TypeAnimation } from "react-type-animation";
import { LanguageContext } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpg";
import project1Img from "../assets/project1.jpg";
import MobileHeader from "../components/MobileHeader";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";
import project4Img from "../assets/project4.jpg";
import project5Img from "../assets/project5.jpg";
import project6Img from "../assets/project6.png";
import project7Img from "../assets/project7.png";
import { FaCode, FaCss3, FaPalette } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";
import { 
  FaDownload, 
  FaArrowRight, 
  FaGithub, 
  FaGitAlt,
  FaReact,
  FaLinkedin, 
  FaEnvelope, 
  FaLaptopCode, 
  FaHome, 
  FaUserCircle,
  FaBirthdayCake,
  FaUniversity,
  FaClock,
  FaUser, 
  FaLanguage,
  FaProjectDiagram,
  FaSun,
  FaMoon,
  FaGlobe,
  FaHtml5,
  FaCss3Alt,
  FaGraduationCap,
  FaWhatsapp,
  FaJs,
  FaServer
} from "react-icons/fa";
import { SiVuedotjs, SiVite, SiVercel, SiNetlify } from "react-icons/si";
import "../styles/home.css";


const Home = () => {
  const { isArabic, t, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
          }
        });
      },
      { threshold: 0.2 }
    );
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
   <MobileHeader />
      <div className="stars"></div>

      <div className={`home-container ${isArabic ? "rtl" : "ltr"}`}>
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="section hero-section">
          <div className="hero-card">
            <span className="open-work">
              <FaLaptopCode style={{ marginRight: '6px', verticalAlign: 'middle', color:'#3b82f6' }} />
              {t.hero.openToWork}
            </span>

            <div className="mobile-profile">
              <img src={profileImg} alt={t.hero.name} />
            </div>

            <h1>
              {t.hero.greeting}{" "}
              <span className="highlight-name">{t.hero.name}</span>
            </h1>

            <p className="role">{t.hero.role}</p>
            <TypeAnimation
  sequence={[
    t.hero.about,
    1000,
  ]}
  wrapper="p"
  speed={50}
  className="about"
  repeat={Infinity}
/>

            <div className="hero-buttons">
              <a
                className="btn resume-btn"
                href={cvFile}
                download="Saad_Senan_CV.pdf"
              >
                <FaDownload /> {t.hero.download}
              </a>

              <button
                className="btn work-btn"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {t.hero.workTogether} <FaArrowRight />
              </button>
            </div>

            <div className="social-icons">
              <a href="https://github.com/saadsenan1" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/saad-senan-a34557374/overlay/1759267629857/single-media-viewer/?profileId=ACoAAFyhRggB8Iee_m2hhthp0CzQQHQbC-fsokI" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:bogamer2006@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </section>

        {/* ================= SKILLS & EXPERTISE SECTION ================= */}
        <section id="skills" className="section skills-section">
          <div className="section-header">
            <h2 className="skills-title">
              <FaLaptopCode style={{ marginRight:'8px', color:'#3b82f6', verticalAlign:'middle' }} />
              {t.skills.title}
            </h2>
          </div>

          <div className="skills-grid">
        {/* ===== Front-end Technologies ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.frontend}</h3>
      <div className="skill-subgrid">
        <div className="skill-subcard">
          <FaHtml5 className="skill-icon" />
          <span>HTML</span>
        </div>

        <div className="skill-subcard">
          <FaCss3Alt className="skill-icon" />
          <span>CSS</span>
        </div>
      </div>
    </div>

    {/* ===== JavaScript & Frameworks ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.javascript}</h3>
      <div className="skill-subgrid">

        <div className="skill-subcard">
          <FaJs className="skill-icon" />
          <span>JavaScript</span>
        </div>

        <div className="skill-subcard">
          <FaReact className="skill-icon" />
          <span>React.js</span>
        </div>

        <div className="skill-subcard">
          <SiVuedotjs className="skill-icon" />
          <span>Vue.js</span>
        </div>

      </div>
    </div>

    {/* ===== Build & Deployment ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.build}</h3>
      <div className="skill-subgrid">

        <div className="skill-subcard">
          <SiVite className="skill-icon" />
          <span>Vite</span>
        </div>

        <div className="skill-subcard">
          <SiVercel className="skill-icon" />
          <span>Vercel</span>
        </div>

        <div className="skill-subcard">
          <SiNetlify className="skill-icon" />
          <span>Netlify</span>
        </div>

      </div>
    </div>

    {/* ===== Workspace & Collaboration ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.workspace}</h3>
      <div className="skill-subgrid">

        <div className="skill-subcard">
          <FaGithub className="skill-icon" />
          <span>GitHub</span>
        </div>

        <div className="skill-subcard">
          <FaGitAlt className="skill-icon" />
          <span>Git</span>
        </div>

      </div>
    </div>

 
    {/* ===== Front-end Technologies ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.frontend}</h3>
      <div className="skill-subgrid">
        <div className="skill-subcard">
          <FaHtml5 className="skill-icon" />
          <span>HTML</span>
        </div>

        <div className="skill-subcard">
          <FaCss3Alt className="skill-icon" />
          <span>CSS</span>
        </div>
      </div>
    </div>

    {/* ===== JavaScript & Frameworks ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.javascript}</h3>
      <div className="skill-subgrid">

        <div className="skill-subcard">
          <FaJs className="skill-icon" />
          <span>JavaScript</span>
        </div>

        <div className="skill-subcard">
          <FaReact className="skill-icon" />
          <span>React.js</span>
        </div>

        <div className="skill-subcard">
          <SiVuedotjs className="skill-icon" />
          <span>Vue.js</span>
        </div>

      </div>
    </div>

    {/* ===== Build & Deployment ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.build}</h3>
      <div className="skill-subgrid">

        <div className="skill-subcard">
          <SiVite className="skill-icon" />
          <span>Vite</span>
        </div>

        <div className="skill-subcard">
          <SiVercel className="skill-icon" />
          <span>Vercel</span>
        </div>

        <div className="skill-subcard"><SiNetlify className="skill-icon" />
          <span>Netlify</span>
        </div>

      </div>
    </div>

    {/* ===== Workspace & Collaboration ===== */}
    <div className="skill-main-card">
      <h3 className="skill-main-title">{t.skills.workspace}</h3>
      <div className="skill-subgrid"><div className="skill-subcard">
          <FaGithub className="skill-icon" />
          <span>GitHub</span>
        </div>

        <div className="skill-subcard">
          <FaGitAlt className="skill-icon" />
          <span>Git</span>
        </div>

      </div>
    </div>

  </div>

        </section>      

       {/* ================= PROJECTS SECTION ================= */}
<section id="projects" className="section projects-section">
  <h2 className="projects-title">
    <FaProjectDiagram style={{ marginRight:'8px', color:'#3b82f6', verticalAlign:'middle' }} />
    {isArabic ? "مشاريعي" : "My Projects"}
  </h2>

  <div className="projects-grid">

   {/* ===== Project 1 ===== */}
   <div className="project-card">
    <div className="project-image">
      <img src={project1Img} alt="Project 1"/>
    </div>
    <div className="project-content">
      <h3 className="project-name">
        {isArabic ? "Nexora — تجربة بورتفوليو عصرية" : "Nexora — Modern Portfolio Experience"}
      </h3>
      <p className="project-description">
        {isArabic
          ? "موقع بورتفوليو حديث ومتجاوب مبني باستخدام React مع تصميم Glassmorphism عصري."
          : "A sleek, responsive portfolio website built with React, featuring glassmorphism UI."}
      </p>
      <div className="project-tools">
        <span className="tool"><FaReact /> React</span>
        <span className="tool"><FaJs /> JavaScript</span>
        <span className="tool"><FaCss3Alt /> CSS</span>
      </div>
      <div className="project-buttons">
        <a href="https://saadsenan1.github.io/nexora-live/" target="_blank" className="btn-demo">
          <FaArrowRight /> {isArabic ? "عرض المشروع" : "Live Demo"}
        </a>
        <a href="https://github.com/SaadSenan1/nexora" target="_blank" className="btn-code">
          <FaGithub /> {isArabic ? "الكود" : "Code"}
        </a>
      </div>
    </div>
   </div>

   {/* ===== Project 2 ===== */}
   <div className="project-card">
    <div className="project-image">
      <img src={project6Img} alt="Project 2"/>
    </div>
    <div className="project-content">
      <h3 className="project-name">
        {isArabic ? "TradePro – لوحة تداول تفاعلية" : "TradePro – Interactive Trading Dashboard"}
      </h3>
      <p className="project-description">
        {isArabic
          ? "واجهة موقع تداول متقدمة تتميز بتصميم حديث ومتجاوب."
          : "A cutting-edge trading website interface featuring a responsive design."}
      </p>
      <div className="project-tools">
        <span className="tool"><FaReact /> React</span>
        <span className="tool"><FaCss3Alt /> CSS</span>
        <span className="tool"><FaJs /> JavaScript</span>
      </div>
      <div className="project-buttons">
        <a href=" https://saadsenan1.github.io/trading-pro-live/" target="_blank" className="btn-demo">
          <FaArrowRight /> {isArabic ? "عرض المشروع" : "Live Demo"}
        </a>
        <a href="https://github.com/SaadSenan1/trading-pro-code" target="_blank" className="btn-code">
          <FaGithub /> {isArabic ? "الكود" : "Code"}
        </a>
      </div>
    </div>
   </div>

   {/* ===== Project 3 ===== */}
   <div className="project-card">
    <div className="project-image">
      <img src={project7Img} alt="Project 3"/>
    </div>
    <div className="project-content">
      <h3 className="project-name">
        {isArabic ? "Tradedamas – منصة اختبار استراتيجيات التداول" : "Tradedamas – Backtesting Platform"}
      </h3>
      <p className="project-description">
        {isArabic
          ? "منصة حديثة لاختبار استراتيجيات التداول مبنية باستخدام React."
          : "Modern Trading Backtest platform built with React."}
      </p>
      <div className="project-tools">
        <span className="tool"><FaReact /> React</span>
        <span className="tool"><FaJs /> JavaScript</span>
        <span className="tool"><FaCss3Alt /> CSS</span>
      </div>
      <div className="project-buttons">
        <a href="https://trade-damas-live-vercel.vercel.app/" target="_blank" className="btn-demo">
          <FaArrowRight /> {isArabic ? "عرض المشروع" : "Live Demo"}
        </a>
        <a href="https://github.com/SaadSenan1/trade-damas-live-vercel" target="_blank" className="btn-code">
          <FaGithub /> {isArabic ? "الكود" : "Code"}
        </a>
      </div>
    </div>
   </div>

   {/* ===== Project 4 ===== */}
   <div className="project-card"><div className="project-image">
      <img src={project4Img} alt="Project 4"/>
    </div>
    <div className="project-content">
      <h3 className="project-name">
        {isArabic ? "City Vape- متجر تسوق الكتروني" : "E-commerce Platform"}
      </h3>
      <p className="project-description">
        {isArabic
          ? "منصة تجارة إلكترونية حديثة بتصميم أنيق ومتجاوب."
          : "A modern e-commerce platform with a sleek, responsive design"}
      </p>
      <div className="project-tools">
        <span className="tool"><FaHtml5 /> HTML</span>
        <span className="tool"><FaJs /> JavaScript</span>
        <span className="tool"><FaCss3Alt /> CSS</span>
      </div>
      <div className="project-buttons">
        <a href="https://cityvapesy.com/" target="_blank" className="btn-demo">
          <FaArrowRight /> {isArabic ? "عرض المشروع" : "Live Demo"}
        </a>
      </div>
    </div>
   </div>

   {/* ===== Project 5 ===== */}
   <div className="project-card">
    <div className="project-image">
      <img src={project3Img} alt="Project 5"/>
    </div>
    <div className="project-content">
      <h3 className="project-name">
        {isArabic ? "QuickBite – تطبيق طلب الطعام" : "QuickBite-Food ordering Web App"}
      </h3>
      <p className="project-description">
        {isArabic
          ? "تطبيق ويب لطلب الطعام مبني باستخدام Vue.js."
          : "A food ordering web app built with Vue.js"}
      </p>
      <div className="project-tools">
        <span className="tool"><FaVuejs /> Vue</span>
        <span className="tool"><FaJs /> JavaScript</span>
      </div>
      <div className="project-buttons">
        <a href="https://saadsenan1.github.io/food2/" target="_blank" className="btn-demo">
          <FaArrowRight /> {isArabic ? "عرض المشروع" : "Live Demo"}
        </a>
        <a href="https://github.com/SaadSenan1/foodrepo.git" target="_blank" className="btn-code">
          <FaGithub /> {isArabic ? "الكود" : "Code"}
        </a>
      </div>
    </div>
   </div>

   {/* ===== Project 6 ===== */}
   <div className="project-card">
    <div className="project-image">
      <img src={project5Img} alt="Project 5"/>
    </div>
    <div className="project-content">
      <h3 className="project-name">
        {isArabic ? "معرض اعمال - سعد" : "Saad - Portfolio"}
      </h3>
      <p className="project-description">
        {isArabic
          ? "موقع بورتفوليو حديث مبني باستخدام React مع تصميم متجاوب."
          : "Modern Portfolio Website with React.js, Responsive Design."}
      </p>
      <div className="project-tools">
        <span className="tool"><FaReact /> React</span>
        <span className="tool"><FaCss3Alt />CSS</span>
        <span className="tool"><FaJs /> JavaScript</span>
      </div>
      <div className="project-buttons">
        <a href="#" className="btn-demo">
          <FaArrowRight /> {isArabic ? "عرض المشروع" : "Live Demo"}
        </a>
        <a href="#" className="btn-code">
          <FaGithub /> {isArabic ? "الكود" : "Code"}
        </a>
      </div>
    </div>
   </div>

  </div>
</section>
        <div className="view-all-projects">
  <a 
    href="https://github.com/saadsenan1" 
    target="_blank" 
    rel="noopener noreferrer"
    className="view-all-btn"
  >
    <FaGithub className="btn-icon" />
    {isArabic ? "عرض كل المشاريع على GitHub" : "View all projects in GitHub"}
    <FaArrowRight className="btn-arrow" />
  </a>
</div>
<section id="about" className="section about-section">

  <h2 className="section-title">
    <FaUser className="about-icon"/>
    {isArabic ? "عنّي" : "About Me"}
  </h2>

  <div className="about-container">

    <p className="about-text">
      {isArabic ? (
        <>
          مرحباً، أنا <strong>سعد سنان</strong>، مطور 
          <strong> Front-End </strong>
          من سوريا أدرس هندسة الحاسوب.
          أمتلك خبرة تقارب <strong>ستة أشهر</strong> في تطوير الواجهات
          باستخدام التقنيات الحديثة مثل
          <strong> JavaScript</strong> و
          <strong> React</strong> و
          <strong> Vue</strong> بالإضافة إلى
          <strong> Vanilla JavaScript</strong>.
          أركز على بناء واجهات احترافية وسريعة الاستجابة
          باستخدام <strong>HTML</strong> و<strong>CSS</strong> مع
          اهتمام كبير بتجربة المستخدم
          <strong> UI / UX</strong>.
          هدفي هو إنشاء مواقع وتطبيقات ويب نظيفة وسريعة
          وسهلة الاستخدام مع كود منظم وقابل للتطوير.
        </>
      ) : (
        <>
          Hello, my name is <strong>Saad Senan</strong>.  
          I am a <strong>Front-End Developer</strong> from Syria
          and a Computer Engineering student.
          
          I have around <strong>six months of experience</strong>
          building modern web interfaces using
          <strong> JavaScript</strong>,
          <strong> React</strong>,
          <strong> Vue</strong>,
          and <strong>Vanilla JavaScript</strong>.
          
          I specialize in creating responsive and visually
          appealing interfaces using
          <strong> HTML</strong> and
          <strong> CSS</strong> while focusing on
          <strong> UI/UX design</strong> and clean,
          maintainable code.
          
          I am passionate about improving my skills,
          building high-quality web applications,
          and delivering professional user experiences.
        </>
      )}
    </p>

    <div className="about-skills">

      <div className="about-skill">
        <FaCode />
        <span>JavaScript</span>
      </div>

      <div className="about-skill">
        <FaReact />
        <span>React</span>
      </div>

      <div className="about-skill">
        <FaVuejs />
        <span>Vue</span>
      </div>

      <div className="about-skill">
        <FaPalette />
        <span>UI / UX</span>
      </div>

    </div>

  </div>

</section>
<section id="contact" className="section contact-section">

  <h2 className="section-title">
    <FaEnvelope className="contact-icon"/>
    {isArabic ? "تواصل معي" : "Contact Me"}
  </h2>

  <div className="contact-container">

    <p className="contact-text">
      {isArabic ? (
        <>
          إذا كنت مهتماً بالتعاون أو لديك مشروع تريد تنفيذه،
          لا تتردد في التواصل معي. أنا دائماً منفتح على
          الفرص الجديدة والعمل على مشاريع مميزة في مجال
          تطوير الواجهات.
        </>
      ) : (
        <>
          If you are interested in collaboration or have a
          project in mind, feel free to contact me.
          I am always open to new opportunities and
          exciting front-end development projects.
        </>
      )}
    </p>

    <div className="contact-links">

      <a href="mailto:bogamer2006@gmail.com" className="contact-card">
        <FaEnvelope/>
        <span>Email</span>
      </a>

      <a href="https://wa.me/0980562304" className="contact-card">
        <FaWhatsapp/>
        <span>WhatsApp</span>
      </a>

      <a href="https://github.com/saadsenan1" className="contact-card">
        <FaGithub/>
        <span>GitHub</span>
      </a>

      <a href="https://www.linkedin.com/in/saad-senan-a34557374/overlay/1759267629857/single-media-viewer/?profileId=ACoAAFyhRggB8Iee_m2hhthp0CzQQHQbC-fsokI" className="contact-card">
        <FaLinkedin/>
        <span>LinkedIn</span>
      </a>

    </div>

  </div>

</section>

        <div className="bg-glow glow1"></div>
        <div className="bg-glow glow2"></div>
        <div className="bg-glow glow3"></div>
      </div>

    </>
  );
};

export default Home;