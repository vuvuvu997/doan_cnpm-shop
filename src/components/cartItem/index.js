import React from "react";

function CartItem(props) {
  return (
    <div class="checkout__item">
      <div class="row">
        <div class="col l-2">
          <a href="#1" class="checkout__item__link">
            <img src="/images/products/product.jfif" alt="sản phẩm" />
          </a>
        </div>
        <div class="col l-6">
          <div class="checkout__item__detail">
            <a class="checkout__item__detail__name" href="#1">
              Smart Tivi QLED Samsung 4K 85 inch QA85Q70TA
            </a>
            <p class="checkout__item__detail__amount">Chỉ còn 2 sẩn phẩm</p>
            <div class="checkout__item__detail__action">
              <a href="http://">Xóa</a>
              <a href="http://">Để dành sau</a>
            </div>
          </div>
        </div>
        <div class="col l-2">
          <div class="checkout__item__price">
            <p class="checkout__item__price--discount">54.990.000đ</p>
            <span class="checkout__item__price--original">99.900.000đ</span>
            <span class="checkout__item__price--separate"></span>
            <span class="checkout__item__discount">-45%</span>
          </div>
        </div>
        <div class="col l-2">
          <div class="checkout__item__action">
            <button
              disabled
              type="button"
              class="checkout__item__action__btn-increase btn-disible"
            >
              -
            </button>
            <span class="checkout__item__action__display">1</span>
            <button class="checkout__item__action__btn-decrease">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
