import React from "react";
import ListOrder from "../../components/list-order";
import "./order.scss";

function Order(props) {
  return (
    <div className="order-page pd-12">
      <ul className="nav nav-tabs order-page__action">
        <li className="nav-item">
          <button
            className="btn btn-primary nav-link active"
            data-toggle="tab"
            href="#home"
          >
            Tất cả
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-primary nav-link"
            data-toggle="tab"
            href="#menu1"
          >
            Chờ xác nhận
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-primary nav-link"
            data-toggle="tab"
            href="#menu2"
          >
            Chờ lấy hàng
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div id="home" className="container tab-pane active">
          <h1>Đơn hàng</h1>
          <ListOrder />
        </div>
        <div id="menu1" className="container tab-pane fade">
          <h1>Đơn hàng</h1>
          <ListOrder />
        </div>
        <div id="menu2" className="container tab-pane fade">
          <h1>Đơn hàng</h1>
          <ListOrder />
        </div>
      </div>
    </div>
  );
}

export default Order;
