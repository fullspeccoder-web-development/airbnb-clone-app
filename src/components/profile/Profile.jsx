import { useContext } from "react";

import "./Profile.styles.scss";

import UserDropdown from "../user-dropdown/UserDropdown";

import { NavigationContext } from "../../context/navigation.context";

const Profile = () => {
  const { profileClicked, toggleProfile } = useContext(NavigationContext);

  const clickHandler = () => {
    toggleProfile(!profileClicked);
  };

  return (
    <>
      <div className="Profile" onClick={clickHandler}>
        <span className="IconContainer">
          <i className="fa-solid fa-bars"></i>
        </span>
        <span className="IconContainer">
          <i className="fa-solid fa-circle-user"></i>
        </span>
        {profileClicked && <UserDropdown />}
      </div>
    </>
  );
};

export default Profile;

// May create a Profile Context (things like notifications and such)
