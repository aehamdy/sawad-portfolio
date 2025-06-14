import React from "react";
import { profile } from "../../data/profile";

function ProfileImage() {
  return (
    <div className="w-3/5 md:w-[33%] lg:w-[45%] mx-auto overflow-hidden rounded-2xl lg:rounded-3xl">
      <img
        src={profile.profileImage}
        alt="profile image"
        className="w-full h-auto object-cover object-center"
      />
    </div>
  );
}

export default ProfileImage;
