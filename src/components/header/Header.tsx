import { useEffect, useState } from "react";
import HeaderResume from "./HeaderResume";
import HeaderSocials from "./HeaderSocials";
import { TbArrowBigRightLines } from "react-icons/tb";
import "./header.css";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const texts = [
    "React Native Developer",
    "TypeScript | Redux Expert",
    "Building Production Apps",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dainy Jose</h1>
        <h3 className="text-light">
          {/* {texts[index]} */}
          {/* React Native Developer Building Scalable, Production-Ready Mobile Apps
          for Real Businesses */}
          <TypeAnimation
            sequence={[
              "React Native Developer",
              2000,
              "Building Scalable Mobile Apps",
              2000,
              "TypeScript • Redux • Firebase Expert",
              2000,
              "Backend + Mobile Developer",
              2000,
              "Production-Ready App Builder",
              2000,
            ]}
            speed={10}
            deletionSpeed={30}
            repeat={Infinity}
          />
        </h3>
        <h5 className="text-light header_tech_skill">
          React Native • TypeScript • Redux • Node.js • Firebase • REST APIs •
          Payments • App Store Deployment
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
