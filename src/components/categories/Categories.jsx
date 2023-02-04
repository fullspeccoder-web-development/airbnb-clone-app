import { v4 } from "uuid";

import "./Categories.scss";

import CATEOGORY_DATA from "../../categories.json";

const Categories = () => {
  return (
    <div className="Categories">
      <div className="CategoryList">
        {CATEOGORY_DATA.map((category, index) => (
          <div key={v4()} className={`${index === 0 && "active"}`}>
            <i className={`fa-solid fa-${category.icon}`} />
            <h6>{category.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
