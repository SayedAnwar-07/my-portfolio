import { useState, useCallback } from "react";
import Project from "../components/projects/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = useCallback(
    (e) => {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    },
    [x, y]
  );

  const [preview, setPreview] = useState(null);

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id="projects">
      <motion.section
        onMouseMove={handleMouseMove}
        className="relative section-spacing"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
            My Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-40 h-1 bg-green mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
          >
            A collection of my work that demonstrates my skills, creativity, and
            problem-solving abilities.
          </motion.p>
        </motion.div>

        {/* Separator */}
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
        <div className="mt-12 grid gap-10">
          {myProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Project {...project} setPreview={setPreview} />
            </motion.div>
          ))}
        </div>

        {/* Preview Hover Image */}
        {preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-2xl pointer-events-none w-80"
            src={preview}
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.section>
    </div>
  );
};

export default Projects;
