import { ProfileContainer, IconContainer } from "./Profile.styles";

const Profile = () => {
  return (
    <ProfileContainer>
      <IconContainer>
        <i className="fa-solid fa-bars"></i>
      </IconContainer>
      <IconContainer>
        <i className="fa-solid fa-circle-user"></i>
      </IconContainer>
    </ProfileContainer>
  );
};

export default Profile;
