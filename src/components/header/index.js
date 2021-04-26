import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userLogout } from "../../actions/userAction";
import FormSearch from "../FormSearch";
import Notification from "../Notification";
import "./Header.css";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [isPopupRes, setIsPopupRes] = useState(false);
  function handleLogout() {
    dispatch(userLogout());
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <div className="header">
      <div className="grid wide">
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__list-item navbar__list-item--separated">
              <a href="#1" className="navbar__link">
                Kênh người bán
              </a>
            </li>
            <li className="navbar__list-item navbar__list-item--separated">
              <a href="#1" className="navbar__link">
                Tải ứng dụng
              </a>
              <div className="navbar__qr">
                <img
                  src="/images/qr-code.png"
                  alt=""
                  className="navbar__qr-code"
                />
                <div className="navbar__qr-link">
                  <a href="#1" className="navbar__qr-link-download">
                    <img src="/images/apple-store.png" alt="Apple store" />
                  </a>
                  <a href="#1" className="navbar__qr-link-download">
                    <img src="/images/ch-play.png" alt="Apple store" />
                  </a>
                </div>
              </div>
            </li>
            <li className="navbar__list-item">
              Kết nối
              <a href="#2" className="navbar__link mg-l-8">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href="#4" className="navbar__link mg-l-8">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

          <ul className="navbar__list">
            <div className="row">
              <li className="navbar__list-item">
                <a href="#2" className="navbar__link">
                  <i className="fa fa-bell-o" aria-hidden="true"></i>
                  Thông báo
                </a>
                <Notification />
              </li>
              <li className="navbar__list-item">
                <a href="#1" className="navbar__link">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                  Trợ giúp
                </a>
              </li>
              {!userLogin.infoUser.username ? (
                <div>
                  <li className="navbar__list-item navbar__list-item--separated">
                    <button
                      id="register-btn"
                      onClick={() => showForm("register-btn")}
                      className="navbar__link navbar__link--bold"
                    >
                      Đăng ký
                    </button>
                    {/* {isPopupLogin && <RegisterPage />} */}
                  </li>
                  <li className="navbar__list-item ">
                    <button
                      id="login-btn"
                      className="navbar__link navbar__link--bold"
                      onClick={() => showForm("login-btn")}
                      //onClick={() => <LoginPage />}
                    >
                      Đăng nhập
                    </button>
                  </li>
                </div>
              ) : (
                <div>
                  <li className="navbar__list-item navbar__list-item--separated">
                    <Link className="navbar__link navbar__link--bold">
                      {userLogin.infoUser.username}
                    </Link>
                  </li>
                  <li className="navbar__list-item ">
                    <button
                      id="logout-btn"
                      onClick={handleLogout}
                      className="navbar__link navbar__link--bold"
                    >
                      Đăng xuất
                    </button>
                  </li>
                </div>
              )}
            </div>
          </ul>
        </nav>
        <div className="header__bottom">
          <div className="row">
            <div className="col l-2">
              <Link to="/" className="header__bottom-image" href="#1">
                Shop Eco
              </Link>
            </div>
            <div className="col l-8 ">
              <div className="header__bottom-body">
                {/* component form search */}
                <FormSearch />

                <nav className="navbar">
                  <ul className="navbar__list">
                    <div className="row reset-mg">
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                      <li className="navbar__list-item">
                        <a
                          href="#1"
                          className="navbar__link navbar__link--small"
                        >
                          Thời trang nam
                        </a>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col l-2">
              <div className="hearder__bottom-cart">
                <a className="hearder__bottom-cart-link" href="#1">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
                <div className="header__bottom-show-cart">
                  <div className="header__bottom-no-cart">
                    <img
                      className="header__bottom-no-cart-img"
                      src="/images/no-product.png"
                      alt="No product"
                    />
                    <p className="header__bottom-no-cart-notify">
                      Chưa có sản phẩm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function showForm(id) {
  if (id === "register-btn") {
    const eleForm = document.getElementById("register-page");
    eleForm.style.display = "block";
  }
  if (id === "login-btn") {
    const eleForm = document.getElementById("login-page");
    eleForm.style.display = "block";
  }
  const container =
    id === "login-btn"
      ? document.getElementById("login-page")
      : document.getElementById("register-page");

  container.addEventListener("click", function (e) {
    if (
      document.getElementById("register-dialog").contains(e.target) ||
      document.getElementById("login-dialog").contains(e.target)
    ) {
      // Clicked in box
    } else {
      //Clicked outside the box
      const eleForm =
        id === "login-btn"
          ? document.getElementById("login-page")
          : document.getElementById("register-page");
      eleForm.style.display = "none";
    }
  });
}

export default Header;
