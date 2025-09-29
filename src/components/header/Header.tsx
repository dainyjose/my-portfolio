import HeaderResume from "./HeaderResume";
import HeaderSocials from "./HeaderSocials";
import { TbArrowBigRightLines } from "react-icons/tb";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dainy Jose</h1>
        <h3 className="text-light">Mobile App & Full-Stack Developer</h3>
        <h5 className="text-light header_tech_skill">
          Mobile App Dev | MERN Stack | React Native | TypeScript | Redux |
          React.js | Node.js | MongoDB | MySQL | Express.js | REST API | JWT |
          Google Maps | Firebase | Jest | Agile | SDLC | Payments | Git |
          Bitbucket | Jira
        </h5>
        <HeaderResume />
        <a
          href="#contact"
          className="scroll__down"
        >
          Scroll Down.......
          <TbArrowBigRightLines />
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
