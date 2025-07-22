import ContactForm from "./ContactComponents/ContactForm";
import SectionHeading from "./SharedComponents/SectionHeading";
import { motion } from "motion/react";
import {
  END_VALUE,
  INITIAL_VALUE,
  MAIN_VARIANTS,
} from "../constants/mainAnimation";

function Contact() {
  return (
    <motion.section
      className="flex flex-col items-center lg:items-start gap-4"
      variants={MAIN_VARIANTS}
      initial={INITIAL_VALUE}
      whileInView={END_VALUE}
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeading mainText="let's work" highlightText="together" />

      <ContactForm />
    </motion.section>
  );
}

export default Contact;
