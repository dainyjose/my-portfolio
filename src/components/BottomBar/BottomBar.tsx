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
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (window.scrollY < 80) setActiveNav("#home");
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  console.log(window.scrollY);

  return (
    <nav className="bottom-nav">
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
