import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ImageShop from "../../assets/images/imageshop.jpg";
import * as actions from "./../../actions/shop";
import "./style.scss";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const infoShop = useSelector((state) => state.shop);

  const handleLogout = () => {
    sessionStorage.removeItem("authentication_token_shop");
    dispatch(actions.logout());
    history.push("/login");
  };

  return (
    <div className="header d-flex justify-content-space-between align-items-center ">
      <div className="header__left">
        <Link to={"/"} className="header__left__title">
          SHOP ECO
        </Link>
        <span>Kênh Người Bán</span>
      </div>
      <div className="header__right">
        {!infoShop.isLogin ? (
          <div className="header__right__no-author">
            <div className="header__right__author__img">
              <img src="../images/person-icon.png" alt="img" />
            </div>
            <div className="header__right__author__name">Đăng nhập </div>
          </div>
        ) : (
          <div className="header__right__author d-flex align-items-center">
            <div className="header__right__author__img">
              <img src={ImageShop} alt="img" />
            </div>
            <div className="header__right__author__name">
              {infoShop.name_shop ? infoShop.name_shop : infoShop.email}
            </div>
            <div className="header__right__author__control">
              <Link to="/portal/settings/shop/profile">
                <i className="fas fa-id-card-alt"></i>Hồ Sơ Shop
              </Link>
              <span onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Đăng Xuất
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
