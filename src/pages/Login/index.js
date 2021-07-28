import React from "react";
import LoginForm from "./login-form";
import "./login.scss";
function LoginPage() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="login-page__left">
              <h1>Bán hàng chuyên nghiệp</h1>
              <p>
                Quản lý shop của bạn một cách hiệu quả hơn trên<br></br> Shopee
                với Shopee - Kênh Người bán
              </p>
              <div className="login-page__left__img">
                <img src="../images/login-img.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="login-page__right">
              <h3>Đăng nhập vào Kênh Người Bán</h3>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
