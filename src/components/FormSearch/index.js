import React from "react";

function FormSearch(props) {
  return (
    <form action="" className="form-search">
      <input
        className="form-search__input"
        name="input-search"
        placeholder="Sản phẩm giảm giá đến 50%"
        type="text"
      />
      <button className="form-search__submit" type="submit">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  );
}

export default FormSearch;
