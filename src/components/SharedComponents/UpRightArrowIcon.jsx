import Icon from "./Icon";

function UpRightArrowIcon() {
  return (
    <div className="hidden md:flex relative">
      <Icon
        name="upRightArrow"
        className=" absolute top-6 group-hover:top-4 end-6 group-hover:end-2 text-accent-primary duration-medium"
      />
    </div>
  );
}

export default UpRightArrowIcon;
