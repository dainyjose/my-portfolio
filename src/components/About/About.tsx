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
              I’m a <span className="highlight">React Native Developer</span>{" "}
              with <span className="highlight">3+ years of experience</span>{" "}
              building scalable mobile applications for startups and businesses.
            </p>

            <p>
              My focus is creating{" "}
              <span className="highlight">
                fast, reliable, and maintainable
              </span>{" "}
              cross-platform apps that provide smooth user experiences across{" "}
              <span className="highlight">Android and iOS</span>
            </p>

            <p>
              I’ve worked on real-world features including{" "}
              <span className="highlight">
                payments, push notifications, Google Maps, analytics,
                authentication, and App Store deployments
              </span>
              .
            </p>
            <p>
              Beyond building features, I enjoy improving{" "}
              <span className="highlight">app stability</span>, debugging
              production issues, optimizing{" "}
              <span className="highlight">performance</span>, and creating
              solutions that are practical for both users and businesses.
            </p>
            <p>
              I also work with the <span className="highlight">MERN stack</span>{" "}
              to build APIs, backend services, and full-stack applications when
              needed.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary about_contact"
          >
            Let's Talk <TbMessageChatbot className="icon" />
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
