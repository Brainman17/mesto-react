import React from "react";
import logo from "../../src/images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип" className="header__logo" />
    </header>
  );
}

export default Header;
