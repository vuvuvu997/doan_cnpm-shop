import React from "react";
import { Route } from "react-router-dom";

function NoMenuLayout({ component: Component, role, ...props }) {
  return (
    <Route
      {...props}
      render={(routerProps) => <Component {...routerProps} />}
    />
  );
}

export default NoMenuLayout;
