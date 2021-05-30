import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { orderAPI } from "../../api/orderAPI";
import Order from "../../components/order";
import * as toastMessage from "./../../helpers/toastMessage";
import * as actionTypes from "./../../actions/cartAction";
import "./style.css";

function calTotalMoney(list) {
  let result = 0;
  if (list.length > 0) {
    result = list.reduce((sum, item) => {
      return sum + item.price * item.count;
    }, 0);
  }
  return result;
}

function Checkout(props) {
  const orderList = useSelector((state) => state.order);
  const userProfile = useSelector((state) => state.user);
  const [typePayment, setTypePayment] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  async function handleSubmitOrder() {
    const product_ids = orderList.map((item) => {
      return { id: item.id + "", count: item.count + "" };
    });
    const fullName = userProfile.first_name + " " + userProfile.last_name;
    const data = {
      full_name: fullName,
      phone_number: userProfile.phone_number,
      address: userProfile.address,
      pay_method_name: typePayment,
      product_ids: product_ids,
    };
    //console.log(JSON.stringify(data));
    try {
      await orderAPI.postOrder(data);
      toastMessage.toastSucces("Bạn đã đặt hàng thành công!");
      dispatch(actionTypes.deleteProductListWhenOrdered(orderList));
      history.push("/");
    } catch (error) {
      console.log(error);
      toastMessage.toastError("Oop! Đã xảy ra lỗi");
    }
  }
  return (
    <div className="order">
      <div className="grid wide">
        <h1 className="order__title">Thanh toán</h1>
        <div className="box-info-user">
          <h2 className="box-info-user__title">
            <i class="fa fa-map-marker" aria-hidden="true"></i> Địa Chỉ Nhận
            Hàng
          </h2>
          <p className="box-info-user__detail">
            <span>{userProfile.first_name + " " + userProfile.last_name}</span>
            <span> (+84) {userProfile.phone_number}</span>
            <span>{userProfile.address}</span>
            <span>Mặc Định</span>
            <Link className="box-info-user__link" to="/user/address">
              THAY ĐỔI
            </Link>
          </p>
        </div>
        <Order order={orderList} />
        <div className="order__paymemnt">
          <div className="order__payment__control">
            <h2>Phương thức thanh toán : </h2>
            <div className="order__paymemnt__type">
              <input
                type="radio"
                id="tienmat"
                name="typePayment"
                value="Thanh toán khi nhận hàng"
                onChange={(event) => setTypePayment(event.target.value)}
              />
              <label for="tienmat" className="btn-pay">
                Bằng tiền mặt
              </label>
              <input
                type="radio"
                id="the"
                name="typePayment"
                value="Thẻ tín dụng"
                onChange={(event) => setTypePayment(event.target.value)}
              />
              <label for="the" className="btn-pay">
                Thẻ ngân hàng
              </label>
            </div>
          </div>
          <div className="order__payment__bill">
            <div className="order__payment__bill__detail">
              <div className="row">
                <div className="col l-9"></div>
                <div className="col l-3">
                  <div className="order__payment__bill__info">
                    <p>
                      Tổng tiền hàng <span>₫ {calTotalMoney(orderList)}</span>
                    </p>
                    <p>
                      Phí vận chuyển <span>₫ 0</span>
                    </p>
                    <p className="order__payment__total">
                      Tổng thanh toán: <span>₫ {calTotalMoney(orderList)}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order__payment__bill__submit">
              <p>
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
                <a href="#!">Điều khoản Shopee</a>
              </p>
              <button
                class="btn checkout-info__submit btn--order"
                onClick={handleSubmitOrder}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
