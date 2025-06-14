import { projects } from "../data/projects";
import ProjectItem from "./ProjectComponents/ProjectItem";
import SectionHeading from "./SharedComponents/SectionHeading";

function Projects() {
  return (
    <section className="flex flex-col items-center md:items-start">
      <SectionHeading mainText="recent" highlightText="projects" />

      <ul className="w-full flex flex-col gap-5 md:gap-4">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
