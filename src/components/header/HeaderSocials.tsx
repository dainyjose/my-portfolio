import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDev } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/dainyjose/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/dainyjose"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://dev.to/dainyjose"
        target="_blank"
        rel="noreferrer"
      >
        <FaDev />
      </a>
    </div>
  );
};

export default HeaderSocials;
