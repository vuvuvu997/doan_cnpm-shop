import React, { useEffect, useState } from "react";
import { categoryAPI } from "../../api/categoryAPI";
import CategoryItem from "../categoryItem";
import "./category.css";
function showCategories(categories) {
  let result = null;
  if (categories.length > 0) {
    result = categories.map((item) => {
      return (
        <CategoryItem
          key={item.id}
          id={item.id}
          categoryName={item.name}
          categoryThumbnail={item.link_image}
        />
      );
    });
  }
  return result;
}

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let fetchCategoriesAPI = async () => {
      try {
        const response = await categoryAPI.getAll();
        setCategories(response.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoriesAPI();
  }, []);
  if (categories.length === 0)
    return <p style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</p>;
  return <div className="row no-gutters">{showCategories(categories)}</div>;
}

export default Category;
