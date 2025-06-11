import SectionHeading from "../SharedComponents/SectionHeading";

function SummaryIntro() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-3">
      <SectionHeading mainText="software" highlightText="engineer" />

      <p className="md:w-[55%] lg::w-[45%] text-content-primary text-base lg:text-lg text-center lg:text-start lg:line-clamp-3">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
    </div>
  );
}

export default SummaryIntro;
