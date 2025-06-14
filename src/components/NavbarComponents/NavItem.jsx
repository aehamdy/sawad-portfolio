import { Link } from "react-router-dom";
import Icon from "../SharedComponents/Icon";

function NavItem({ item }) {
  return (
    <li className="group relative">
      <Link to={item.link} className="flex flex-col items-center">
        <Icon name={item.icon} />

        <span className="absolute bottom-0 translate-y-full group-hover:translate-y-[3.2rem] py-1 px-1.5 text-xs bg-surface-panel z-[-1] group-hover:z-10 opacity-0 group-hover:opacity-100 rounded-compact duration-medium">
          {item.label.charAt(0).toUpperCase() +
            item.label.slice(1).toLowerCase()}
        </span>
      </Link>
    </li>
  );
}

export default NavItem;
