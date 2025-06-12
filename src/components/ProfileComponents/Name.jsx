import { profile } from "../../data/profile";

function Name() {
  return (
    <h3 className="font-bold text-3xl lg:text-4xl text-prominent">
      {profile.name}
    </h3>
  );
}

export default Name;
