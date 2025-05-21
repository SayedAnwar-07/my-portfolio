import { useRef } from "react";
import Card from "../components/about/Card";
import { Globe } from "../components/about/globe";
import { Frameworks } from "../components/FrameWorks";
import "./About.css";

const About = () => {
  const grid2Container = useRef();

  return (
    <div className="container mx-auto" id="about">
      <section className="c-space section-spacing">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">About Me</h2>
          <div className="w-32 h-1 bg-[#878f6f] mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Passionate developer with a creative mindset and problem-solving
            approach. I believe in building solutions that are not just
            functional but delightful to use.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1 */}
          <div className="flex items-end grid-default-color border border-gray-200 grid-1">
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            />
            <div className="z-10">
              <p className="headtext">
                Hi, I'm <strong>Sayed Anwar</strong>{" "}
              </p>
              <p className="subtext">
                Over the last 2 years, I developed my frontend developer skilled
                in React.js, HTML, CSS, and JavaScript, with a focus on building
                responsive and engaging user interfaces. Experienced in
                integrating Django REST APIs and MySQL to develop dynamic
                full-stack web applications. Passionate about turning designs
                into smooth, functional user experiences.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
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
