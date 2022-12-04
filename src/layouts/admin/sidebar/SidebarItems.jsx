import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ title, targetPath, icon }) => {
  return (
    <>
      <li>
        <span>
          <i className={icon}></i>
        </span>
        <NavLink className={(active)=> active.isActive ? "sidebaritem ps-3 active" : "sidebaritem ps-3"} to={targetPath}>{title}</NavLink>
      </li>
    </>
  );
};

export default SidebarItems;
