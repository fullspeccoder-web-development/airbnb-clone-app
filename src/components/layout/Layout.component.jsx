import React from "react";
import { Outlet } from "react-router-dom";
import Headline from "../headline/Headline";
import Navigation from "../navigation/Navigation";

const Layout = () => {
  return (
    <>
      <Headline />
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
