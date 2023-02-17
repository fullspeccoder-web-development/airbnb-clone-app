const INTIAL_STATE = {
  profileClicked: false,
  searchNavClicked: false,
};

export const navigationReducer = (state = INTIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case "TOGGLE_PROFILE":
      return {
        ...state,
        searchNavClicked: false,
        profileClicked: !state.profileClicked,
      };
    case "TOGGLE_SEARCH_NAV":
      return {
        ...state,
        profileClicked: false,
        searchNavClicked: !state.searchNavClicked,
      };
    default:
      return state;
  }
};
