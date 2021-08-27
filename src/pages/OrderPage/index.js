import React, { useEffect, useState } from "react";
import { fetchOrderListApi } from "../../api/order";
import ListOrder from "../../components/list-order";
import "./order.scss";

function Order(props) {
  const [listOrderAll, setListOrderAll] = useState();
  const [listOrderWait, setListOrderWait] = useState();
  const [listOrderConfirm, setListOrderConfirm] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    const getListOrder = async () => {
      try {
        const response = await fetchOrderListApi();
        setListOrderAll(response.orders);
        setListOrderWait(
          response.orders.filter((item) => item.order_status === "Chờ xác nhận")
        );
        setListOrderConfirm(
          response.orders.filter((item) => item.order_status === "Đã giao")
        );
      } catch (error) {
        console.log(error);
      }
    };
    getListOrder();
  }, [isUpdate]);

  const onUpdate = () => {
    setIsUpdate((pre) => !pre);
  };

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
            href="#choxacnhan"
          >
            Chờ xác nhận
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-primary nav-link"
            data-toggle="tab"
            href="#daxacnhan"
          >
            Đã xác nhận
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div id="home" className="container tab-pane active">
          <h1>Đơn hàng</h1>
          {listOrderAll && (
            <ListOrder onUpdate={onUpdate} data={listOrderAll} />
          )}
        </div>
        <div id="choxacnhan" className="container tab-pane fade">
          <h1>Đơn hàng</h1>
          {listOrderWait && (
            <ListOrder onUpdate={onUpdate} data={listOrderWait} />
          )}
        </div>
        <div id="daxacnhan" className="container tab-pane fade">
          <h1>Đơn hàng</h1>
          {listOrderConfirm && (
            <ListOrder onUpdate={onUpdate} data={listOrderConfirm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
