import {
  FaMapMarkerAlt,
  FaLightbulb,
  FaHeart,
  FaGraduationCap,
} from "react-icons/fa";
import "./ExtraInfo.css";

const ExtraInfo = () => {
  return (
    <section id="extra-info">
      <h5>A Little More About Me</h5>
      <h2>Location • Skills • Interests • Education</h2>

      <div className=" container extra-container">
        <div className="extra-item">
          <FaMapMarkerAlt className="extra-icon" />
          <h3>Location</h3>
          <p>
            Calicut, Kerala,
            <br /> India
          </p>
        </div>

        <div className="extra-item">
          <FaLightbulb className="extra-icon" />
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
        </div>

        <div className="extra-item">
          <FaHeart className="extra-icon" />
          <h3>Interests</h3>
          <ul>
            <li>Coding</li>
            <li>Pet Keeping</li>
            <li>Gardening</li>
            <li>Craft Making</li>
          </ul>
        </div>

        <div className="extra-item education">
          <FaGraduationCap className="extra-icon" />
          <h3>Education</h3>
          <ul>
            <li>
              MCA{" "}
              <span className="details">
                – Jyoti Nivas College, Bangalore (66.7%, 2022)
              </span>
            </li>
            <li>
              BSc Mathematics{" "}
              <span className="details">
                {" "}
                – Providence College, Calicut (64.7%, 2020)
              </span>
            </li>
            <li>
              Plus Two{" "}
              <span className="details">
                – St. George's HSS, Calicut (83%, 2017)
              </span>
            </li>
            <li>
              SSLC{" "}
              <span className="details">
                – St. Thomas HSS, Calicut (90%, 2015)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
