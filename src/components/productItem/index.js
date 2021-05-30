import React from "react";
import { Link } from "react-router-dom";

function showRating(rating) {
  const result = [];
  if (rating === 0) return result;
  for (let i = 0; i < rating; i++) {
    result.push(<i class="fa fa-star" aria-hidden="true"></i>);
  }
  for (let i = rating; i < 5; i++) {
    result.push(<i class="fa fa-star-o" aria-hidden="true"></i>);
  }
  return result;
}

function ProductItem(props) {
  const { title, price, image, rating, discount, id, soldQuantity } = props;
  return (
    <Link to={"/productItem/" + id} class="productItem" href="#1">
      <div class="productItem__img">
        <img src={image} alt="imageProduct" />
        <div></div>
      </div>

      <div class="productItem__content">
        <p class="productItem__description">{title}</p>
        <p class="productItem__rating">{showRating(rating)}</p>
        <div class="productItem__bottom">
          <span class="productItem__bottom-price">
            {price} <ins>đ</ins>
          </span>
          <span class="productItem__bottom-quantity">
            Đã bán {soldQuantity}
          </span>
        </div>
      </div>
      <div class="productItem__discout">
        <span>{discount}%</span>
        <br></br>
        <span>GIẢM</span>
      </div>
    </Link>
  );
}

export default ProductItem;
