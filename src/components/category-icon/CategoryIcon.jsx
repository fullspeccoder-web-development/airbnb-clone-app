import "./CategoryIcon.scss";

const CategoryIcon = ({ category, isActive }) => {
  const { icon, title } = category;
  return (
    <div className={`${isActive} CategoryIcon`}>
      <i className={`fa-solid fa-${icon}`} />
      <h6>{title}</h6>
    </div>
  );
};

export default CategoryIcon;
