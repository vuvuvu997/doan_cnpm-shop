import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as actions from "./actions/shop";
import { shopApi } from "./api/shopApi";
import Header from "./components/header";
import "./main.scss";
import routers from "./routers";

function App() {
  const token = localStorage.getItem("authentication_token_shop");
  // console.log(token);

  // const infoShop = useSelector((state) => state.shop);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // console.log(token);
  //   if (token) {
  //     const fetchPropertiesShopApi = async () => {
  //       try {
  //         const response = await shopApi.getShopUser();
  //         // console.log(response);
  //         dispatch(actions.getProfileShop(response));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchPropertiesShopApi();
  //   }
  // }, [dispatch, token]);
  return (
    <Router>
      <Header />
      {!token ? <Redirect to="/login" /> : <Redirect to="/" />}
      <Switch>{showRouter(routers)}</Switch>
      <ToastContainer />
    </Router>
  );
}

function showRouter(routers) {
  let result = null;
  if (routers.length > 0) {
    result = routers.map((route, index) => {
      return (
        <Route key={index} path={route.path} exact={route.exact}>
          {route.main}
        </Route>
      );
    });
  }
  return result;
}

export default App;
