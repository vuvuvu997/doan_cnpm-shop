import React from "react";

function showListItem(list, status) {
  let result = null;
  if (list.length > 0) {
    result = list.map((item, index) => {
      return (
        <tr key={index}>
          <td style={{ width: "40%" }}>{item.name}</td>
          <td style={{ width: "15%" }}>{item.price} Đ</td>
          <td style={{ width: "15%" }}>{status}</td>
          <td style={{ width: "15%" }}>Giao hàng tiết kiệm</td>
          <td style={{ width: "15%" }}>Chuẩn bị hàng</td>
        </tr>
      );
    });
  }
  return result;
}
function ListOrderItem(props) {
  const { data } = props;
  console.log(data);
  return (
    <tbody>
      <tr>
        <th colSpan="3">ID Đơn hàng: {data.id}</th>
        <th colSpan="2">Ngày đặt hàng: {data.created_at}</th>
      </tr>
      {data.products
        ? showListItem(data.products, data.order_status)
        : "No have order"}
    </tbody>
  );
}

export default ListOrderItem;
