import { TbFileCv, TbMessageChatbot, TbWorld } from "react-icons/tb";

const HeaderResume = () => {
  return (
    <div className="header_resume">
      <a
        href="https://dainyjose.github.io/my-resume/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View Resume
        <TbFileCv className="icon" size={24} />
      </a>

      <a
        href="https://stackquill-web.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        StackQuill
        <TbWorld className="icon" size={24} />
      </a>

      <a href="#contact" className="btn btn-primary">
        Let's Talk
        <TbMessageChatbot className="icon" />
      </a>
    </div>
  );
};

export default HeaderResume;
