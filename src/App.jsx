import Navbar from "./components/shared/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import Footer from "./components/shared/Footer";
import Skills from "./pages/Skills";

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
