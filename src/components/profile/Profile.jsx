import { useState } from "react";
import UserDropdown from "../user-dropdown/UserDropdown";
import "./Profile.styles.scss";

const Profile = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
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
        {clicked && <UserDropdown />}
      </div>
    </>
  );
};

export default Profile;
