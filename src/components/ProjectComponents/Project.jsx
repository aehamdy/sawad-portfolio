import { Link } from "react-router-dom";
import Icon from "../SharedComponents/Icon";

function Project({ project }) {
  return (
    <li className="group relative p-2 md:p-6 hover:bg-prominent rounded-md">
      <Link to={project.link} className="flex justify-between">
        <div className="flex gap-4 md:gap-6">
          <div className="w-[130px] h-[70px] md:h-[100px] overflow-hidden rounded-md">
            <img
              src={project.image}
              alt={`${project.name} project image`}
              className="object-cover"
            />
          </div>

          <div className="text-start">
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl text-white">
              {project.name}
            </h3>
            <p className="text-sm md:text-base text-content-primary">
              {project.description}
            </p>
          </div>
        </div>

        <div className="hidden md:flex absolute top-6 group-hover:top-4 end-6 group-hover:end-2 duration-medium">
          <Icon name="upRightArrow" className="text-accent-primary bottom-0" />
        </div>
      </Link>
    </li>
  );
}

export default Project;
