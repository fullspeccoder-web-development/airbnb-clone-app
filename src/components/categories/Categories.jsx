import "./Categories.scss";

import CategoryList from "../category-list/CategoryList";

const Categories = () => {
  return (
    <div className="Categories">
      <button>
        <i className="fa-solid fa-chevron-left" />
      </button>
      <CategoryList />
      <button>
        <i className="fa-solid fa-chevron-right" />
      </button>
      <div className="Filters">
        <h6>
          <i className="fa-solid fa-sliders" /> Filters
        </h6>
      </div>
    </div>
  );
};

export default Categories;
