import React from "react";
import "./introduce.scss";
import ChartClickEvents from "./../../components/chart";
function Introduce(props) {
  return (
    <div className="introduce-page">
      <section className="todo-list">
        <h2>Danh sách cần làm</h2>
        <p>Những việc bạn sẽ phải làm</p>
        <div className="todo-list__container">
          <div className="todo-list__item text-center">
            <span>0</span>
            <span>Chờ Xác Nhận</span>
          </div>
          <div className="todo-list__item text-center">
            <span>0</span>
            <span>Chờ Lấy hàng</span>
          </div>
          <div className="todo-list__item text-center">
            <span>0</span>
            <span>Đã xử lý</span>
          </div>
          <div className="todo-list__item text-center boder-none">
            <span>0</span>
            <span>Đơn hủy</span>
          </div>
          <div className="todo-list__item text-center">
            <span>0</span>
            <span>Trả hàng/ Hoàn tiền chờ xử lý</span>
          </div>
          <div className="todo-list__item text-center">
            <span>0</span>
            <span>Spản phẩm bị tạm khóa</span>
          </div>
          <div className="todo-list__item text-center">
            <span>0</span>
            <span>Sản phẩm hết hàng</span>
          </div>
          <div className="todo-list__item text-center boder-none">
            <span>0</span>
            <span>Chương trình khuyến mãi chờ xử lý</span>
          </div>
        </div>
      </section>
      <section className="introduce-page__chart mt-50">
        <div className="introduce-page__chart__title">
          <h2>Phân Tích Bán Hàng( Hôm nay 00:00 GMT+7 11:00 )</h2>
          <p>Dữ liệu tổng quan về các đơn đã đặt</p>
        </div>
        <div className="row">
          <div className="col-7">
            <ChartClickEvents />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduce;
