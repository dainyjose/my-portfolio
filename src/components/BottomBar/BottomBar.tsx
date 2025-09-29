import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiUserHeartLine } from "react-icons/ri";
import { MdMilitaryTech, MdWorkspacePremium } from "react-icons/md";
import { SiChatbot, SiCodeproject } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import "./bottomBar.css";

const BottomBar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
        <span className="nav-text">Home</span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
        <span className="nav-text">About</span>
      </a>

      <a
        href="#tech_skill"
        onClick={() => setActiveNav("#tech_skill")}
        className={activeNav === "#tech_skill" ? "active" : ""}
      >
        <MdMilitaryTech />
        <span className="nav-text">Skills</span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <SiCodeproject />
        <span className="nav-text">Portfolio</span>
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWorkspacePremium />
        <span className="nav-text">Experience</span>
      </a>
      <a
        href="#blogs"
        onClick={() => setActiveNav("#blogs")}
        className={activeNav === "#blogs" ? "active" : ""}
      >
        <FaDev />
        <span className="nav-text">Blogs</span>
      </a>

      <a
        href="#extra-info"
        onClick={() => setActiveNav("#extra-info")}
        className={activeNav === "#extra-info" ? "active" : ""}
      >
        <RiUserHeartLine />
        <span className="nav-text">More</span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <SiChatbot />
        <span className="nav-text">Contact</span>
      </a>
    </nav>
  );
};

export default BottomBar;
