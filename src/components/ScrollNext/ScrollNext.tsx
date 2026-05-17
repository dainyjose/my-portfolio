import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import "./scrollNext.css";

const sections = [
  "home",
  "about",
  "tech_skill",
  "services",
  "portfolio",
  "experience",
  "work",
  "blogs",
  "extra-info",
  "contact",
];

const ScrollNext = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      setIsBottom(bottomReached);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (isBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const currentScroll = window.scrollY;

    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].offsetTop > currentScroll + 100) {
        elements[i].scrollIntoView({
          behavior: "smooth",
        });
        break;
      }
    }
  };

  return (
    <button
      className={`scroll__next ${isBottom ? "footer-active" : ""}`}
      onClick={handleScrollAction}
    >
      {isBottom ? (
        <MdKeyboardArrowUp className="scroll__icon" />
      ) : (
        <MdKeyboardArrowDown className="scroll__icon" />
      )}
    </button>
  );
};

export default ScrollNext;
