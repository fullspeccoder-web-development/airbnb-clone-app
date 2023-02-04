import { ProfileNavContainer } from "./ProfileNav.styles";

import Profile from "../profile/Profile";

const ProfileNav = () => {
  return (
    <ProfileNavContainer>
      <div>
        <span>Airbnb your home</span>
      </div>
      <div>
        <span>
          <i className="fa-solid fa-globe"></i>
        </span>
      </div>
      <Profile />
    </ProfileNavContainer>
  );
};

export default ProfileNav;
