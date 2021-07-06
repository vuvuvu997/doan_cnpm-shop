import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import { shopApi } from "../../api/shopApi";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../../actions/shop";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const infoShop = useSelector((state) => state.shop);
  const handleLogout = () => {
    localStorage.removeItem("authentication_token_shop");
    dispatch(actions.getProfileShop({}));
    history.push("/login");
  };
  useEffect(() => {
    const fetchPropertiesShopApi = async () => {
      try {
        const response = await shopApi.getShopUser();
        dispatch(actions.getProfileShop(response));
      } catch (error) {}
    };
    fetchPropertiesShopApi();
  }, [dispatch]);
  return (
    <div className="header d-flex justify-content-space-between align-items-center ">
      <div className="header__left">
        <span className="ext-primary">SHOP ECO</span>
        <span>Kênh Người Bán</span>
      </div>
      <div className="header__right">
        {!infoShop.owner ? (
          <div className="header__right__no-author">
            <div className="header__right__author__img">
              <img src="../images/person-icon.png" alt="img" />
            </div>
            <div className="header__right__author__name">Đăng nhập </div>
          </div>
        ) : (
          <div className="header__right__author d-flex align-items-center">
            <div className="header__right__author__img">
              <img src="../images/person-icon.png" alt="img" />
            </div>
            <div className="header__right__author__name">{infoShop.owner}</div>
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
