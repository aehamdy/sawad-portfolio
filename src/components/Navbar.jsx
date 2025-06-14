import { navItems } from "../data/navItems";
import NavItem from "./NavbarComponents/NavItem";

function Navbar() {
  return (
    <nav className="w-fit my-6 mx-auto">
      <ul className="flex items-center gap-7 w-fit py-4 px-5 bg-surface-panel rounded-soft">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
