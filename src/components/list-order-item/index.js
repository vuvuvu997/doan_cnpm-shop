import React from "react";
import { Button, Popconfirm } from "antd";
import "./style.scss";

function ListOrderItem({ data, handleConfirmOrder }) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });

  const showListItem = (list, status) => {
    return list.map((item, index) => {
      return (
        <tr key={index}>
          <td style={{ width: "5%" }}>{item.id}</td>

          <td style={{ width: "40%" }}>{item.name}</td>
          <td style={{ width: "20%" }}>
            <img
              style={{
                height: "50px",
                objectFit: "contain",
                width: "auto",
              }}
              src={item.link_image}
              alt={item.name}
            />
          </td>
          <td style={{ width: "15%" }}>
            {formatter.format(item.price)}{" "}
            <strong>X {item.count_product_order}</strong>
          </td>
          <td style={{ width: "20%" }}>Giao hàng trực tiếp</td>
        </tr>
      );
    });
  };

  function confirm(e) {
    handleConfirmOrder(e);
  }

  return (
    <table className="listOrderItem">
      <tr>
        <th colspan="5" className="listOrderItem__info">
          <div>
            <span>ID Đơn hàng: {data.id}</span>
            <span>Ngày đặt hàng: {data.created_at}</span>
            <span>Total price: {formatter.format(data.total_price)}</span>
            <span>Status: {data.order_status}</span>
            {data.order_status === "Chờ xác nhận" && (
              <Popconfirm
                title="Is order confirmed??"
                onConfirm={() => confirm(data.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button>Confirm</Button>
              </Popconfirm>
            )}
          </div>
        </th>
      </tr>
      {data.products
        ? showListItem(data.products, data.order_status)
        : "No have order"}
    </table>
  );
}

export default ListOrderItem;
