import { useContext } from "react";

import "./CategoryList.scss";

import CategoryIcon from "../category-icon/CategoryIcon";

import CATEGORY_DATA from "../../categories.json";
import { useDispatch } from "react-redux";
import {
  setOutOfLeftView,
  setOutOfRightView,
} from "../../store/categories/categories.action";

const CategoryList = () => {
  const dispatch = useDispatch();

  const scrollHandler = (evt) => {
    const scrollDistance = evt.target.scrollLeft;

    scrollDistance > 15
      ? dispatch(setOutOfLeftView(true))
      : dispatch(setOutOfLeftView(false));
    scrollDistance < 4737
      ? dispatch(setOutOfRightView(true))
      : dispatch(setOutOfRightView(false));
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
