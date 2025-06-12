import Name from "./ProfileComponents/Name";
import ProfileImage from "./ProfileComponents/ProfileImage";
import ProfileLinks from "./ProfileComponents/ProfileLinks";
import ProfileSummary from "./ProfileComponents/ProfileSummary";

function Profile() {
  return (
    <section className="h-full flex flex-col justify-center bg-surface-light text-content-primary">
      <div className="py-10 space-y-6">
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
