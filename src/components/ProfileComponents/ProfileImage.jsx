import React from "react";
import { profile } from "../../data/profile";

function ProfileImage() {
  return (
    <div className="w-3/5 mx-auto overflow-hidden rounded-2xl lg:rounded-3xl">
      <img src={profile.profileImage} alt="profile image" />
    </div>
  );
}

export default ProfileImage;
