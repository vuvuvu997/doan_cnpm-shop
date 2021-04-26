import React from "react";
import { Link } from "react-router-dom";

function showRating(rating) {
  const result = null;
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
  const { name, price, picture, rating, discount } = props;
  return (
    <div class="col l-2-4">
      <Link to="/1" class="productItem" href="#1">
        <div class="productItem__img">
          <img src={picture} alt="imageProduct" />
          <div></div>
        </div>

        <div class="productItem__content">
          <p class="productItem__description">{name}</p>
          <p>{showRating(rating)}</p>
          <div class="productItem__bottom">
            <span class="productItem__bottom-price">đ{price}</span>
            <span class="productItem__bottom-quantity">Đã bán 2.2k</span>
          </div>
        </div>
        <div class="productItem__discout">
          <span>{discount}%</span>
          <br></br>
          <span>GIẢM</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
