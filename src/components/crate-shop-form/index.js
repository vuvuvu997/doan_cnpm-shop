import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createShopSuccess, updateShopSuccess } from "../../actions/shop";
import { createShop, updateShop } from "../../api/shopApi";
import Validator from "../../helpers/validator";
import { message } from "antd";
import "./style.scss";

function CreateShopForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const infoShop = useSelector((state) => state.shop);
  const [profile, setProfile] = useState({
    id: "",
    name_shop: "",
    address: "",
    product_type: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    Validator({
      form: "#create-shop-form",
      formGroupElement: ".form-group",
      errorElement: ".form-message",
      rules: [
        Validator.isRequired("#name-shop"),
        Validator.isRequired("#address"),
        Validator.isRequired("#phone-number"),
        Validator.isExactNumber(
          "#phone-number",
          10,
          "Vui lòng nhập đúng số điện thoại"
        ),
        Validator.isRequired("#email-shop"),
        Validator.isEmail("#email-shop"),
      ],
    });
    if (infoShop) {
      setProfile({
        id: infoShop.id,
        name_shop: infoShop.name_shop,
        address: infoShop.address,
        product_type: infoShop.product_type,
        phone: infoShop.phone,
        email: infoShop.email,
      });
    }
  }, [infoShop]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (profile.id) {
      try {
        const response = await updateShop(data);
        if (response.status === 200) {
          message.success("Update success");
          dispatch(updateShopSuccess(response.data));
        } else {
          message.warning("Update error");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await createShop(data);
        if (response.status === 201) {
          dispatch(createShopSuccess(response.data));
          message.success("Create shop success");
          history.push("/");
        } else {
          message.warning("Occur error!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="style-form create-shop-form">
      <form onSubmit={handleSubmit} id="create-shop-form">
        <div className="form-group ">
          <label htmlFor="name-shop">Tên Shop</label>
          <div className="form-group-container">
            <input
              className="form-control"
              type="text"
              id="name-shop"
              name="name_shop"
              value={profile.name_shop}
              onChange={(e) =>
                setProfile({ ...profile, name_shop: e.target.value })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="category">Sản phẩm kinh doanh</label>
          <div className="form-group-container">
            <select
              className="form-control"
              name="product_type"
              value={profile.product_type}
              id="category"
              onChange={(e) =>
                setProfile({ ...profile, product_type: e.target.value })
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
        <div className="form-group">
          <label htmlFor="address">Địa chỉ:</label>
          <div className="form-group-container">
            <input
              className="form-control"
              type="text"
              id="address"
              name="address"
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Số điện thoại:</label>
          <div className="form-group-container">
            <input
              className="form-control"
              type="number"
              id="phone-number"
              name="phone"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email-shop">Email:</label>
          <div className="form-group-container">
            <input
              className="form-control"
              type="email"
              id="email-shop"
              name="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            {infoShop.name_shop ? "Update" : "Tạo shop"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateShopForm;
