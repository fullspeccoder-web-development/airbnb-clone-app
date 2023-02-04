import { v4 } from "uuid";

import "./Categories.scss";

import CATEOGORY_DATA from "../../categories.json";
import CategoryList from "../category-list/CategoryList";

const Categories = () => {
  return (
    <div className="Categories">
      <CategoryList />
    </div>
  );
};

export default Categories;
