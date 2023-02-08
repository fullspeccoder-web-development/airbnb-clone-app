import React, { useContext } from "react";
import Categories from "../../components/categories/Categories";
import Headline from "../../components/headline/Headline";
import HomeList from "../../components/home-list/HomeList";
import Navigation from "../../components/navigation/Navigation";
import { NavigationContext } from "../../context/navigation.context";

const Home = () => {
  return (
    <>
      <Headline />
      <Navigation />
      <Categories />
      <HomeList />
    </>
  );
};

export default Home;
