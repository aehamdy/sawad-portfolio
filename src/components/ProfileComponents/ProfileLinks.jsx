import { profile } from "../../data/profile";
import Icon from "../SharedComponents/Icon";

function ProfileLinks() {
  return (
    <div className="flex justify-center items-center gap-4">
      {profile.socialLinks.map((link) => (
        <a key={link.id} href={link.link} className="text-accent-primary">
          <Icon key={link.id} name={link.icon} className="" />
        </a>
      ))}
    </div>
  );
}

export default ProfileLinks;
