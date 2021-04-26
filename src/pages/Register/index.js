import React from "react";
import { useSelector } from "react-redux";
import FormLogin from "../../components/FormLogin";
import FormRegister from "../../components/FormRegister";

function RegisterPage(props) {
  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLogin);

  const registerForm = userRegister.isRegister ? (
    userLogin.isLogin ? (
      ""
    ) : (
      <div class="container-dialog" id="login-page">
        <div class="content-dialog" id="login-dialog">
          <div class="row">
            <div class="col l-7">
              <div class="content-form">
                <h2 class="content-form__title">Xin chào,</h2>
                <p class="content-form__title-content">Đăng nhập tài khoản</p>
                <FormLogin />
                <a class="content-form-link-email" href="#1">
                  Đăng nhập bằng email
                </a>

                <div class="content-form__separate">
                  <span>Hoặc tiếp tục bằng</span>
                </div>
                <div class="content-form__social">
                  <a href="#1">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#1">
                    <i class="fa fa-google" aria-hidden="true"></i>
                  </a>
                  <a href="#1">
                    <img src="/images/icon-zalo.png" alt="" />
                  </a>
                </div>
                <p class="content-form__combine">
                  Bằng việc tiếp tục, bạn đã chấp nhận{" "}
                  <a href="http://">điều khoản sử dụng</a>
                </p>
              </div>
            </div>
            <div class="col l-5">
              <div class="content-right">
                <img
                  class="content-right__image"
                  src="/images/image-login-tiki.png"
                  alt=""
                />
                <div class="content-right__sologan">
                  <h3>Mua sắm tại Tiki</h3>
                  <p>Siêu ưu đãi mỗi ngày</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="exit-dialog"
            onClick={() => {
              handelExitButton();
            }}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
  ) : (
    <div class="container-dialog" id="register-page">
      <div class="content-dialog" id="register-dialog">
        <div class="row">
          <div class="col l-7">
            <div class="content-form">
              <h2 class="content-form__title">Xin chào,</h2>
              <p class="content-form__title-content">Đăng Ký tài khoản</p>
              <FormRegister />
              <a class="content-form-link-email" href="#1">
                Đăng nhập bằng email
              </a>
              <div class="content-form__separate">
                <span>Hoặc tiếp tục bằng</span>
              </div>
              <div class="content-form__social">
                <a href="#1">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#1">
                  <i class="fa fa-google" aria-hidden="true"></i>
                </a>
                <a href="#1">
                  <img src="/images/icon-zalo.png" alt="" />
                </a>
              </div>
              <p class="content-form__combine">
                Bằng việc tiếp tục, bạn đã chấp nhận{" "}
                <a href="http://">điều khoản sử dụng</a>
              </p>
            </div>
          </div>
          <div class="col l-5">
            <div class="content-right">
              <img
                className="content-right__image"
                src="/images/image-login-tiki.png"
                alt="login img"
              />
              <div class="content-right__sologan">
                <h3>Mua sắm tại Tiki</h3>
                <p>Siêu ưu đãi mỗi ngày</p>
              </div>
            </div>
          </div>
        </div>
        <button class="exit-dialog" onClick={() => handelExitButton()}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );

  return registerForm;
}
function handelExitButton() {
  const eleForm = document.getElementById("register-page");
  eleForm.style.display = "none";
}

export default RegisterPage;
