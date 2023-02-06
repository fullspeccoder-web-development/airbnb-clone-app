import { useContext } from "react";

import "./CategoryList.scss";

import CategoryIcon from "../category-icon/CategoryIcon";

import CATEGORY_DATA from "../../categories.json";
import { CategoryListContext } from "../../context/category-list.context";

const CategoryList = () => {
  const { setOutOfLeftView, setOutOfRightView } =
    useContext(CategoryListContext);

  const scrollHandler = (evt) => {
    const scrollDistance = evt.target.scrollLeft;

    scrollDistance > 15 ? setOutOfLeftView(true) : setOutOfLeftView(false);
    scrollDistance < 4737 ? setOutOfRightView(true) : setOutOfRightView(false);
  };

  return (
    <div className="CategoryList" onScroll={scrollHandler}>
      {CATEGORY_DATA.map((category, index) => (
        <CategoryIcon
          key={category.id}
          isActive={index === 0}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryList;
