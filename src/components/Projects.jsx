import {
  MAIN_VARIANTS,
  INITIAL_VALUE,
  END_VALUE,
} from "../constants/mainAnimation";
import { projects } from "../data/projects";
import ProjectItem from "./ProjectComponents/ProjectItem";
import SectionHeading from "./SharedComponents/SectionHeading";
import { motion } from "motion/react";

function Projects() {
  return (
    <motion.section
      className="flex flex-col items-center md:items-start"
      variants={MAIN_VARIANTS}
      initial={INITIAL_VALUE}
      whileInView={END_VALUE}
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeading mainText="recent" highlightText="projects" />

      <ul className="w-full flex flex-col gap-5 md:gap-4">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </motion.section>
  );
}

export default Projects;
