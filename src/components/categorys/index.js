import React, { useEffect } from "react";
import CategoryItem from "../categoryItem";
import "./category.css";

function moveCategory(a) {
  let category = document.querySelector(".category__container");
  let btn_next_category = document.querySelector(".btn-moveCategory-next");
  let btn_back_category = document.querySelector(".btn-moveCategory-pre");
  if (a > 0) {
    category.style.animation = "nextCategory 0.5s ease-in-out";
    btn_back_category.style.display = "block";
    btn_next_category.style.display = "none";
  } else {
    category.style.animation = "backCategory 0.5s ease";
    btn_back_category.style.display = "none";
    btn_next_category.style.display = "block";
  }
}

function Category() {
  useEffect(() => {
    let btn_back_category = document.querySelector(".btn-moveCategory-pre");
    btn_back_category.style.display = "none";
  }, []);

  return (
    <div class="category">
      <h2 class="category__title">DANH MỤC</h2>
      <div className="category__container">
        <div class="row category__container--nowrap no-gutters">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
        <div class="row category__container--nowrap no-gutters">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
        <div class="group-btn-control-move">
          <span
            onClick={() => moveCategory(+1)}
            class="btn-control-move btn-moveCategory-next"
          >
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
          <span
            onClick={() => moveCategory(-1)}
            class="btn-control-move btn-moveCategory-pre"
          >
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Category;
