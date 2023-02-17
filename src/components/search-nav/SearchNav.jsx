import { useDispatch, useSelector } from "react-redux";

import { selectSearchNavClicked } from "../../store/navigation/navigation.selectors";
import { toggleSearchNav } from "../../store/navigation/navigation.action";

import "./SearchNav.styles.scss";

const SearchNav = () => {
  // const { searchNavClicked, toggleSearchNav } = useContext(NavigationContext);
  const dispatch = useDispatch();
  const searchNavClicked = useSelector(selectSearchNavClicked);

  return (
    <div className="SearchBarContainer">
      {!searchNavClicked && (
        <div
          className="SearchBar"
          onClick={() => {
            dispatch(toggleSearchNav(!searchNavClicked));
          }}
        >
          <p>Anywhere</p>
          <p>Any week</p>
          <p>Add guests</p>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      )}
      {searchNavClicked && (
        <div className="Search">
          <div>
            <p>Stays</p>
            <p>Experiences</p>
            <p>Online Experiences</p>
          </div>
          <div className="Preferences">
            <div>
              <p>
                Where<span>Search Destinations</span>
              </p>
              <p>
                Check In<span>Add dates</span>
              </p>
              <p>
                Check out<span>Add dates</span>
              </p>
              <p>
                Who<span>Add guests</span>
              </p>
            </div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchNav;
