import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getProfileShop } from "./actions/shop";
import Header from "./components/header";
import DefaultLayout from "./layouts/DefaultLayout";
import NoMenuLayout from "./layouts/NoMenuLayout";
import "./main.scss";
import routersMenu from "./MenuRouter";
import routersNoMenu from "./NoMenuRouter";
import history from "./utils/History";
function App() {
  const token = sessionStorage.getItem("authentication_token_shop");
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(getProfileShop());
  }, [dispatch, token]);

  return (
    <Router history={history}>
      <Header />
      <Switch>
        {!token && history.push("/login")}
        {showRouterDefault(routersMenu)}
        {showRouterNoMenu(routersNoMenu)}
      </Switch>
      <ToastContainer />
    </Router>
  );
}

const showRouterDefault = (routers) => {
  return routers.map((router) => {
    return (
      <DefaultLayout
        key={router.path}
        path={router.path}
        component={router.main}
        exact={router.exact}
      />
    );
  });
};

const showRouterNoMenu = (routers) => {
  return routers.map((router) => {
    return (
      <NoMenuLayout
        key={router.path}
        path={router.path}
        component={router.main}
        exact={router.exact}
      />
    );
  });
};
export default App;
