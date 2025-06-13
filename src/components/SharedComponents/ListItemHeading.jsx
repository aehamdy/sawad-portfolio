import Heading from "./Heading";

function ListItemHeading({ text }) {
  return (
    <Heading
      as="h3"
      className="font-semibold text-lg md:text-xl lg:text-2xl text-heading-primary"
    >
      {text}
    </Heading>
  );
}

export default ListItemHeading;
