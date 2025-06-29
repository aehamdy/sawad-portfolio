import Name from "./ProfileComponents/Name";
import ProfileImage from "./ProfileComponents/ProfileImage";
import ProfileLinks from "./ProfileComponents/ProfileLinks";
import ProfileSummary from "./ProfileComponents/ProfileSummary";
import { motion } from "motion/react";
import {
  END_VALUE,
  INITIAL_VALUE,
  MAIN_VARIANTS,
} from "../constants/mainAnimation";

function Profile() {
  return (
    <motion.section
      className="flex flex-col w-full justify-center bg-surface-light text-content-primary"
      variants={MAIN_VARIANTS}
      initial={INITIAL_VALUE}
      whileInView={END_VALUE}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="py-5 space-y-6">
        <div className="flex flex-col gap-6">
          <ProfileImage />
          <Name />
        </div>

        <ProfileSummary />

        <ProfileLinks />
      </div>
    </motion.section>
  );
}

export default Profile;
