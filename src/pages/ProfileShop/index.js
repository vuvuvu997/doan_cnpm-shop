import React from "react";
import CreateShopForm from "./../../components/crate-shop-form";
import "./style.scss";

function ProfileShop(props) {
  return (
    <div className="profile-shop-page pd-12">
      <div className="profile-shop-page__header">
        <h1>Hồ Sơ Shop</h1>
        <p className="profile-shop-page__desc">
          Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn
        </p>
        <p className="profile-shop-page__link text-center">
          <a href="#1">Thông tin cơ bản</a>
        </p>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="profile-shop-page__bg pd-12">
            <div className="profile-shop-page__bg__img">
              <img
                src="https://lh3.googleusercontent.com/proxy/mKDqwNi_9Az5TVYx6RVfD6f_f9eH10mJHPGXc6Cv5ljFaP2JCW1d8OwiGcofynKQcCUD3q2KHcZnkGkGUgD5I5V2Yc7bVdhHvxhUwgscTxkOXJkpeyA"
                alt="bg shop"
              />
            </div>
            <ul>
              <li>
                <i className="fas fa-gift"></i>Sản phẩm <span>0</span>
              </li>
              <li>
                <i className="far fa-comment-dots"></i>Tỉ lệ phản hồi{" "}
                <span>57%</span>
              </li>
              <li>
                <i className="far fa-clock"></i>Thời gian phản hồi{" "}
                <span>Trong vòng vài tiếng</span>
              </li>
              <li>
                <i className="far fa-star"></i>Đánh Giá Shop <span>0</span>
              </li>
              <li>
                <i className="fas fa-book"></i>Tỉ lệ đơn không thành công{" "}
                <span>0,00%</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <div className="profile-shop-page__form">
            <CreateShopForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileShop;
