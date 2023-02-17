import { createContext, useReducer } from "react";

export const CategoryListContext = createContext({
  outOfLeftView: false,
  setOutOfLeftView: () => {},
  outOfRightView: true,
  setOutOfRightView: () => {},
});

const INTIAL_STATE = {
  outOfLeftView: false,
  outOfRightView: true,
};

const categoryReducer = (state, action) => {
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
      throw new Error(`unhandled error ${type}`);
  }
};

export const CategoryListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, INTIAL_STATE);
  const { outOfLeftView, outOfRightView } = state;

  const toggleOutOfLeftView = (bool) => {
    dispatch({ type: "TOGGLE_OUT_OF_LEFT_VIEW", payload: bool });
  };

  const toggleOutOfRightView = (bool) => {
    dispatch({ type: "TOGGLE_OUT_OF_RIGHT_VIEW", payload: bool });
  };

  const value = {
    outOfLeftView,
    toggleOutOfLeftView,
    outOfRightView,
    toggleOutOfRightView,
  };

  return (
    <CategoryListContext.Provider value={value}>
      {children}
    </CategoryListContext.Provider>
  );
};
