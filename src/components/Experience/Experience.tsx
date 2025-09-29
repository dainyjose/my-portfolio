import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "React Native Mobile Application Developer",
      company: "Soverg Private Limited",
      duration: "13/03/2024 - Present",
      description: [
        "Developed cross-platform React Native application for mobile platforms.",
        "Implemented social authentication, location-based features, and payment integrations (Razorpay, PayU).",
        "Managed state with Redux and Context API, integrated Firebase Crashlytics and Analytics.",
        "Performed project upgrades, unit testing, and deployed apps to Google Play and Apple App Store.",
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
        "Designed and developed React Native mobile application with Expo CLI from scratch.",
        "Created UI/UX for website using ReactJS, HTML, CSS and backend with NodeJS, ExpressJS.",
        "Integrated REST APIs and cloud image storage using Cloudinary.",
        "Tested application across devices to ensure performance and compatibility.",
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
        "Assisted in developing React Native features and fixing bugs for mobile apps.",
        "Worked on frontend components using ReactJS and integrated REST APIs.",
        "Participated in code reviews and testing to ensure quality.",
        "Collaborated with team members using Git and Jira for agile development.",
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
