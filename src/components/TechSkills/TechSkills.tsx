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
    // 🔹 Mobile Development (Highest Priority)
    { icon: <DiReact />, name: "React Native" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiExpo />, name: "Expo" },

    // 🔹 Backend & APIs
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiCloudinary />, name: "Cloudinary" },

    // 🔹 Database
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL / SQL" },

    // 🔹 Testing
    { icon: <SiJest />, name: "Jest" },

    // 🔹 Development Tools
    { icon: <DiGit />, name: "Git / Git Bash" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiBitbucket />, name: "Bitbucket" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <SiXcode />, name: "Xcode" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiNpm />, name: "npm" },

    // 🔹 Deployment & Hosting
    { icon: <SiHeroku />, name: "Heroku" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
    { icon: <SiCpanel />, name: "cPanel" },

    // 🔹 Platforms
    { icon: <FaAndroid />, name: "Android" },
    { icon: <FaApple />, name: "iOS" },
    { icon: <ImWindows />, name: "Windows" },
    { icon: <SiMacos />, name: "macOS" },

    // 🔹 App Publishing
    { icon: <FaGooglePlay />, name: "Google Play Console" },
    { icon: <FaAppStoreIos />, name: "App Store Connect" },
  ];
  return (
    <section id="tech_skill">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className=" container tech_skill-container">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-icons">
            {tech.icon}
            <span className="tooltip">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
