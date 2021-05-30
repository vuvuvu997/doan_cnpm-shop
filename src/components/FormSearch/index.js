import queryString from "query-string";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as toastMessage from "./../../helpers/toastMessage";
import * as actionTypes from "./../../actions/searchAction";
function FormSearch(props) {
  const [keySearch, setKeySearch] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const handelChangeInput = (e) => {
    const value = e.target.value;
    setKeySearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {
      name_find: keySearch,
    };
    dispatch(actionTypes.searchProduct(keySearch));
    if (!keySearch) {
      toastMessage.toastError("Hẫy nhập từ cần tìm");
    }
    if (keySearch) {
      history.push(`/search?${queryString.stringify(params)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-search">
      <input
        className="form-search__input"
        name="keySearch"
        placeholder="Sản phẩm giảm giá đến 50%"
        type="text"
        value={keySearch}
        onChange={handelChangeInput}
      />
      <button className="form-search__submit" type="submit">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  );
}

export default FormSearch;
