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
    <main className="w-full min-h-[100vh] pb-10 max-h-max relative bg_gradient">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
