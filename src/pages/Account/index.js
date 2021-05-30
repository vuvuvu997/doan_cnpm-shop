import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Menu from "../../components/menu";
import routersSub from "./../../routers-sub";
import "./account.css";

function Account(props) {
  return (
    <Router>
      <div className="page-account">
        <div className="grid wide">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Account
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col l-3">
              <Menu />
            </div>
            <div className="col l-9">
              <Switch>{showRouter(routersSub)}</Switch>
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
    result = routers.map((item, index) => {
      return (
        <Route key={index} path={item.path} exact={item.exact}>
          {item.main}
        </Route>
      );
    });
    return result;
  }
}

export default Account;
