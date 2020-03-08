import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">Github Поиск</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Главная
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Информация{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
