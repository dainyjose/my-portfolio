import { FaMobileAlt, FaCode, FaTools, FaServer, FaRocket, FaBug } from "react-icons/fa";
import {
  MdNotificationsActive,
  MdPayment,
  MdApi,
  MdSecurity,
  MdArchitecture,
} from "react-icons/md";

import { BiSupport } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Application Development",
    },
    {
      icon: <MdArchitecture />,
      title: "Application Architecture",
    },
    {
      icon: <MdApi />,
      title: "API Integration & Development",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
    },
    {
      icon: <MdPayment />,
      title: "Payment Integration",
    },
    {
      icon: <MdSecurity />,
      title: "Authentication & Security",
    },
    {
      icon: <MdNotificationsActive />,
      title: "Push Notifications & Messaging",
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
    },
    {
      icon: <FaBug />,
      title: "Production Debugging & Stability",
    },
    {
      icon: <FaTools />,
      title: "App Release & Deployment",
    },
    {
      icon: <BiSupport />,
      title: "App Maintenance & Support",
    },
    {
      icon: <FaCode />,
      title: "Developer Mentoring & Code Review",
    },
  ];

  return (
    <section id="services">
      <h5>What I Can Help With</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service, index) => (
          <article className="service__card" key={index}>
            <div className="service__icon">{service.icon}</div>

            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
