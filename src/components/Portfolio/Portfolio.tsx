import { FaGithub } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "RN Expo Bare Template",
      description:
        "A boilerplate project setup with Expo bare workflow and TypeScript, including configured navigation, Redux, and environment management for faster project initialization.",
      technologies:
        "React Native | Expo | TypeScript | Redux | React Navigation",
      github: "https://github.com/dainyjose/rn-expo-typescript-bare-template",
    },
    {
      id: 2,
      title: "Location Sharing Server",
      description:
        "Backend service for real-time location sharing, supporting socket communication and REST APIs for seamless integration with mobile apps.",
      technologies: "Node.js | Express.js | Socket.io | MySQL | REST API",
      github: "https://github.com/dainyjose/Location-sharing-server-side",
    },
    {
      id: 3,
      title: "FCM Push Server",
      description:
        "A Node.js server setup for sending push notifications to mobile apps using Firebase Cloud Messaging, including topic-based and direct messaging support.",
      technologies: "Node.js | Firebase Cloud Messaging | Express.js",
      github: "https://github.com/dainyjose/firebase-cloud-messaging-node",
    },
    {
      id: 4,
      title: "Face Detection App",
      description:
        "A React Native proof-of-concept app for detecting faces in real-time using camera integration and ML-based detection libraries.",
      technologies: "React Native | Vision Camera | ML Kit | TypeScript",
      github: "https://github.com/dainyjose/face-detection-app",
    },
    {
      id: 5,
      title: "Tidio Chatbot Support",
      description:
        "Integration of Tidio chatbot into a React app, enabling automated support and real-time chat with users for better engagement.",
      technologies: "React Native | TypeScript | Tidio Chatbot",
      github: "https://github.com/dainyjose/tidio_chatbot_support",
    },
    {
      id: 6,
      title: "Search Using Fuse.js",
      description:
        "Implementation of fuzzy search functionality using Fuse.js to provide fast and flexible search across datasets in a React application.",
      technologies: "React Native | TypeScript | Fuse.js",
      github: "https://github.com/dainyjose/search_using_fuse_js",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((pro, index) => (
          <article
            className={`portfolio__item project-${index}`}
            key={pro.id}
          >
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>

              <p>{pro.description}</p>
              <p>
                <strong>Technologies:</strong> {pro.technologies}
              </p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className=" portfolio_github_btn"
                rel="noreferrer"
              >
                <FaGithub className="portfolio_github" />
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
