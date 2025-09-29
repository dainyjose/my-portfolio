import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJavascript1,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMysql,
  SiPython,
  SiFirebase,
  SiCloudinary,
  SiExpo,
  SiVite,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiBitbucket,
  SiFigma,
  SiHeroku,
  SiNetlify,
  SiCloudflare,
  SiCpanel,
  SiJest,
  SiDocker,
  SiMacos,
  SiJira,
  SiXampp,
  SiAndroidstudio,
  SiXcode,
  SiNpm,
  SiBun,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaAndroid,
  FaApple,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";
import { ImWindows } from "react-icons/im";
import "./TechSkills.css";

const TechSkills = () => {
  const techStack = [
    // 🔹 Core Frontend & Mobile
    { icon: <DiReact />, name: "React / React Native" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiExpo />, name: "Expo" },
    { icon: <SiVite />, name: "Vite" },

    // 🔹 Backend
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiCloudinary />, name: "Cloudinary" },

    // 🔹 Database
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL / SQL" },
    { icon: <SiXampp />, name: "XAMPP" },

    // 🔹 Testing
    { icon: <SiJest />, name: "Jest" },

    // 🔹 Tools & Collaboration
    { icon: <DiGit />, name: "Git / Git Bash" },
    { icon: <SiNpm />, name: "npm" },
    { icon: <SiBun />, name: "Bun" },
    { icon: <SiBitbucket />, name: "Bitbucket" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <SiXcode />, name: "Xcode" },

    // 🔹 Deployment & Hosting
    { icon: <SiHeroku />, name: "Heroku" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
    { icon: <SiCpanel />, name: "cPanel" },

    // 🔹 Platforms & OS
    { icon: <FaAndroid />, name: "Android" },
    { icon: <FaApple />, name: "iOS" },
    { icon: <ImWindows />, name: "Windows" },
    { icon: <SiMacos />, name: "macOS" },

    // 🔹 Deployment Stores
    { icon: <FaGooglePlay />, name: "Play Store Deployment" },
    { icon: <FaAppStoreIos />, name: "App Store Deployment" },
  ];

  return (
    <section id="tech_skill">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className=" container tech_skill-container">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="tech-icons"
          >
            {tech.icon}
            <span className="tooltip">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
