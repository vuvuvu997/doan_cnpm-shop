import React, { useEffect, useState } from "react";
import { fetchOrderListApi } from "../../api/order";
import Loading from "../loading";
import ListOrderItem from "./../../components/list-order-item";

function showListOrder(list) {
  let result = null;
  if (list.length > 0) {
    result = list.map((item, index) => {
      return <ListOrderItem key={index} data={item} />;
    });
  }
  return result;
}
function ListOrder(props) {
  const [listOrder, setListOrder] = useState();

  useEffect(() => {
    const getListOrder = async () => {
      try {
        const response = await fetchOrderListApi();
        setListOrder(response.orders);
      } catch (error) {
        console.log(error);
      }
    };
    getListOrder();
  }, []);
  return (
    <div className="order-page__container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "40%" }} scope="col">
              Sản phẩm
            </th>
            <th style={{ width: "15%" }} scope="col">
              Tổng Đơn hàng
            </th>
            <th style={{ width: "15%" }} scope="col">
              Trạng thái
            </th>
            <th style={{ width: "15%" }} scope="col">
              Vận chuyển
            </th>
            <th style={{ width: "15%" }} scope="col">
              Thao tác
            </th>
          </tr>
        </thead>
      </table>
      <table className="table table-hover">
        {listOrder ? (
          listOrder.length === 0 ? (
            "No order list"
          ) : (
            showListOrder(listOrder)
          )
        ) : (
          <Loading />
        )}
      </table>
    </div>
  );
}

export default ListOrder;
