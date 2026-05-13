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
        <h3 className="text-light">
          React Native Developer Building Scalable Mobile Apps for Real-World
          Businesses
        </h3>
        <h5 className="text-light header_tech_skill">
          React Native • TypeScript • Redux • Firebase • Node.js • REST APIs •
          Payment Integrations • Play Store & App Store Deployment
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
