import { createContext, useState } from "react";

export const NavigationContext = createContext({
  profileClicked: false,
  setProfileClicked: () => {},
  searchNavClicked: false,
  setSearchNavClicked: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [profileClicked, setProfileClicked] = useState(false);
  const [searchNavClicked, setSearchNavClicked] = useState(false);
  const value = {
    profileClicked,
    setProfileClicked,
    searchNavClicked,
    setSearchNavClicked,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
