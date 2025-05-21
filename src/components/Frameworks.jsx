import { OrbitingCircles } from "./OrbitingCircles";
import { SkillsInfo } from "../constants/index";

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30}>
        {SkillsInfo.map((skill, index) => (
          <Icon key={index} src={skill.logo} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={15} radius={100} reverse speed={2}>
        {SkillsInfo.map((skill, index) => (
          <Icon key={index} src={skill.logo} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
