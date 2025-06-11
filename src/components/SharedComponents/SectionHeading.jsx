import Heading from "./Heading";

function SectionHeading({ mainText, highlightText }) {
  return (
    <Heading
      as="h1"
      className="main-heading flex flex-col items-center lg:items-start w-fit font-bold text-heading-primary uppercase leading-10 sm:leading-12 lg:leading-20"
    >
      {mainText} <span className="text-heading-secondary">{highlightText}</span>
    </Heading>
  );
}

export default SectionHeading;
