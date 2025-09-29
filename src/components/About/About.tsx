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
              <small>3+ year</small>
            </article>
            <article className="about__card">
              <VscRepoClone className="about__icon" />

              <h5>Projects & POCs</h5>
              <small>20+ Projects & POCs</small>
            </article>
            <article className="about__card">
              <LiaDev className="about__icon" />

              <h5>Dev Blogs</h5>
              <small>10+ Blogs</small>
            </article>
            <article className="about__card learning">
              <GrTechnology className="about__icon" />

              <h5>Learning Now</h5>
              <small>MERN, Redux</small>
            </article>
            <article className="about__card">
              <MdOutlineMilitaryTech className="about__icon" />

              <h5>Tech Stack</h5>
              <small>15+ Tools & Skills</small>
            </article>
          </div>
          <div className="about__me_content">
            <p>
              I’m a passionate{" "}
              <span className="highlight">
                Hybrid App & Full-Stack Developer
              </span>{" "}
              with
              <span className="highlight"> 3 years of experience</span> building
              cross-platform mobile and web applications.
            </p>
            <p>
              Specializing in{" "}
              <span className="highlight">React Native & MERN stack</span>, I
              focus on delivering apps with{" "}
              <span className="highlight">
                clean architecture, secure integrations, and smooth user
                experiences
              </span>
              .
            </p>
            <p>
              Beyond coding, I enjoy{" "}
              <span className="highlight">
                solving problems, learning new technologies, and bringing
                creative ideas to life
              </span>
              . Every project is an opportunity for me to grow, collaborate, and
              create something meaningful. 🚀
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary about_contact"
          >
            Let's Talk...
            <TbMessageChatbot className="icon" />
          </a>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt="me"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
