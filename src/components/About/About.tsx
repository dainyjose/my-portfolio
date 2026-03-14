import ME from "../../assets/dainy_jose.jpg";
import { FaAward } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { VscRepoClone } from "react-icons/vsc";
import { LiaDev } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <VscRepoClone className="about__icon" />

              <h5>Projects & POCs</h5>
              <small>20+ Projects & POCs</small>
            </article>
            <article className="about__card">
              <LiaDev className="about__icon" />

              <h5>Dev Blogs</h5>
              <small>15+ Blogs</small>
            </article>
            <article className="about__card learning">
              <GrTechnology className="about__icon" />
              <h5>Learning Now</h5>
              <small>MERN Stack & Redux</small>
            </article>
            <article className="about__card">
              <MdOutlineMilitaryTech className="about__icon" />

              <h5>Tech Stack</h5>
              <small>25+ Tools & Skills</small>
            </article>
          </div>
          <div className="about__me_content">
            <p>
              I’m a passionate{" "}
              <span className="highlight">
                React Native Mobile Application Developer
              </span>{" "}
              with <span className="highlight">3+ years of experience</span>{" "}
              building scalable cross-platform mobile applications.
            </p>

            <p>
              My primary focus is mobile development using{" "}
              <span className="highlight">
                React Native, TypeScript, and Redux
              </span>
              , creating high-performance applications with clean architecture
              and maintainable code.
            </p>

            <p>
              I also work with the <span className="highlight">MERN stack</span>{" "}
              (MongoDB, Express, React.js, Node.js) to build backend services,
              APIs, and personal projects.
            </p>
            <p>
              I have experience integrating real-world mobile features such as{" "}
              <span className="highlight">
                payments, Google Maps, push notifications, Firebase analytics,
                Crashlytics, and App Store & Play Store deployments
              </span>
              .
            </p>
            <p>
              I enjoy{" "}
              <span className="highlight">
                solving complex problems, improving application performance, and
                building scalable solutions
              </span>
              . Every project is an opportunity to learn, collaborate, and
              create meaningful digital experiences. 🚀
            </p>
          </div>
          <a href="#contact" className="btn btn-primary about_contact">
            Let's Talk <TbMessageChatbot className="icon" />
          </a>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
