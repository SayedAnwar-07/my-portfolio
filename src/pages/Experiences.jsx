import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="container mx-auto" id="experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
