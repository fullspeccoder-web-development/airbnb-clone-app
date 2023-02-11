import { createContext, useReducer } from "react";

export const NavigationContext = createContext({
  profileClicked: false,
  setProfileClicked: () => {},
  searchNavClicked: false,
  setSearchNavClicked: () => {},
});

const STATE_TYPES = {
  TOGGLE_PROFILE_CLICKED: "TOGGLE_PROFILE_CLICKED",
  TOGGLE_SEARCH_NAV_CLICKED: "TOGGLE_SEARCH_NAV_CLICKED",
};

const INTIAL_STATE = {
  profileClicked: false,
  searchNavClicked: false,
};

const navigationReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "TOGGLE_PROFILE_CLICKED":
      return {
        ...state,
        searchNavClicked: false,
        profileClicked: !state.profileClicked,
      };
    case "TOGGLE_SEARCH_NAV_CLICKED":
      return {
        ...state,
        profileClicked: false,
        searchNavClicked: !state.searchNavClicked,
      };
    default:
      throw new Error(`unhandled type of ${type}`);
  }
};

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navigationReducer, INTIAL_STATE);
  const { profileClicked, searchNavClicked } = state;
  const toggleProfile = () => {
    dispatch({ type: STATE_TYPES.TOGGLE_PROFILE_CLICKED });
  };
  const toggleSearchNav = () => {
    dispatch({ type: STATE_TYPES.TOGGLE_SEARCH_NAV_CLICKED });
  };

  const value = {
    profileClicked,
    toggleProfile,
    searchNavClicked,
    toggleSearchNav,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
