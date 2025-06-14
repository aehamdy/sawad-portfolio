import { Link } from "react-router-dom";
import UpRightArrowIcon from "../SharedComponents/UpRightArrowIcon";
import ListItemHeading from "../SharedComponents/ListItemHeading";
import ListItemParagraph from "../SharedComponents/ListItemParagraph";

function Thought({ thought }) {
  return (
    <li className="">
      <Link
        to={thought.link}
        className="group flex flex-col gap-4 py-6 px-2 lg:px-6 hover:bg-prominent rounded-xl duration-medium"
      >
        <div className="flex justify-between gap-16">
          <div className="space-y-3 md:w-[70%] text-start">
            <ListItemHeading text={thought.title} />

            <ListItemParagraph text={thought.description} />
          </div>

          <UpRightArrowIcon />
        </div>

        <div className="flex justify-between text-content-primary">
          <p>{thought.date}</p>

          <p>{thought.duration} min read</p>
        </div>
      </Link>
    </li>
  );
}

export default Thought;
