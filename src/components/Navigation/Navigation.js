import React from "react";

import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation({ background, children, isBurger, openPopup, closePopup }) {
  return (
    <>
    <button className={`Navigation__burger ${
      isBurger ? "Navigation__burger_active" : ""
    } ${
      background ? "" : "Navigation__burger_articles"
    }`} onClick={openPopup}/>
    <nav className={`Navigation ${
      isBurger ? "Navigation_active" : ""
    }`}>
      <Link
        to="/"
        className={`Navigation__link ${
          background ? "Navigation__link_border" : "Navigation__link_articles"
        }`}
        onClick={closePopup}
      >
        Главная
      </Link>
      {children}
    </nav>
    </>
  );
}

export default Navigation;
