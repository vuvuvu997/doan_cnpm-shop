import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListProductItem from "../list-product-item";
import "./style.scss";

function showProductList(list) {
  let result = null;
  if (list.length > 0) {
    result = list.map((item) => {
      return <ListProductItem key={item.id} data={item} />;
    });
  }
  return result;
}

function ListProductRunOut(props) {
  const listProduct = useSelector((state) => state.product.list);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    setNewList(listProduct.filter((item) => item.count === 0));
  }, [listProduct]);

  return (
    <div className="list-product">
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "35%" }} scope="col">
              {" "}
              Tên sản phẩm
            </th>
            <th style={{ width: "15%" }} scope="col">
              Hình ảnh
            </th>
            <th style={{ width: "10%" }} scope="col">
              Gía
            </th>
            <th style={{ width: "10%" }} scope="col">
              Rating
            </th>
            <th style={{ width: "10%" }} scope="col">
              Đã bán
            </th>
            <th style={{ width: "10%" }} scope="col">
              Số lượng
            </th>
            <th style={{ width: "10%" }} scope="col">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {newList.length === 0 ? (
            <p>No have product</p>
          ) : (
            showProductList(newList.reverse())
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListProductRunOut;
