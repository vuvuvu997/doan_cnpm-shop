import React from "react";
import CreateShopForm from "../../components/crate-shop-form";
import "./style.scss";

function CreateShopPage(props) {
  return (
    <div className="login-page create-shop-page mt-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="login-page__left create-shop-page__left">
              <h1>Bán hàng chuyên nghiệp</h1>
              <p>
                Quản lý shop của bạn một cách hiệu quả hơn trên<br></br> Shopee
                với Shopee - Kênh Người bán
              </p>
              <div className="login-page__left__img create-shop-page__left__img">
                <img src="../images/login-img.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="create-shop-page__right">
              <h1 className="text-center">Tạo kênh người bán bây giờ</h1>
              <CreateShopForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShopPage;
