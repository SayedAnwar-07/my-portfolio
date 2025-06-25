import { useRef } from "react";
import Card from "../components/about/Card";
import { Globe } from "../components/about/globe";
import { Frameworks } from "../components/FrameWorks";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const grid2Container = useRef();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto" id="about">
      <section className="c-space section-spacing">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-40 h-1 bg-green mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
          >
            Passionate developer with a creative mindset and problem-solving
            approach. I believe in building solutions that are not just
            functional but delightful to use.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1 */}
          <div className="relative p-8 bg-gradient-to-br from-gray-700 via-black to-[#aada30] rounded-3xl border border-gray-700 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.3)] transition-all duration-500 grid-1 group">
            {/* Dynamic background elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute w-40 h-40 rounded-full bg-green-500 -top-16 -left-16 blur-3xl animate-float-slow"></div>
              <div className="absolute w-56 h-56 rounded-full bg-teal-600 -bottom-24 -right-24 blur-3xl animate-float-medium"></div>
            </div>

            {/* Interactive grid pattern */}
            <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
              <div className="absolute inset-0 bg-[size:30px_30px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] group-hover:bg-[size:40px_40px] transition-all duration-700"></div>
            </div>
            {/* Main content with animated entry */}
            <div className="relative z-10 max-w-[55%] space-y-5">
              <div className="overflow-hidden">
                <p className="text-gray-300 text-lg font-medium mb-1 translate-y-0 opacity-100 transition-all duration-500 group-hover:-translate-y-1">
                  Hello! I'm
                </p>
              </div>

              <div className="overflow-hidden">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#aada30] to-teal-400 bg-clip-text text-transparent mb-2 translate-y-0 opacity-100 transition-all duration-500 delay-75 group-hover:-translate-y-1">
                  Sayed Anwar
                </h1>
              </div>

              <div className="overflow-hidden">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed translate-y-0 opacity-100 transition-all duration-500 delay-100 group-hover:-translate-y-1">
                  Frontend Developer crafting pixel-perfect, responsive web
                  experiences with React.js and modern JavaScript.
                </p>
              </div>

              {/* Interactive skill chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Django REST",
                  "Figma",
                  "Jest",
                ].map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-xs font-medium text-white hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-indigo-100 hover:scale-105 transition-all duration-300 cursor-default"
                    style={{ transitionDelay: `${150 + i * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${
                      5 + Math.random() * 10
                    }s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Grid 2 */}
          <div className="grid-default-color border border-gray-200 grid-2">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end text-5xl text-gray-500">
                CODE IS CRAFT
              </p>
              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="REACT.JS"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="DJANGO"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="EXPRESS"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="RTK QUERY"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="FRAMER MOTION"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "30deg", top: "70%", left: "70%" }}
                image="assets/logos/firebase.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="assets/logos/nodejs.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="assets/logos/redux.png"
                containerRef={grid2Container}
              />
            </div>
          </div>
          {/* Grid 3 */}
          <div className="grid-black-color border border-gray-200 grid-3">
            <div className="z-10 w-[50%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in Mars, and open to remote work worldwide
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
          {/* Grid 4 */}
          <div className="grid-black-color rounded-lg border border-gray-200 grid-4 relative overflow-hidden group">
            <div className="flex flex-col items-center justify-center gap-4 size-full p-8 text-center">
              <div className="relative z-10">
                <div className="text-5xl mb-6 opacity-20 absolute -top-6 -left-6 transform -rotate-12 text-gray-300">
                  "
                </div>
                <p className="text-lg italic leading-relaxed relative text-gray-300 z-10">
                  I believe in creating solutions that are not just functional,
                  but also delightful to experience. Every pixel and line of
                  code should tell a story.
                </p>
                <div className="text-5xl mt-6 opacity-20 absolute -bottom-6 -right-6 transform rotate-12 text-gray-300">
                  "
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 my-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 animate-line-expand"></div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white opacity-20"
                    style={{
                      width: `${Math.random() * 6 + 2}px`,
                      height: `${Math.random() * 6 + 2}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${
                        Math.random() * 10 + 10
                      }s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Grid 5 */}
          <div className="grid-default-color border border-gray-200 grid-5">
            <div className="z-10 w-[50%]">
              <p className="headText">Teck Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools
                taht allow me to build robust and scalable applications
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
