import { createContext, useState } from "react";

export const CategoryListContext = createContext({
  outOfLeftView: false,
  setOutOfLeftView: () => {},
  outOfRightView: true,
  setOutOfRightView: () => {},
});

export const CategoryListProvider = ({ children }) => {
  const [outOfLeftView, setOutOfLeftView] = useState(false);
  const [outOfRightView, setOutOfRightView] = useState(true);

  const value = {
    outOfLeftView,
    setOutOfLeftView,
    outOfRightView,
    setOutOfRightView,
  };

  return (
    <CategoryListContext.Provider value={value}>
      {children}
    </CategoryListContext.Provider>
  );
};
