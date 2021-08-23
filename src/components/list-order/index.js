import { message } from "antd";
import React, { useEffect, useState } from "react";
import { confirmOrderApi } from "../../api/order";
import Loading from "../loading";
import ListOrderItem from "./../../components/list-order-item";

function ListOrder(props) {
  const [listOrder, setListOrder] = useState();

  useEffect(() => {
    setListOrder(props.data);
  }, [props]);

  const handleConfirmOrder = async (id) => {
    try {
      const res = await confirmOrderApi(id);
      if (res.status === 200) {
        message.success("You confirmed success");
        setListOrder((pre) => pre.filter((item) => item.id !== id));
      }
    } catch (error) {}
  };

  return (
    <div className="order-page__container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>ID</th>
            <th style={{ width: "40%" }}>Product</th>
            <th style={{ width: "20%" }}>Image</th>
            <th style={{ width: "15%" }}>Price</th>
            <th style={{ width: "20%" }}>Transport</th>
          </tr>
        </thead>
      </table>

      {listOrder ? (
        listOrder.length === 0 ? (
          "No order list"
        ) : (
          listOrder.map((item, index) => (
            <ListOrderItem
              key={index}
              data={item}
              handleConfirmOrder={handleConfirmOrder}
            />
          ))
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ListOrder;
