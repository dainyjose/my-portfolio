import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import {
  MdMilitaryTech,
  MdWorkspacePremium,
  MdInfoOutline,
} from "react-icons/md";
import { SiCodeproject, SiChatbot } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { TbDeviceAnalytics } from "react-icons/tb";

import "./bottomBar.css";

const BottomBar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const navItems = [
    { id: "#home", icon: <AiOutlineHome />, label: "Home" },
    { id: "#about", icon: <AiOutlineUser />, label: "About" },
    { id: "#tech_skill", icon: <MdMilitaryTech />, label: "Skills" },
    { id: "#services", icon: <GrServices />, label: "Services" },
    { id: "#portfolio", icon: <SiCodeproject />, label: "Work" },
    { id: "#experience", icon: <MdWorkspacePremium />, label: "Experience" },
    { id: "#work", icon: <TbDeviceAnalytics />, label: "Approach" },
    { id: "#blogs", icon: <FaDev />, label: "Blogs" },
    { id: "#extra-info", icon: <MdInfoOutline />, label: "More" },
    { id: "#contact", icon: <SiChatbot />, label: "Contact" },
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight / 3;
  //     console.log(scrollPosition, window.scrollY);

  //     navItems.forEach((item) => {
  //       const section = document.querySelector(item.id) as HTMLElement | null;

  //       if (!section) return;

  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;
  //       console.log(sectionTop, sectionHeight);

  //       if (
  //         scrollPosition >= sectionTop &&
  //         scrollPosition < sectionTop + sectionHeight
  //       ) {
  //         setActiveNav(item.id);
  //       }
  //     });

  //     if (window.scrollY < 100) {
  //       setActiveNav("#home");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      // HOME
      if (window.scrollY <= 10) {
        setActiveNav("#home");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.45;

      let currentSection = "#home";

      for (const item of navItems) {
        const section = document.querySelector(item.id) as HTMLElement | null;

        if (!section) continue;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = item.id;
          break;
        }
      }

      setActiveNav(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const footer = document.querySelector("#footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mobile → never hide
        if (window.innerWidth <= 600) {
          setIsFooterVisible(false);
          return;
        }

        // Top reached
        if (window.scrollY <= 50) {
          setIsFooterVisible(false);
          return;
        }

        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    // <nav className={`bottom-nav ${isFooterVisible ? "hide" : ""}`}>
    <nav
      className={`bottom-nav ${
        isFooterVisible && window.innerWidth > 600 ? "hide" : ""
      }`}
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => setActiveNav(item.id)}
          className={activeNav === item.id ? "active" : ""}
        >
          {item.icon}
          <span className="nav-text">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomBar;
