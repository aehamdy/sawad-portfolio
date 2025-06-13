import { Link } from "react-router-dom";
import ListItemHeading from "../SharedComponents/ListItemHeading";
import ListItemParagraph from "../SharedComponents/ListItemParagraph";
import UpRightArrowIcon from "../SharedComponents/UpRightArrowIcon";

function ExperienceItem({ exp }) {
  return (
    <li>
      <Link
        to={exp.link}
        className="group flex justify-between py-6 px-4 hover:bg-prominent rounded-lg overflow-hidden duration-medium"
      >
        <div className="md:w-4/5 lg:w-[56%] space-y-3 text-start">
          <ListItemHeading text={exp.title} />

          <div className="space-y-3 text-content-primary text-start">
            <ListItemParagraph text={exp.description} />

            <p className="">
              {exp.date.from} - {exp.date.to}
            </p>
          </div>
        </div>

        <UpRightArrowIcon />
      </Link>
    </li>
  );
}

export default ExperienceItem;
