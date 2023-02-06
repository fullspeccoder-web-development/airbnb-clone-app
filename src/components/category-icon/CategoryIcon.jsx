import "./CategoryIcon.scss";

const CategoryIcon = ({ category, isActive }) => {
  const { image, title } = category;
  const activeClassName = isActive ? " active" : "";

  return (
    <div className={`CategoryIcon${activeClassName}`}>
      <img src={image} alt={title} />
      <h6>{title}</h6>
    </div>
  );
};

export default CategoryIcon;
