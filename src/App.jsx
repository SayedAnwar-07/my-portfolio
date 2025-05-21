import Navbar from "./components/shared/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./components/shared/Footer";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="bg-[#f1f2ea]">
      <Navbar />
      <Hero />
      <Experiences />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <hr className="text-gray-200" />
      <Footer />
    </div>
  );
};

export default App;
