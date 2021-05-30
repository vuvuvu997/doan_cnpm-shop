import React from "react";
import Table from "react-bootstrap/Table";
import OrderItem from "../order-item";
import "./style.css";

function showOrder(listOrder) {
  let result = null;
  if (listOrder.length > 0) {
    result = listOrder.map((item) => {
      return <OrderItem key={item.id} data={item} />;
    });
  }
  return result;
}

function Order(props) {
  const listOrder = props.order;
  return (
    <Table striped bordered hover className="order__table">
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
      </thead>
      <tbody>{showOrder(listOrder)}</tbody>
    </Table>
  );
}

export default Order;
