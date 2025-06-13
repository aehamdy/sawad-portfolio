import { tools } from "../data/tools";
import SectionHeading from "./SharedComponents/SectionHeading";
import ToolItem from "./ToolsComponents/ToolItem";

function PremiumTools() {
  return (
    <section className="">
      <SectionHeading mainText="premium" highlightText="tools" />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {tools.map((tool) => (
          <ToolItem key={tool.id} tool={tool} />
        ))}
      </ul>
    </section>
  );
}

export default PremiumTools;
