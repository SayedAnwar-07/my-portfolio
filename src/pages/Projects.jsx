import { useState } from "react";
import Project from "../components/projects/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id="projects">
      <motion.section
        onMouseMove={handleMouseMove}
        className="relative section-spacing"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-black"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            My Projects
          </motion.h2>
          <div className="w-32 h-1 bg-green mx-auto mt-4 rounded-full"></div>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A collection of my work that demonstrates my skills, creativity, and
            problem-solving abilities.
          </motion.p>
        </div>

        {/* Separator */}
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

        {/* Projects */}
        <motion.div
          className="mt-12 grid gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {myProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Project {...project} setPreview={setPreview} />
            </motion.div>
          ))}
        </motion.div>

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
