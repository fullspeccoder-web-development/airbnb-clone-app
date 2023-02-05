import React from "react";
import { v4 } from "uuid";

import "./CategoryList.scss";

import CATEGORY_DATA from "../../categories.json";
import CategoryIcon from "../category-icon/CategoryIcon";

const CategoryList = () => {
  return (
    <div className="CategoryList">
      {CATEGORY_DATA.map((category, index) => (
        <CategoryIcon
          key={v4()}
          isActive={`${index === 0 && "active"}`}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryList;
