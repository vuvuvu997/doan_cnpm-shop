import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { shopApi } from "../../api/shopApi";
import LoginForm from "../../components/login-form";
import * as actions from "./../../actions/shop";
import "./login.scss";
function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = async (value) => {
    const data = { username: value.username, password: value.password };
    const response = await shopApi.login(data);
    if (response.authentication_token) {
      localStorage.setItem(
        "authentication_token_shop",
        response.authentication_token
      );
      try {
        // console.log(response);

        const res = await axios({
          method: "GET",
          url: "https://your-ecommerce.herokuapp.com/shops",
          headers: {
            Authorization: response.authentication_token,
          },
        });
        dispatch(actions.getProfileShop(res.data));
        if (res.data.message) {
          history.push("/shop/create");
        } else {
          history.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
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
              <h1>Đăng nhập vào Kênh Người Bán</h1>
              <LoginForm initialValues={initialValues} onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
