import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

function SubMenu(props) {
  const { list, icon, name, id } = props;
  return (
    <div className="sub-menu">
      <p>
        <button
          className="btn"
          type="button"
          data-toggle="collapse"
          data-target={"#" + id}
          aria-expanded="false"
          aria-controls={id}
        >
          <i className={icon}></i>
          {name}
        </button>
      </p>
      <div className="collapse" id={id}>
        <div className="card card-body">{showListMenu(list)}</div>
      </div>
    </div>
  );
}

let showListMenu = (list) => {
  let result = null;
  if (list.length > 0) {
    result = list.map((item, index) => {
      return (
        <MenuLink
          key={index}
          label={item.label}
          to={item.to}
          activeOnlyWhenExact={item.exact}
        />
      );
    });
    return result;
  }
};

let MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className="nav-item">
      <Link to={to} className={match ? "active nav-link" : "nav-link"}>
        {label}
      </Link>
    </li>
  );
};

export default SubMenu;
