import React, { useEffect, useState } from "react";
import { productApi } from "../../api/product";
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

function ListProductBan(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getListProductBan = async () => {
      try {
        const res = await productApi.getProductBanApi();
        setList(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getListProductBan();
  }, []);

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
          {list.length === 0 ? (
            <p>No have product</p>
          ) : (
            showProductList(list.reverse())
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListProductBan;
