import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDev } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

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
      <a href="https://github.com/dainyjose" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dev.to/dainyjose" target="_blank" rel="noreferrer">
        <FaDev />
      </a>
      <a
        href="https://stackquill-web.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="StackQuill Blog"
      >
        <SiHashnode />
      </a>
    </div>
  );
};

export default HeaderSocials;
