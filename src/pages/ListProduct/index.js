import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKeySearch } from "../../actions/contraol-actions";
import { getProduct } from "../../actions/product";
import ListProduct from "../../components/list-product";
import ListProductBan from "../../components/list-product-ban";
import ListProductRunOut from "../../components/list-product-run-out";
import Loading from "../../components/loading";
import "./list-product.scss";

function ListProductPage(props) {
  const [keySearch, setKeySearch] = useState("");
  const filter = useSelector((state) => state.filter);
  const isLoading = useSelector((state) => state.ui.showLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(filter));
  }, [dispatch, filter]);

  const handleSubmitKeySearch = (e) => {
    e.preventDefault();
  };

  const handleChangeKeySearch = (e) => {
    dispatch(getKeySearch(e.target.value));
    setKeySearch(e.target.value);
  };

  return (
    <div className="list-product-page pd-12">
      <ul className="nav nav-tabs order-page__action">
        <li className="nav-item">
          <button
            className="btn btn-primary nav-link active"
            data-toggle="tab"
            href="#home"
          >
            Tất cả
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-primary nav-link"
            data-toggle="tab"
            href="#menu1"
          >
            Hết hàng
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-primary nav-link"
            data-toggle="tab"
            href="#menu2"
          >
            Vi phạm
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div id="home" className="container tab-pane active">
          <div className="d-flex justify-content-space-between">
            <h1>Danh sách sản phẩm</h1>

            <form
              onSubmit={handleSubmitKeySearch}
              className="d-flex  align-items-center"
              id="search-product-form"
            >
              <div className="form-group">
                <input
                  onChange={handleChangeKeySearch}
                  type="text"
                  placeholder="Search for products..."
                  name="keySearch"
                  value={keySearch}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <div className="order-page__container">
            {isLoading ? <Loading /> : <ListProduct />}
          </div>
        </div>
        <div id="menu1" className="container tab-pane fade">
          {isLoading ? <Loading /> : <ListProductRunOut />}
        </div>
        <div id="menu2" className="container tab-pane fade">
          {isLoading ? <Loading /> : <ListProductBan />}
        </div>
      </div>
    </div>
  );
}

export default ListProductPage;
