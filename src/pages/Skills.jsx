import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { SkillsInfo } from "../constants";

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
  return (
    <div className="container mx-auto" id="skill">
      <div className="items-start mt-25 md:mt-35 c-space">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Technologies I Use</h2>
          <div className="w-32 h-1 bg-green mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A diverse toolkit to tackle any challenge. Here are the technologies
            and methodologies I specialize in.
          </p>
        </div>
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
