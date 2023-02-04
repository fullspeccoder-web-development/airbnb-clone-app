import React from "react";

import { NavigationContainer } from "./Navigation.styles";

import Logo from "../logo/Logo";
import SearchNav from "../search-nav/SearchNav";
import ProfileNav from "../profile-nav/ProfileNav";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Logo />
      <SearchNav />
      <ProfileNav />
    </NavigationContainer>
  );
};

export default Navigation;
