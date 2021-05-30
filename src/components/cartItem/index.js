import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionTypesCart from "./../../actions/cartAction";
import "./style.css";

function CartItem(props) {
  const token = localStorage.getItem("authentication_token");
  const myConfig = {
    headers: { Authorization: token },
  };
  const dispatch = useDispatch();
  const { id, name, price, link_image, count, isBought } = props.data;
  const [checkBought, setCheckBought] = useState(isBought);
  const [quantityItem, setQuantityItem] = useState(count);
  const handelChangeProduct = (value) => {
    setQuantityItem(quantityItem + value);
    if (token) {
      const changeProductAPI = async () => {
        await axios.post(
          "https://your-ecommerce.herokuapp.com/carts",
          { product_id: id, count: value },
          myConfig
        );
      };
      changeProductAPI();
    }
    dispatch(actionTypesCart.changeProductToCart({ value, id }));
  };

  const handleDeleteProductToCart = (id) => {
    dispatch(actionTypesCart.deleteProductToCart(id));
    if (token) {
      const deleteProductAPI = async () => {
        try {
          await axios.delete("https://your-ecommerce.herokuapp.com/carts", {
            headers: { Authorization: token },
            data: { product_id: id },
          });
        } catch (error) {
          console.log(error);
        }
      };
      deleteProductAPI();
    }
  };

  const handleCheckBought = (event) => {
    setCheckBought(event.target.checked);
    dispatch(
      actionTypesCart.isProductBought({
        id: id,
        isBought: event.target.checked,
      })
    );
  };

  return (
    <div class="checkout__item">
      <div class="row">
        <div class="col l-2">
          <a href="#1" class="checkout__item__link">
            <img src={link_image} alt={name} />
          </a>
        </div>
        <div class="col l-6">
          <div class="checkout__item__detail">
            <a class="checkout__item__detail__name" href="#1">
              {name}
            </a>
            <p class="checkout__item__detail__amount">Chỉ còn 2 sẩn phẩm</p>
            <div class="checkout__item__detail__action">
              <button
                className="checkout__item__detail__action__delete"
                onClick={() => handleDeleteProductToCart(id)}
              >
                Xóa
              </button>
              <input
                class="checkout__item__detail__action__checkbox"
                type="checkbox"
                name="checkboxBought"
                checked={checkBought}
                onChange={handleCheckBought}
                id={name}
              />
              <label class="checkout__item__detail__action__label" for={name}>
                Xác nhận mua
              </label>
            </div>
          </div>
        </div>
        <div class="col l-2">
          <div class="checkout__item__price">
            <p class="checkout__item__price--discount">
              {price - (price * 50) / 100}đ
            </p>
            <span class="checkout__item__price--original">{price}đ</span>
            <span class="checkout__item__price--separate"></span>
            <span class="checkout__item__discount">-{50}%</span>
          </div>
        </div>
        <div class="col l-2">
          <div class="checkout__item__action">
            <button
              disabled={quantityItem === 1 ? true : false}
              type="button"
              class={
                quantityItem === 1
                  ? "btn-disible checkout__item__action__btn-increase"
                  : "checkout__item__action__btn-increase"
              }
              onClick={() => handelChangeProduct(-1)}
            >
              -
            </button>
            <span class="checkout__item__action__display">{quantityItem}</span>
            <button
              class="checkout__item__action__btn-decrease"
              onClick={() => handelChangeProduct(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
