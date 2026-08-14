import { FaGithub } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "React Native Expo Bare Template",
      description:
        "Built a reusable React Native starter architecture with TypeScript, Redux, navigation, environment configuration, and common project setup to accelerate development and maintain consistency across applications.",
      technologies: "React Native | Expo Bare | TypeScript | Redux | React Navigation",
      github: "https://github.com/dainyjose/rn-expo-typescript-bare-template",
    },

    {
      id: 2,
      title: "Real-Time Location Sharing Server",
      description:
        "Designed and implemented a real-time location-sharing backend using Socket.IO and REST APIs, providing live location updates and a scalable foundation for mobile tracking applications.",
      technologies: "Node.js | Express.js | Socket.IO | MySQL | REST API",
      github: "https://github.com/dainyjose/Location-sharing-server-side",
    },

    {
      id: 3,
      title: "Firebase Cloud Messaging Server",
      description:
        "Developed a backend notification service using Firebase Cloud Messaging with support for direct device messaging and topic-based notifications for React Native applications.",
      technologies: "Node.js | Express.js | Firebase Cloud Messaging",
      github: "https://github.com/dainyjose/firebase-cloud-messaging-node",
    },

    {
      id: 4,
      title: "Real-Time Face Detection App",
      description:
        "Built a React Native proof of concept for real-time face detection using camera processing and ML-based detection, exploring mobile computer vision performance and camera integration.",
      technologies: "React Native | Vision Camera | ML Kit | TypeScript",
      github: "https://github.com/dainyjose/face-detection-app",
    },

    {
      id: 5,
      title: "Mobile Chatbot Integration",
      description:
        "Integrated chatbot functionality into a React Native application to provide automated customer assistance and real-time user communication.",
      technologies: "React Native | TypeScript | Tidio",
      github: "https://github.com/dainyjose/tidio_chatbot_support",
    },

    {
      id: 6,
      title: "Fuzzy Search with Fuse.js",
      description:
        "Implemented client-side fuzzy search to provide fast and flexible matching across application datasets, improving search accuracy and user experience.",
      technologies: "React Native | TypeScript | Fuse.js",
      github: "https://github.com/dainyjose/search_using_fuse_js",
    },
  ];
  return (
    <section id="portfolio">
      <h5>Selected Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((pro, index) => (
          <article className={`portfolio__item project-${index}`} key={pro.id}>
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
