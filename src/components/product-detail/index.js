import "./product-detail.css";

function ProductDetail() {
  return (
    <div class="container container--product">
      <div class="grid wide">
        <div class="product">
          <div class="row">
            <div class="col l-4">
              <div class="poduct__img">
                <img src="/images/products/product.jfif" alt="" />
              </div>
            </div>
            <div class="col l-8">
              <div class="product__info">
                <div class="product__info__header">
                  <div class="product__info__header__left">
                    <p>
                      Thương hiệu: <span>Samsung</span>
                    </p>
                    <h2>
                      Smart Tivi QLED Samsung 4K 65 inch QA65Q60A Mới 2021
                    </h2>
                    <div class="product__info__rating">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="product__info__header__right">
                    <span>
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div class="product__info__body">
                  <div class="row">
                    <div class="con l-8">
                      <div class="product__info__price">
                        <p>
                          <span class="product__info__price--discount">
                            86.492 ₫
                          </span>
                          <span class="product__info__price--original">
                            170.000 ₫
                          </span>
                          <span class="product__info__discount">-49%</span>
                        </p>
                        <a href="http://">
                          Hoàn tiền 15% tối đa 600k/tháng
                          <i
                            class="fa fa-question-circle"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                      <div class="product__info__vourcher">
                        <h3>1 Mã giảm giá</h3>
                        <span class="product__info__vourcher__tag">
                          Giảm 5%
                        </span>
                      </div>
                      <p class="product__info__link">
                        Bạn hãy{" "}
                        <a class="product__info__link-address" href="http://">
                          NHẬP ĐỊA CHỈ
                        </a>{" "}
                        nhận hàng để được dự báo thời gian & chi phí giao hàng
                        một cách chính xác nhất.
                      </p>
                      <div class="product__info__group-amout">
                        <p>Số lượng</p>
                        <div class="checkout__item__action">
                          <button
                            disabled
                            type="button"
                            class="checkout__item__action__btn-increase btn-disible"
                          >
                            -
                          </button>
                          <span class="checkout__item__action__display">1</span>
                          <button class="checkout__item__action__btn-decrease">
                            +
                          </button>
                        </div>
                      </div>

                      <div class="product__info__group-actions">
                        <button class="btn btn-add-product">Chọn mua</button>
                        <button class="btn btn-pay-later">
                          Trả góp qua thẻ tín dụng<br></br>
                          <span>Chỉ từ 800k/tháng</span>
                        </button>
                      </div>
                    </div>
                    <div class="col l-4">
                      <div class="shop-extend">
                        <div class="shop-extend__name">
                          <span class="shop-extend__name__img">
                            <img src="/images/products/product.jfif" alt="" />
                          </span>
                          <span class="shop-extend__name__tag">
                            Tech Digital
                          </span>
                        </div>
                        <div class="row">
                          <div class="col l-6">
                            <div class="shop-extend__container">
                              <p class="shop-extend__container__description">
                                <span>4.3</span>/<span>5.0</span>
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </p>
                              <p>299</p>
                              <button class="btn shop-extend__btn">
                                <i
                                  class="fa fa-shopping-basket"
                                  aria-hidden="true"
                                ></i>
                                Xem Shop
                              </button>
                            </div>
                          </div>
                          <div class="col l-6">
                            <div class="shop-extend__container">
                              <p class="shop-extend__container__description">
                                <span>73</span>
                              </p>
                              <p>Theo dõi</p>
                              <button class="btn shop-extend__btn">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                Theo dõi
                              </button>
                            </div>
                          </div>
                        </div>
                        <p class="shop-extend__add-border-top ">
                          <span>Thời gian bảo hành</span>
                          <span>12 Tháng</span>
                        </p>
                        <p>
                          <span>Hình thức bảo hành</span>
                          <span>Tem bảo hành</span>
                        </p>
                        <p>
                          <span>Nơi bảo hành</span>
                          <span>Bảo hành chính hãng</span>
                        </p>
                        <p>
                          <span>Hướng dẫn bảo hành</span>
                          <a href="http://">Xem chi tiết</a>
                        </p>
                        <div class="row no-gutters">
                          <div class="col l-4 ">
                            <div class="shop-extend__policy">
                              <p>
                                <i class="fa fa-shield" aria-hidden="true"></i>
                              </p>
                              <p>Hoàn tiền 111% nếu giả</p>
                            </div>
                          </div>
                          <div class="col l-4">
                            <div class="shop-extend__policy">
                              <p>
                                <i
                                  class="fa fa-check-square"
                                  aria-hidden="true"
                                ></i>
                              </p>
                              <p>Mở hộp kiểm tra nhận hàng</p>
                            </div>
                          </div>
                          <div class="col l-4">
                            <div class="shop-extend__policy">
                              <p>
                                <i class="fa fa-undo" aria-hidden="true"></i>
                              </p>
                              <p>Đổi trả trong 30 ngày nếu sp lỗ</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ProductDetail;
