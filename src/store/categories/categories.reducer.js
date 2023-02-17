const INTIAL_STATE = {
  outOfLeftView: false,
  outOfRightView: true,
};

export const categoriesReducer = (state = INTIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_OUT_OF_LEFT_VIEW":
      return {
        ...state,
        outOfLeftView: payload,
      };
    case "TOGGLE_OUT_OF_RIGHT_VIEW":
      return {
        ...state,
        outOfRightView: payload,
      };
    default:
      return state;
  }
};
