import "./App.css";
import Navbar from "./components/navbar";
import About from "./view/about";
import Contact from "./view/contact";
import Home from "./view/home";
import Project from "./view/project";
import Skill from "./view/skill";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    once: true,
  });
  return (
    <div className="w-full min-h-[100vh] pb-10 max-h-max relative bg_gradient">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
