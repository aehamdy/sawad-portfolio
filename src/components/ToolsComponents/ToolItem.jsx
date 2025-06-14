import ListItemHeading from "../SharedComponents/ListItemHeading";
import ListItemParagraph from "../SharedComponents/ListItemParagraph";

function ToolItem({ tool }) {
  return (
    <li className="flex gap-4">
      <div className="w-[60px] overflow-hidden">
        <img
          src={tool.image}
          alt={`${tool.name} image`}
          className="object-cover"
        />
      </div>

      <div className="text-start">
        <ListItemHeading text={tool.name} />
        <ListItemParagraph text={tool.purpose} />
      </div>
    </li>
  );
}

export default ToolItem;
