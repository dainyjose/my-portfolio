import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import BottomBar from "./components/BottomBar/BottomBar";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import TechSkills from "./components/TechSkills/TechSkills";

const App = () => {
  return (
    <>
      <Header />
      <BottomBar />
      <About />
      <TechSkills />
      <Portfolio />
      <Experience />
      <Blogs />
      <ExtraInfo />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
