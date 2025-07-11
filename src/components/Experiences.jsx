import SectionHeading from "./SharedComponents/SectionHeading";
import ExperienceItem from "./ExperienceComponents/ExperienceItem";
import { experiences } from "../data/experiences";
import { motion } from "motion/react";
import {
  END_VALUE,
  INITIAL_VALUE,
  MAIN_VARIANTS,
} from "../constants/mainAnimation";

function Experiences() {
  return (
    <motion.section
      className="flex flex-col items-center lg:items-start"
      variants={MAIN_VARIANTS}
      initial={INITIAL_VALUE}
      whileInView={END_VALUE}
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeading mainText="12 years of" highlightText="experience" />

      <ul className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </ul>
    </motion.section>
  );
}

export default Experiences;
