import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsList } from "../../actions/productAction";
import productApi from "../../api/productAPI";
import Category from "../../components/categorys";
import ProductList from "../../components/productsList";
import ProductDiscountList from "./../../components/productDiscoutList";
import SlideBar from "./../../components/slideBar";

function HomePage(props) {
  return (
    <div>
      <SlideBar />
      <div class="container">
        <div class="grid wide">
          <ProductDiscountList />
          <Category />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
