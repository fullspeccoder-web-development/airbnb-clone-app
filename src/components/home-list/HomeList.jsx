import { v4 } from "uuid";

import "./HomeList.scss";

import HomeCard from "../home-card/HomeCard";

import HOME_LIST from "../../data.json";

const HomeList = () => {
  return (
    <div className="HomeList">
      {HOME_LIST.map((home) => (
        <HomeCard key={v4()} home={home} />
      ))}
    </div>
  );
};

export default HomeList;
