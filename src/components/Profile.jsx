import Name from "./ProfileComponents/Name";
import ProfileImage from "./ProfileComponents/ProfileImage";
import ProfileLinks from "./ProfileComponents/ProfileLinks";
import ProfileSummary from "./ProfileComponents/ProfileSummary";

function Profile() {
  return (
    <section className="flex flex-col w-full justify-center bg-surface-light text-content-primary">
      <div className="py-5 space-y-6">
        <div className="flex flex-col gap-6">
          <ProfileImage />
          <Name />
        </div>

        <ProfileSummary />

        <ProfileLinks />
      </div>
    </section>
  );
}

export default Profile;
