import "./CategoryIcon.scss";

const CategoryIcon = ({ category, isActive }) => {
  const { image, title } = category;
  return (
    <div className={`${isActive} CategoryIcon`}>
      <img src={image} alt={title} />
      <h6>{title}</h6>
    </div>
  );
};

export default CategoryIcon;
