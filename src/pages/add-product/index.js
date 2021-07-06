import React from "react";
import AddProductForm from "../../components/add-product-form";

function AddProductPage(props) {
  return (
    <div className="add-product-page pd-12">
      <h1>Thêm 1 sản phẩm mới</h1>
      <p>Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.</p>
      <AddProductForm />
    </div>
  );
}

export default AddProductPage;
