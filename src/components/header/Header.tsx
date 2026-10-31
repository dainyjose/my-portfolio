import { TbArrowBigRightLines } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import HeaderResume from "./HeaderResume";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dainy Jose</h1>

        <h3 className="text-light">
          <TypeAnimation
            sequence={[
              "Senior Software Developer",
              2200,
              "React Native Developer Building Scalable Mobile Apps",
              2200,
              "Android & iOS Application Development",
              2200,
              "Mobile Architecture & Technical Ownership",
              2200,
              "Mentoring & Growing Junior Developers",
              2200,
              "4+ Years of Software Development Experience",
              2200,
            ]}
            speed={10}
            deletionSpeed={30}
            repeat={Infinity}
          />
        </h3>

        <h5 className="text-light header_tech_skill">
          React Native • TypeScript • Redux • Expo Bare Workflow • Android & iOS
        </h5>

        <HeaderResume />

        <a href="#contact" className="scroll__down">
          Scroll Down.......
          <TbArrowBigRightLines />
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
