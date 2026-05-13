import { FaGithub } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "RN Expo Bare Template",
      description:
        "Created a reusable React Native starter template with pre-configured navigation, Redux, TypeScript, and environment management to speed up project setup and reduce repetitive development work.",
      technologies:
        "React Native | Expo | TypeScript | Redux | React Navigation",
      github: "https://github.com/dainyjose/rn-expo-typescript-bare-template",
    },
    {
      id: 2,
      title: "Location Sharing Server",
      description:
        "Built a real-time location sharing backend using socket communication and REST APIs, enabling seamless live tracking integration for mobile applications.",
      technologies: "Node.js | Express.js | Socket.io | MySQL | REST API",
      github: "https://github.com/dainyjose/Location-sharing-server-side",
    },
    {
      id: 3,
      title: "FCM Push Server",
      description:
        "Developed a Firebase Cloud Messaging server for sending real-time push notifications, including topic-based and direct messaging support for mobile applications.",
      technologies: "Node.js | Firebase Cloud Messaging | Express.js",
      github: "https://github.com/dainyjose/firebase-cloud-messaging-node",
    },
    {
      id: 4,
      title: "Face Detection App",
      description:
        "Built a React Native proof-of-concept application for real-time face detection using camera integration and ML-based processing to explore live mobile detection capabilities and performance optimization.",
      technologies: "React Native | Vision Camera | ML Kit | TypeScript",
      github: "https://github.com/dainyjose/face-detection-app",
    },
    {
      id: 5,
      title: "Tidio Chatbot Support",
      description:
        "Integrated Tidio chatbot support into a React Native application to enable automated customer assistance and real-time user communication for improved engagement.",
      technologies: "React Native | TypeScript | Tidio Chatbot",
      github: "https://github.com/dainyjose/tidio_chatbot_support",
    },
    {
      id: 6,
      title: "Search Using Fuse.js",
      description:
        "Implemented fast and flexible fuzzy search functionality using Fuse.js to improve search accuracy and user experience across application datasets.",
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
