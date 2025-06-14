import { Link } from "react-router-dom";
import UpRightArrowIcon from "../SharedComponents/UpRightArrowIcon";
import ListItemParagraph from "../SharedComponents/ListItemParagraph";
import ListItemHeading from "../SharedComponents/ListItemHeading";

function ProjectItem({ project }) {
  return (
    <li className="group relative hover:bg-prominent rounded-md overflow-hidden">
      <Link to={project.link} className="flex justify-between p-5 md:p-6">
        <div className="flex gap-4 md:gap-6">
          <div className="w-[130px] h-[70px] md:h-[100px] overflow-hidden rounded-md">
            <img
              src={project.image}
              alt={`${project.name} project image`}
              className="object-cover"
            />
          </div>

          <div className="text-start">
            <ListItemHeading text={project.name} />

            <ListItemParagraph text={project.description} />
          </div>
        </div>

        <UpRightArrowIcon />
      </Link>
    </li>
  );
}

export default ProjectItem;
