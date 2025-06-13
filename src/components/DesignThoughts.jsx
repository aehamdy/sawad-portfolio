import { thoughts } from "../data/thoughts";
import Thought from "./DesignThoughtsComponents/Thought";
import SectionHeading from "./SharedComponents/SectionHeading";

function DesignThoughts() {
  return (
    <section className="">
      <SectionHeading mainText="design" highlightText="thoughts" />

      <ul className="space-y-8">
        {thoughts.map((thought) => (
          <Thought key={thought.id} thought={thought} />
        ))}
      </ul>
    </section>
  );
}

export default DesignThoughts;
