import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div id="home" className="container mx-auto">
      <section
        id="hero"
        className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-16"
      >
        {/* Background Animation */}
        <div className="hero-bg absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-float animation-delay-300" />
        </div>

        {/* Social Icons */}
        <div className="hidden lg:block">
          <div className="flex md:flex-col justify-center gap-4 mt-8 animate-slideUp animation-delay-500 md:absolute md:top-60 md:right-60">
            <div className="tooltip tooltip-left" data-tip="Linkedin">
              <a
                href="https://www.linkedin.com/in/sayedanwartamim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
              >
                <FaLinkedinIn className="text-2xl mb-2" />
              </a>
            </div>

            <div className="tooltip tooltip-left" data-tip="Gmail">
              <a
                href="mailto:sayedanwarofficial@gmail.com"
                target="_blank"
                className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
              >
                <AiOutlineMail className="text-2xl mb-2" />
              </a>
            </div>

            <div className="tooltip tooltip-left" data-tip="Github">
              <a
                href="https://github.com/SayedAnwar-07"
                target="_blank"
                className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
              >
                <FaGithub className="text-2xl mb-2" />
              </a>
            </div>

            <div className="tooltip tooltip-left" data-tip="Whatsapp">
              <a
                href="https://wa.me/8801903636076"
                target="_blank"
                className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
              >
                <FaWhatsapp className="text-2xl mb-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="section-container relative z-10 flex flex-col items-center text-center px-4">
          <h3 className="font-semibold mb-4 text-black leading-tight">
            <span className="">
              <Typewriter
                words={["Fullstack Developer", "Wordpress Developer", "Coder"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 animate-slideUp animation-delay-100 text-gray-900">
            Sayed{" "}
            <span className="text-green bg-clip-text text-transparent">
              Anwar
            </span>
          </h1>
          <p className="max-w-2xl text-base md:text-xl text-gray-700 mb-8 animate-slideUp animation-delay-200">
            Full Stack Developer with expertise in WordPress, MERN stack, and
            Django, crafting responsive, scalable, and user-friendly websites
            and applications for businesses and individuals.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 animate-slideUp animation-delay-300">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium text-sm md:text-base cursor-pointer text-gray-900"
            >
              Get in Touch
            </Link>
            <a
              href="https://drive.google.com/file/d/1JeYJETyN1FUXVpEcetosDTuouSIaO-tC/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 amazing-button text-white rounded-lg font-medium text-sm md:text-base cursor-pointer"
            >
              Resume
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12 mb-32 animate-slideUp animation-delay-400">
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-800">
                1.5+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Years Experience
              </p>
            </div>
            <div className="h-8 md:h-10 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-800">
                12+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Projects</p>
            </div>
            <div className="h-8 md:h-10 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-800">
                13+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Technologies
              </p>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              aria-label="Scroll down"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
