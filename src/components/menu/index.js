import React from "react";
import SubMenu from "../sub-menu";
import "./menu.scss";
import * as data from "./../../utils/data";

function showSubMenu(list) {
  let result = null;
  if (list.length > 0) {
    result = list.map((item, index) => {
      return (
        <SubMenu
          key={index}
          name={item.name}
          list={item.list}
          id={item.id}
          icon={item.icon}
        />
      );
    });
  }
  return result;
}

function Menu(props) {
  return (
    <div className="menu-main">
      <div className="menu-main__content">{showSubMenu(data.menu)}</div>
    </div>
  );
}

export default Menu;
