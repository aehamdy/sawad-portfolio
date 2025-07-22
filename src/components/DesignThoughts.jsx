import { thoughts } from "../data/thoughts";
import Thought from "./DesignThoughtsComponents/Thought";
import SectionHeading from "./SharedComponents/SectionHeading";
import { motion } from "motion/react";
import {
  END_VALUE,
  INITIAL_VALUE,
  MAIN_VARIANTS,
} from "../constants/mainAnimation";

function DesignThoughts() {
  return (
    <motion.section
      className="flex flex-col items-center lg:items-start"
      variants={MAIN_VARIANTS}
      initial={INITIAL_VALUE}
      whileInView={END_VALUE}
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeading mainText="design" highlightText="thoughts" />

      <ul className="space-y-8">
        {thoughts.map((thought) => (
          <Thought key={thought.id} thought={thought} />
        ))}
      </ul>
    </motion.section>
  );
}

export default DesignThoughts;
