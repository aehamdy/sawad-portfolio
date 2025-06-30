import SummaryIntro from "./SummaryComponents/SummaryIntro";
import SummaryAchievements from "./SummaryComponents/SummaryAchievements";
import SummaryBanners from "./SummaryComponents/SummaryBanners";
import { motion } from "motion/react";
import {
  MAIN_VARIANTS,
  INITIAL_VALUE,
  END_VALUE,
} from "../constants/mainAnimation";

function Summary() {
  return (
    <motion.section
      className="flex flex-col justify-start gap-[50px]"
      variants={MAIN_VARIANTS}
      initial={INITIAL_VALUE}
      whileInView={END_VALUE}
      viewport={{ once: true, amount: 0.25 }}
    >
      <SummaryIntro />

      <SummaryAchievements />

      <SummaryBanners />
    </motion.section>
  );
}

export default Summary;
