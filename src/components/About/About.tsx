import ME from "../../assets/dainy_jose.jpg";
import { FaAward } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import {
  MdCloudUpload,
  MdOutlineMilitaryTech,
  MdPayment,
  MdSync,
} from "react-icons/md";
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
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ years</small>
          </article>

          <article className="about__card">
            <VscRepoClone className="about__icon" />
            <h5>Projects & POCs</h5>
            <small>20+ Projects</small>
          </article>
          <article className="about__card">
            <LiaDev className="about__icon" />
            <h5>Dev Blogs</h5>
            <small>15+ Blogs</small>
          </article>

          <article className="about__card learning">
            <GrTechnology className="about__icon" />
            <h5>Learning Now</h5>
            <small>MERN & Redux</small>
          </article>

          <article className="about__card">
            <MdOutlineMilitaryTech className="about__icon" />
            <h5>Tech Stack</h5>
            <small>25+ Tools</small>
          </article>

          <article className="about__card">
            <MdCloudUpload className="about__icon" />
            <h5>Deployment</h5>
            <small>Android & iOS</small>
          </article>

          <article className="about__card">
            <MdPayment className="about__icon" />
            <h5>Payments</h5>
            <small>Razorpay & PayU</small>
          </article>

          <article className="about__card">
            <MdSync className="about__icon" />
            <h5>Real-Time Apps</h5>
            <small>Socket & Firebase</small>
          </article>
        </div>

        <div className="about__bottom">
          <div className="about__content">
            <p>
              I’m a <span className="highlight">React Native Developer</span>{" "}
              with <span className="highlight">3+ years of experience</span>{" "}
              building scalable mobile applications for startups and businesses.
            </p>

            <p>
              My focus is building{" "}
              <span className="highlight">
                fast, reliable, and maintainable
              </span>{" "}
              cross-platform apps that deliver smooth user experiences across{" "}
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

            <a
              href="#contact"
              className="btn btn-primary about_contact"
            >
              Let's Talk <TbMessageChatbot className="icon" />
            </a>
          </div>

          <div className="about__right">
            <div className="about__me-image">
              <img
                src={ME}
                alt="me"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
