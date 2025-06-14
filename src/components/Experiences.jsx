import SectionHeading from "./SharedComponents/SectionHeading";
import ExperienceItem from "./ExperienceComponents/ExperienceItem";
import { experiences } from "../data/experiences";

function Experiences() {
  return (
    <section className="flex flex-col items-center lg:items-start">
      <SectionHeading mainText="12 years of" highlightText="experience" />

      <ul className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </ul>
    </section>
  );
}

export default Experiences;
