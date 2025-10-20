import CV from "../../assets/Dainy_Jose_Resume.pdf";
import { ImDownload } from "react-icons/im";
import { TbEye, TbFileCv, TbMessageChatbot } from "react-icons/tb";

const HeaderResume = () => {
  return (
    <div className="header_resume">
      {/* <a
        href={CV}
        download
        className="btn"
      > */}
      <a
        href="https://dainyjose.github.io/my-resume/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View CV
        <TbFileCv className="icon" size={24} />
        {/* <ImDownload className="icon" /> */}
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
        <TbMessageChatbot className="icon" />
      </a>
    </div>
  );
};

export default HeaderResume;
