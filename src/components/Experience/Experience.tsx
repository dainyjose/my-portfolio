import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Developer",
      company: "Soverg Private Limited",
      duration: "Mar 2024 - Present",
      promotion: "Promoted from Software Developer in Aug 2026",
      description: [
        "Own and deliver production-grade React Native applications across Android and iOS, from requirements and technical planning through implementation, testing, and release.",
        "Design and implement complex workflows involving authentication, KYC, payments, product availability, booking logic, notifications, and analytics.",
        "Contribute to architecture, API and business-logic decisions while collaborating with backend, QA, and UI/UX teams to deliver reliable end-to-end solutions.",
        "Handle production debugging, performance improvements, Android/iOS releases, SDK upgrades, and mentor junior developers through code reviews and technical guidance.",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "Node.js",
        "Firebase",
        "REST APIs",
        "Razorpay",
        "PayU",
      ],
    },
    {
      role: "React Native Mobile Application Developer",
      company: "Doctor(s) Note Private Limited",
      duration: "01/11/2022 - 29/02/2024",
      description: [
        "Developed a React Native mobile application from scratch using Expo CLI, focusing on scalable architecture and responsive user experience.",
        "Built frontend interfaces using ReactJS and developed backend services using Node.js and Express.js.",
        "Integrated REST APIs and Cloudinary-based media storage for efficient data and image management.",
        "Tested applications across multiple devices to ensure performance, responsiveness, and compatibility.",
      ],
      technologies: ["React Native", "Expo CLI", "ReactJS", "Node.js", "Express.js", "Cloudinary"],
    },

    {
      role: "Developer Intern",
      company: "Evenion Technologies Private Limited",
      duration: "04/04/2022 - 03/10/2022",
      description: [
        "Contributed to React Native mobile application development by implementing features and resolving application issues.",
        "Developed frontend components using ReactJS and integrated REST APIs for dynamic data handling.",
        "Participated in testing and code reviews to maintain application quality and performance.",
        "Collaborated with development teams using Git and Jira within Agile workflows.",
      ],
      technologies: ["React Native", "ReactJS", "Node.js", "Git", "Jira"],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h5>My Professional Journey</h5>

      <h2>Experience</h2>
      <div className="container experience__container">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-item experiences-${index}`}>
            <h3>{exp.role}</h3>

            <span className="company">{exp.company}</span>

            <span className="duration">{exp.duration}</span>

            {exp.promotion && <span className="promotion">{exp.promotion}</span>}

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
