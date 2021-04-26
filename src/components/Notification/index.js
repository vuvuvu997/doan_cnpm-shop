import React from "react";

function Notification(props) {
  return (
    <div className="header__notify">
      <h3 className="header__notify__header">Thông báo mới nhận</h3>
      <a href="#1" className="header__notify__body">
        <img
          className="header__notify__img"
          src="https://cf.shopee.vn/file/b4e3bf1bf8878544b50a58ae0cc34e6c"
          alt="thoi trang nu"
        />
        <div className="header__notify__description">
          <h3 className="header__notify__title">Bạn nói shoppe nghe!</h3>
          <p className="header__notify__content">
            Quảng cáo của Shopoe có làm bạn say mê! Chia sẻ ý kiến của bạn đây
            nhé!
          </p>
        </div>
      </a>
      <a href="#1" className="header__notify__body">
        <img
          className="header__notify__img"
          src="https://cf.shopee.vn/file/b4e3bf1bf8878544b50a58ae0cc34e6c"
          alt="thoi trang nu"
        />
        <div className="header__notify__description">
          <h3 className="header__notify__title">Bạn nói shoppe nghe!</h3>
          <p className="header__notify__content">
            Quảng cáo của Shopoe có làm bạn say mê!
          </p>
        </div>
      </a>
      <a href="#1" className="header__notify__body">
        <img
          className="header__notify__img"
          src="https://cf.shopee.vn/file/b4e3bf1bf8878544b50a58ae0cc34e6c"
          alt="thoi trang nu"
        />
        <div className="header__notify__description">
          <h3 className="header__notify__title">Bạn nói shoppe nghe!</h3>
          <p className="header__notify__content">
            Quảng cáo của Shopoe có làm bạn say mê! Chia sẻ ý kiến của bạn đây
            nhé!
          </p>
        </div>
      </a>
      <a href="#1" className="header__notify__more">
        Xem thêm
      </a>
    </div>
  );
}

export default Notification;
