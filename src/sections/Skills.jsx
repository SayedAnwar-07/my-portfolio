import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { SkillsInfo } from "../constants";
import { motion } from "framer-motion";

const firstRow = SkillsInfo.slice(0, SkillsInfo.length / 2);
const secondRow = SkillsInfo.slice(SkillsInfo.length / 2);

const SkillCard = ({ logo, name }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] shadow-sm bg-gray-50 flex flex-col items-center justify-center"
      )}
    >
      <img src={logo} alt={name} className="h-12 w-12 mb-2" />
      <figcaption className="text-sm font-medium text-center text-black">
        {name}
      </figcaption>
    </figure>
  );
};

export default function Skills() {

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
    <div className="container mx-auto" id="skill">
      <div className="items-start mt-25 md:mt-35 c-space">
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
            Technologies I Use
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-64 h-1 bg-green mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
          >
            A diverse toolkit to tackle any challenge. Here are the technologies
            and methodologies I specialize in.
          </motion.p>
        </motion.div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
