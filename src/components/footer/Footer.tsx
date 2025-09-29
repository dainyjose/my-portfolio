import { BsLinkedin } from "react-icons/bs";
import { FaDev, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a
        href="#home"
        className="footer__logo"
      >
        Dainy Jose
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#tech_skill">Tech Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#extra-info">A Little More About Me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/dainyjose/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/dainyjose"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://dev.to/dainyjose"
          target="_blank"
          rel="noreferrer"
        >
          <FaDev />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; {getYear()}. Designed & Developed with ❤️ by <b>Dainy Jose</b>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
