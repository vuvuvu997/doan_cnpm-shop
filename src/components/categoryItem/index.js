import React from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { id, categoryName, categoryThumbnail } = props;
  return (
    <div className="col l-1-2">
      <Link to={`/${id}/listProduct`} className="category__title-item">
        <div className="category__title-img">
          <img src={categoryThumbnail} alt={categoryName} />
        </div>
        <p className="category__title-name">{categoryName}</p>
      </Link>
    </div>
  );
}

export default CategoryItem;
