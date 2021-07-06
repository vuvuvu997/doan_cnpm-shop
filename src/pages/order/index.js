import React from "react";
import ListOrder from "./../../components/list-order";
import "./order.scss";

function Order(props) {
  return (
    <div className="order-page pd-12">
      <ul class="nav nav-tabs order-page__action">
        <li class="nav-item">
          <button
            class="btn btn-primary nav-link active"
            data-toggle="tab"
            href="#home"
          >
            Tất cả
          </button>
        </li>
        <li class="nav-item">
          <button
            class="btn btn-primary nav-link"
            data-toggle="tab"
            href="#menu1"
          >
            Chờ xác nhận
          </button>
        </li>
        <li class="nav-item">
          <button
            class="btn btn-primary nav-link"
            data-toggle="tab"
            href="#menu2"
          >
            Chờ lấy hàng
          </button>
        </li>
      </ul>

      <div class="tab-content">
        <div id="home" class="container tab-pane active">
          <h1>Đơn hàng</h1>
          <ListOrder />
        </div>
        <div id="menu1" class="container tab-pane fade">
          <h1>Đơn hàng</h1>
          <ListOrder />
        </div>
        <div id="menu2" class="container tab-pane fade">
          <h1>Đơn hàng</h1>
          <ListOrder />
        </div>
      </div>
    </div>
  );
}

export default Order;
