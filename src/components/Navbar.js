import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">Github Поиск</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            Информация
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
