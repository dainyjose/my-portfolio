import ME from "../../assets/dainy_jose.jpg";
import { FaAward } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import { MdCloudUpload, MdOutlineMilitaryTech, MdPayment, MdSync } from "react-icons/md";
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
        <div className="about__cards">
          <article className="about__card">
            <VscRepoClone className="about__icon" />
            <h5>Production Experience</h5>
            <small>3+ Years</small>
          </article>

          <article className="about__card">
            <LiaDev className="about__icon" />
            <h5>Technical Ownership</h5>
            <small>Features & Releases</small>
          </article>

          <article className="about__card">
            <GrTechnology className="about__icon" />
            <h5>Full-Stack</h5>
            <small>Mobile + Backend</small>
          </article>

          <article className="about__card">
            <MdOutlineMilitaryTech className="about__icon" />
            <h5>Architecture</h5>
            <small>Scalable Applications</small>
          </article>

          <article className="about__card">
            <MdCloudUpload className="about__icon" />
            <h5>App Releases</h5>
            <small>Android & iOS</small>
          </article>

          <article className="about__card">
            <MdPayment className="about__icon" />
            <h5>Integrations</h5>
            <small>Payments & APIs</small>
          </article>

          <article className="about__card">
            <MdSync className="about__icon" />
            <h5>Team Growth</h5>
            <small>Mentoring Developers</small>
          </article>

          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Code Quality</h5>
            <small>Reviews & Best Practices</small>
          </article>
        </div>

        <div className="about__bottom">
          <div className="about__content">
            <p>
              I’m a <span className="highlight">Senior Software Developer</span> with{" "}
              <span className="highlight">3+ years of experience</span> building and maintaining
              production-ready software, with a strong focus on cross-platform mobile applications.
            </p>

            <p>
              My primary expertise is{" "}
              <span className="highlight">React Native, TypeScript, and modern JavaScript</span>,
              with hands-on experience across application architecture, state management, API
              integration, authentication, payments, notifications, analytics, and Android/iOS
              releases.
            </p>

            <p>
              I take ownership of features from{" "}
              <span className="highlight">
                requirements and technical planning through development, testing, debugging, and
                production release
              </span>
              . I enjoy solving complex problems and building solutions that are scalable,
              maintainable, and practical for both users and businesses.
            </p>

            <p>
              Beyond mobile development, I work with{" "}
              <span className="highlight">Node.js, REST APIs, SQL, and backend services</span> to
              understand and contribute to the complete application lifecycle.
            </p>

            <p>
              I also enjoy <span className="highlight">mentoring junior developers</span>, sharing
              technical knowledge, reviewing code, and helping developers grow from learning
              concepts to independently solving real-world engineering problems.
            </p>

            <a href="#contact" className="btn btn-primary about_contact">
              Let's Talk <TbMessageChatbot className="icon" />
            </a>
          </div>

          <div className="about__right">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
