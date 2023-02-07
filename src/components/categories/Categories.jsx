import { useContext } from "react";

import "./Categories.scss";

import CategoryList from "../category-list/CategoryList";

import { CategoryListContext } from "../../context/category-list.context";

import { ReactComponent as ChevronRightSVG } from "../../assets/chevron-right.svg";

import { ReactComponent as ChevronLeftSVG } from "../../assets/chevron-left.svg";

const Categories = () => {
  const { outOfLeftView, outOfRightView } = useContext(CategoryListContext);

  return (
    <div className="Categories">
      <div className={`gradient ${outOfLeftView ? "show" : "hide"}`}>
        <button>
          <ChevronLeftSVG />
        </button>
      </div>
      <CategoryList />
      <div className={`gradient ${outOfRightView ? "show" : "hide"}`}>
        <button>
          <ChevronRightSVG />
        </button>
      </div>
      <div className="Filters">
        <h6>
          <i className="fa-solid fa-sliders" /> Filters
        </h6>
      </div>
    </div>
  );
};

export default Categories;
