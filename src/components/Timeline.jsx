import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  // Smooth out the scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  // Animation for each timeline item
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
    <div className="c-space section-spacing" ref={containerRef}>
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
          Learning Experience
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="w-80 h-1 bg-green mx-auto mt-4 rounded-full"
        ></motion.div>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
        >
          Education never stops in tech. Here's my formal education and
          continuous learning path that shaped my expertise.
        </motion.p>
      </motion.div>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            custom={index}
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <motion.div
                className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-white border border-neutral-300 shadow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  className="w-9 h-9 rounded-full object-contain"
                  src={item.img}
                  alt={item.title}
                />
              </motion.div>

              <div className="flex-col hidden gap-2 font-bold md:flex md:pl-20 md:text-4xl">
                <motion.h3
                  className="text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.date}
                </motion.h3>
                <motion.h3
                  className="text-3xl text-neutral-400"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.title}
                </motion.h3>
                <motion.h3
                  className="text-xl text-neutral-500"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.job}
                </motion.h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <motion.div
                className="block mb-4 font-bold text-left text-neutral-300 md:hidden"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </motion.div>
              {item.contents.map((content, index) => (
                <motion.p
                  className="mb-3 font-normal text-neutral-600"
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {content}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Animated timeline track */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#c0e853] via-[#a2d81b] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
