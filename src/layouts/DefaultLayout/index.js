import React from "react";
import { Route } from "react-router-dom";
import Menu from "./menu";
import "./style.scss";

function DefaultLayout({ component: Component, role, ...props }) {
  return (
    <Route
      {...props}
      render={(routerProps) => (
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
                      <Component {...routerProps} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default DefaultLayout;
