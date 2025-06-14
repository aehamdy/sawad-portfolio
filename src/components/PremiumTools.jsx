import { tools } from "../data/tools";
import SectionHeading from "./SharedComponents/SectionHeading";
import ToolItem from "./ToolsComponents/ToolItem";

function PremiumTools() {
  return (
    <section className="flex flex-col items-center lg:items-start gap-4">
      <SectionHeading mainText="premium" highlightText="tools" />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {tools.map((tool) => (
          <ToolItem key={tool.id} tool={tool} />
        ))}
      </ul>
    </section>
  );
}

export default PremiumTools;
