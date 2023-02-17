import { useDispatch, useSelector } from "react-redux";

import "./Profile.styles.scss";

import UserDropdown from "../user-dropdown/UserDropdown";

import { selectProfileClicked } from "../../store/navigation/navigation.selectors";
import { toggleProfile } from "../../store/navigation/navigation.action";

const Profile = () => {
  const dispatch = useDispatch();
  const profileClicked = useSelector(selectProfileClicked);

  const clickHandler = () => {
    dispatch(toggleProfile(!profileClicked));
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
