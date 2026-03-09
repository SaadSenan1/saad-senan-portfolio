// src/context/LanguageContext.jsx
import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
  en: {
    hero: {
      openToWork: "Open to remote",
      greeting: "Hi, I’m",
      name: "Saad Senan",
      role: "IT Engineer crafting high-performance front-end systems.",
      about:
        "Passionate about crafting high-quality, responsive, and modern web applications. Always eager to learn new technologies and take on challenging projects that make a real impact.",
      download: "Download Resume",
      workTogether: "Let's work together",
    },

    sidebar: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      language: "Language",
    },

    skills: {
      title: "Skills & Expertise",
      subtitle: "My technical expertise",

      frontend: "Front-end Technologies",
      javascript: "JavaScript & Frameworks",
      build: "Build & Deployment",
      workspace: "Workspace & Collaboration",

      categories: [
        {
          title: "Frontend",
          items: [
            { name: "React.js", level: 90 },
            { name: "Vue.js", level: 85 },
            { name: "JavaScript", level: 95 },
            { name: "HTML & CSS", level: 95 },
          ],
        },
        {
          title: "Backend",
          items: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 75 },
            { name: "MongoDB", level: 70 },
          ],
        },
        {
          title: "Tools & Others",
          items: [
            { name: "Git & GitHub", level: 90 },
            { name: "Webpack", level: 70 },
            { name: "Figma", level: 80 },
          ],
        },
      ],
    },

    projects: {
      title: "Projects",
      subtitle: "Some of my recent work",
      items: [
        {
          name: "Portfolio Website",
          description: "Personal portfolio built with React.js",
          link: "#",
        },
        {
          name: "E-commerce App",
          description: "Full-stack store application",
          link: "#",
        },
        {
          name: "Blog Platform",
          description: "CMS with Node.js & MongoDB",
          link: "#",
        },
      ],
    },

    about: {
      title: "About Me",
      subtitle: "Who I am",
      description:
        "I'm a Front-End developer with a passion for building clean and user-friendly interfaces. I love turning complex problems into simple, beautiful designs.",
    },

    contact: {
      title: "Contact Me",
      subtitle: "Get in touch",
      email: "youremail@gmail.com",
      phone: "+123 456 7890",
      address: "Damascus, Syria",
      sendMessage: "Send Message",
    },
  },

  ar: {
    hero: {
      openToWork: "متاح للعمل عن بعد",
      greeting: "مرحباً، أنا",
      name: "سعد سنان",
      role: "مهندس تقنية معلومات متخصص في بناء أنظمة الواجهات الأمامية عالية الأداء .",
      about:
        "شغوف بتطوير تطبيقات ويب عالية الجودة، متجاوبة وعصرية. أحرص دائماً على التعلم المستمر وبناء حلول تقنية ذات أثر حقيقي.",
      download: "تحميل السيرة الذاتية",
      workTogether: "لنعمل معاً",
    },

    sidebar: {
      about: "من أنا",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل",
      darkMode: "الوضع الداكن",
      lightMode: "الوضع الفاتح",
      language: "اللغة",
    },

    skills: {
      title: "المهارات والخبرات",
      subtitle: "مجالات خبرتي التقنية",

      frontend: "تقنيات الواجهة الأمامية",
      javascript: "جافاسكريبت وإطارات العمل",
      build: "البناء والنشر",
      workspace: "بيئة العمل والتعاون",

      categories: [
        {
          title: "الواجهات الأمامية",
          items: [
            { name: "React.js", level: 90 },
            { name: "Vue.js", level: 85 },
            { name: "JavaScript", level: 95 },
            { name: "HTML & CSS", level: 95 },
          ],
        },
        {
          title: "الواجهات الخلفية",
          items: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 75 },
            { name: "MongoDB", level: 70 },
          ],
        },
        {
          title: "أدوات وأخرى",
          items: [
            { name: "Git & GitHub", level: 90 },
            { name: "Webpack", level: 70 },
            { name: "Figma", level: 80 },
          ],
        },
      ],
    },

    projects: {
      title: "المشاريع",
      subtitle: "بعض أعمالي الأخيرة",
      items: [
        {
          name: "موقع شخصي",
          description: "Portfolio شخصي مبني بـ React.js",
          link: "#",
        },
        {
          name: "متجر إلكتروني",
          description: "تطبيق متجر كامل Full-Stack",
          link: "#",
        },
        {
          name: "منصة تدوين",
          description: "CMS مع Node.js و MongoDB",
          link: "#",
        },
      ],
    },

    about: {
      title: "من أنا",
      subtitle: "من هو المطور",
      description:
        "أنا مطور Front-End شغوف ببناء واجهات نظيفة وسهلة الاستخدام. أحب تحويل المشاكل المعقدة إلى تصاميم بسيطة وجميلة.",
    },

    contact: {
      title: "تواصل معي",
      subtitle: "يمكنك التواصل معي",
      email: "youremail@gmail.com",
      phone: "+123 456 7890",
      address: "دمشق، سوريا",
      sendMessage: "أرسل رسالة",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("app-language") || "en";
  });

  const isArabic = language === "ar";

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    localStorage.setItem("app-language", language);

    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = language;

    document.documentElement.classList.toggle("rtl", isArabic);
    document.documentElement.classList.toggle("ltr", !isArabic);

    document.body.style.fontFamily = isArabic
      ? "'Cairo', sans-serif"
      : "'Inter', sans-serif";
  }, [language, isArabic]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        isArabic,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};