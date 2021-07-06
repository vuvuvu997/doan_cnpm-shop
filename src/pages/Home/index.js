import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Menu from "../../components/menu";
import routersSub from "./../../routers-sub";
import "./home.scss";

function Home(props) {
  return (
    <Router>
      <div className="home-page">
        <div className="main">
          <div className="main__body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-2 col-lg-3">
                  <Menu />
                </div>
                <div className="col-xl-10 col-lg-9">
                  <div className="main__body__content">
                    <Switch>{showRouter(routersSub)}</Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
export default Home;
