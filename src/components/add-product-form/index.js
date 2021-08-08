import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "../../actions/product";
import Validator from "../../helpers/validator";
import "./style.scss";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin-right: 12px;
  border-color: red;
  float: left;
`;
function AddProductForm(props) {
  const { data, onCloseModalEdit } = props;
  const shop = useSelector((state) => state.shop);
  const [loading, setLoading] = useState(false);
  const [link_image, setLink_image] = useState();
  const dispatch = useDispatch();
  const [infoProduct, setInfoProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    count: 0,
  });

  useEffect(() => {
    Validator({
      form: "#add-product-form",
      formGroupElement: ".form-group",
      errorElement: ".form-message",
      rules: [
        Validator.isRequired("#name-product"),
        Validator.isMinLeng("#name-product", 10, "Tên sản phẩm quá ngắn"),
        Validator.isRequired("#description"),
        Validator.isMinLeng("#description", 10, "Tên mô tả quá ngắn"),
        Validator.isRequired("#price"),
        Validator.isRequired("#count"),
        Validator.isRequired("#image"),
      ],
    });

    if (data) {
      setInfoProduct({
        name: data.name,
        price: data.price,
        count: data.count,
        description: data.name,
        category_name: data.category,
      });
    }
  }, [dispatch, data]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    dataForm.append("shop_id", shop.id);
    dataForm.append("rating", 5);
    setLoading(true);
    if (data) {
      dispatch(editProduct(dataForm, data.id));
      onCloseModalEdit();
    } else {
      dispatch(addProduct(dataForm));
      setInfoProduct({
        id: "",
        name: "",
        description: "",
        price: 0,
        category_name: "",
        count: 0,
      });
    }
  };

  return (
    <div className="style-form add-product-form">
      <form onSubmit={handelSubmit} id="add-product-form">
        <div className="form-group d-flex justify-content-space-between align-items-center">
          <label htmlFor="name-product">Tên sản phẩm</label>
          <div className="form-group-container">
            <input
              className="form-control"
              type="text"
              id="name-product"
              name="name"
              value={infoProduct.name}
              onChange={(e) =>
                setInfoProduct({
                  ...infoProduct,
                  name: e.target.value,
                })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        {infoProduct.id ? (
          ""
        ) : (
          <div className="form-group d-flex justify-content-space-between align-items-center">
            <label htmlFor="category_name">Danh mục sản phẩm</label>
            <div className="form-group-container">
              <select
                className="form-control"
                name="category_name"
                id="category_name"
                value={infoProduct.category_name}
                onChange={(e) =>
                  setInfoProduct({
                    ...infoProduct,
                    category_name: e.target.value,
                  })
                }
              >
                <option value="Thời Trang Nam">Thời Trang Nam</option>
                <option value="Thời Trang Nữ">Thời Trang Nữ</option>
                <option value="Điện Thoại & Phụ Kiện">
                  Điện Thoại & Phụ Kiện
                </option>
                <option value="Mẹ & Bé">Mẹ & Bé</option>
                <option value="Thiết Bị Điện Tử">Thiết Bị Điện Tử</option>
                <option value="Nhà Cửa & Đời Sống">Nhà Cửa & Đời Sống</option>
                <option value="Máy tính & Laptop">Máy tính & Laptop</option>
                <option value="Sức Khỏe & Sắc Đẹp">Sức Khỏe & Sắc Đẹp</option>
                <option value="Máy ảnh - Máy quay phim">
                  Máy ảnh - Máy quay phim
                </option>
                <option value="Giày Dép Nữ">Giày Dép Nữ</option>
                <option value="Đồng Hồ">Đồng Hồ</option>
                <option value="Túi Ví">Túi Ví</option>
                <option value="Giày Dép Nam">Giày Dép Nam</option>
                <option value="Phụ Kiện Thời Trang">Phụ Kiện Thời Trang</option>
                <option value="Thiết Bị Điện Gia Dụng">
                  Thiết Bị Điện Gia Dụng
                </option>
                <option value="Bách Hoá Online">Bách Hoá Online</option>
                <option value="Thể Thao & Du Lịch">Thể Thao & Du Lịch</option>
                <option value="Voucher & Dịch vụ">Voucher & Dịch vụ</option>
                <option value="Ô tô - xe máy - xe đạp">
                  Ô tô - xe máy - xe đạp
                </option>
                <option value="Nhà Sách Online">Nhà Sách Online</option>
                <option value="Đồ Chơi">Đồ Chơi</option>
                <option value="Giặt giũ & Chăm sóc nhà cửa">
                  Giặt giũ & Chăm sóc nhà cửa
                </option>
                <option value="Chăm sóc thú cưng">Chăm sóc thú cưng</option>
                <option value="Thời Trang Trẻ Em">Thời Trang Trẻ Em</option>
                <option value="Sản Phẩm Khác">Sản Phẩm Khác</option>
              </select>
            </div>
          </div>
        )}
        <div className="form-group d-flex justify-content-space-between align-items-center">
          <label htmlFor="description">Mô tả sản phẩm</label>
          <div className="form-group-container">
            <textarea
              className="form-control"
              type="text"
              id="description"
              name="description"
              rows="3"
              value={infoProduct.description}
              onChange={(e) =>
                setInfoProduct({
                  ...infoProduct,
                  description: e.target.value,
                })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="form-group d-flex justify-content-space-between align-items-center">
          <label htmlFor="price">Gía sản phẩm</label>
          <div className="form-group-container">
            <input
              className="form-control"
              type="number"
              id="price"
              name="price"
              value={infoProduct.price}
              onChange={(e) =>
                setInfoProduct({
                  ...infoProduct,
                  price: e.target.value,
                })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="form-group d-flex justify-content-space-between align-items-center">
          <label htmlFor="count">Số lượng</label>
          <div className="form-group-container">
            <input
              className="form-control"
              type="number"
              id="count"
              name="count"
              value={infoProduct.count}
              onChange={(e) =>
                setInfoProduct({
                  ...infoProduct,
                  count: e.target.value,
                })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="form-group d-flex justify-content-space-between align-items-center">
          <p style={{ width: "200px", height: "100%" }}>Hình ảnh</p>
          <label
            style={{
              width: "300px",
              height: "100%",
              cursor: "pointer",
              color: "#017fff",
              marginLeft: "50px",
            }}
            htmlFor="image"
          >
            <i style={{ marginRight: "12px" }} className="far fa-images"></i>
            Click here
          </label>
          <div className="form-group-container">
            <input
              style={{ display: "none" }}
              className="form-control-file"
              type="file"
              id="image"
              name="link_image"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setLink_image(e.target.files[0])}
            />
            <span className="form-message"></span>
          </div>
          {data?.link_image && !link_image ? (
            <div className="formGroup__container">
              <img
                className="formGroup__container__img formGroup__container__img--frofile"
                src={data.link_image}
                alt=""
              />
            </div>
          ) : (
            ""
          )}
          {link_image && (
            <div className="formGroup__container">
              <img
                className="formGroup__container__img formGroup__container__img--frofile"
                src={URL.createObjectURL(link_image)}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            <ClipLoader
              color={"#fff"}
              loading={loading}
              css={override}
              size={24}
            />
            {data ? "Sửa thông tin" : "Thêm sản phẩm"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
