import { projects } from "../data/projects";
import Project from "./ProjectComponents/Project";
import SectionHeading from "./SharedComponents/SectionHeading";

function Projects() {
  return (
    <section className="flex flex-col items-center md:items-start">
      <SectionHeading mainText="recent" highlightText="projects" />

      <ul className="w-full flex flex-col gap-3 md:gap-4">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
