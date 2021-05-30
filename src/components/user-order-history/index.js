import React from "react";
import "./style.css";

function UserOrderHistory(props) {
  return (
    <div className="user-order-history">
      <h2>Đơn hàng của tôi</h2>
      <div className="user-order-history__container">
        <table>
          <thead>
            <th>Mã đơn hàng</th>
            <th>Ngày mua</th>
            <th>Sản phẩm</th>
            <th>Tổng tiền</th>
            <th>Trạng thái đơn hàng</th>
          </thead>
          <tbody>
            <tr>
              <td>953744251</td>
              <td>02/08/2019</td>
              <td>TotoChan Cô bé bên cửa sổ (Tái bản 2018)</td>
              <td>101.000 ₫</td>
              <td>Giao hàng thành công</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserOrderHistory;
