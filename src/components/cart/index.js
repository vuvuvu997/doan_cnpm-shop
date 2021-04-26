import React from "react";
import CartItem from "../cartItem";
import "./Cart.css";

function Cart(props) {
  return (
    <div class="container padding-top-120">
      <div class="grid wide">
        <div class="checkout">
          <h2 class="checkout__header">
            Giỏ hàng <span class="checkout__amount-product">(4 sản phẩm)</span>
          </h2>
          <div class="row">
            <div class="col l-9">
              <div class="checkout__body">
                <nav>
                  <a href="#1" class="checkout__body__link">
                    Tiki Tranding{" "}
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </nav>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
            </div>

            <div class="col l-3">
              <div class="checkout-info">
                <div class="checkout-info__user">
                  <p>
                    <span class="checkout-info__user__title">
                      Địa chỉ nhận hàng
                    </span>
                    <a href="#1" class="checkout-info__user__change">
                      Thay đổi
                    </a>
                  </p>
                  <p>
                    <span class="checkout-info__user__name">
                      Nguyễn Đăng Sang
                    </span>
                    <span class="checkout__item__price--separate"></span>
                    <span class="checkout-info__user__phone">0822477841</span>
                  </p>
                  <p class="checkout-info__user__address">
                    K42/30 Ngô Sĩ Liên, Phường Hòa Hiệp Bắc, Quận Liên Chiểu, Đà
                    Nẵng
                  </p>
                </div>
                <div class="checkout-info__discount">
                  <p>
                    <span>Tiki Khuyến Mãi</span>
                    <span>Có thể chọn 2</span>
                  </p>
                  <a class="checkout-info__discount__link" href="#1">
                    <i class="fa fa-ticket" aria-hidden="true"></i>Chọn hoặc
                    nhập Khuyến mãi
                  </a>
                </div>
                <div class="checkout-info__total">
                  <p class="checkout-info__total__temp">
                    <span>Tạm tính</span>
                    <span>57.515.000đ</span>
                  </p>
                  <p class="checkout-info__total__primary">
                    <span>Thành tiền</span>
                    <span>57.515.000đ</span>
                  </p>
                  <p class="checkout-info__total__more">
                    (Đã bao gồm VAT nếu có)
                  </p>
                </div>
                <button class="btn checkout-info__submit">
                  Tiến hành đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
