import { tools } from "../data/tools";
import SectionHeading from "./SharedComponents/SectionHeading";
import ToolItem from "./ToolsComponents/ToolItem";
import { motion } from "motion/react";
import {
  END_VALUE,
  INITIAL_VALUE,
  MAIN_VARIANTS,
} from "../constants/mainAnimation";

function PremiumTools() {
  return (
    <motion.section
      className="flex flex-col items-center lg:items-start gap-4"
      variants={MAIN_VARIANTS}
      initial={INITIAL_VALUE}
      whileInView={END_VALUE}
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeading mainText="premium" highlightText="tools" />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {tools.map((tool) => (
          <ToolItem key={tool.id} tool={tool} />
        ))}
      </ul>
    </motion.section>
  );
}

export default PremiumTools;
