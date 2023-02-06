import { useContext } from "react";

import "./Categories.scss";

import CategoryList from "../category-list/CategoryList";

import { CategoryListContext } from "../../context/category-list.context";

const Categories = () => {
  const { outOfLeftView, outOfRightView } = useContext(CategoryListContext);

  return (
    <div className="Categories">
      <div className={`gradient ${outOfLeftView ? "show" : "hide"}`}>
        <button>
          <i className="fa-solid fa-chevron-left" />
        </button>
      </div>
      <CategoryList />
      <div className={`gradient ${outOfRightView ? "show" : "hide"}`}>
        <button>
          <i className="fa-solid fa-chevron-right" />
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
