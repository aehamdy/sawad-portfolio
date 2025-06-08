import { BsFire } from "react-icons/bs";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiDribbble,
  FiEdit,
  FiFolder,
  FiHome,
  FiInstagram,
  FiLayers,
  FiLayout,
  FiMail,
  FiTool,
  FiTwitter,
} from "react-icons/fi";

const iconMap = {
  home: FiHome,
  folder: FiFolder,
  briefcase: FiBriefcase,
  settings: FiTool,
  edit: FiEdit,
  rightArrow: FiArrowRight,
  upRightArrow: FiArrowUpRight,
  layers: FiLayers,
  layout: FiLayout,
  dribbble: FiDribbble,
  twitter: FiTwitter,
  instagram: FiInstagram,
  envelope: FiMail,
  fire: BsFire,
};
function Icon(name, size = 21, className = "") {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(
      `Icon "${name}" is not defined in iconMap. Check your name prop or iconMap.`
    );
  }

  return <IconComponent size={size} className={className} />;
}

export default Icon;
