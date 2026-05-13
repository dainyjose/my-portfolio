import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "React Native Mobile Application Developer",
      company: "Soverg Private Limited",
      duration: "13/03/2024 - Present",
      description: [
        "Built and maintained cross-platform React Native applications with features including payments, location services, authentication, and push notifications.",
        "Improved application stability through Firebase Crashlytics monitoring, debugging, and production issue resolution.",
        "Managed Play Store and App Store releases, project upgrades, and performance optimizations to deliver smoother user experiences across Android and iOS devices.",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Expo Bare Workflow",
        "Redux",
        "Firebase",
        "Razorpay",
        "PayU",
      ],
    },
    {
      role: "React Native Mobile Application Developer",
      company: "Doctor(s) Note Private Limited",
      duration: "01/11/2022 - 29/02/2024",
      description: [
        "Developed a React Native mobile application from scratch using Expo CLI with focus on scalable architecture and responsive user experience.",
        "Built frontend interfaces using ReactJS and developed backend services with Node.js and Express.js.",
        "Integrated REST APIs and Cloudinary-based media storage for efficient image management.",
        "Tested applications across multiple devices to ensure performance, responsiveness, and compatibility.",
      ],
      technologies: [
        "React Native",
        "Expo CLI",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Cloudinary",
        "HTML",
        "CSS",
      ],
    },
    {
      role: "Developer Intern",
      company: "Evenion Technologies Private Limited",
      duration: "04/04/2022 - 03/10/2022",
      description: [
        "Contributed to React Native mobile application development by implementing features and resolving application issues.",
        "Developed frontend components using ReactJS and integrated REST APIs for dynamic data handling.",
        "Participated in testing and code reviews to maintain application quality and performance.",
        "Collaborated with development teams using Git and Jira within agile workflows.",
      ],
      technologies: ["React Native", "ReactJS", "NodeJS", "Git", "Jira"],
    },
  ];

  return (
    <section
      id="experience"
      className="experience-section"
    >
      <h5>My Professional Journey</h5>

      <h2>Experience</h2>
      <div className="container experience__container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-item experiences-${index}`}
          >
            <h3>{exp.role}</h3>
            <span className="company">{exp.company}</span>
            <span className="duration">{exp.duration}</span>
            <ul>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <p className="technologies">
              <strong>Technologies:</strong> {exp.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
