import {
  FaMobileAlt,
  FaCode,
  FaMapMarkedAlt,
  FaTools,
  FaServer,
  FaRocket,
} from "react-icons/fa";

import { MdNotificationsActive, MdPayment, MdApi } from "react-icons/md";

import { SiExpo, SiFirebase } from "react-icons/si";

import { BiSupport } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: "Cross-Platform Mobile Development",
    },
    {
      icon: <FaCode />,
      title: "Performance Optimization",
    },
    {
      icon: <MdNotificationsActive />,
      title: "Push Notifications",
    },
    {
      icon: <MdPayment />,
      title: "Payment Integration",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Google Maps Features",
    },
    {
      icon: <FaTools />,
      title: "Production Bug Fixing",
    },
    {
      icon: <MdApi />,
      title: "REST API Integration",
    },
    {
      icon: <FaRocket />,
      title: "Play Store & App Store Deployment",
    },
    {
      icon: <SiExpo />,
      title: "Expo Bare Workflow",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
    },
    {
      icon: <BiSupport />,
      title: "App Maintenance & Support",
    },
    {
      icon: <SiFirebase />,
      title: "Firebase Integration",
    },
  ];

  return (
    <section id="services">
      <h5>What I Can Help With</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service, index) => (
          <article
            className="service__card"
            key={index}
          >
            <div className="service__icon">{service.icon}</div>

            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
