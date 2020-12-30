import React from "react";
import { Link } from "react-router-dom";

import "./SavedNewsHeader.css";
import logoBlack from "../../images/logo-black.svg";
import SavedNewsInfo from "../SavedNewsInfo/SavedNewsInfo";
import Navigation from "../Navigation/Navigation";

function SavedNewsHeader({ background, clickBurger }) {
  return (
    <header className="SavedNewsHeader">
        <div className="SavedNewsHeader__top">
          <img
            className="SavedNewsHeader__logo"
            src={logoBlack}
            alt="Логотип компании"
          />
          <Navigation background={background} isBurger={false} openPopup={clickBurger}>
            <Link
              to="/saved-news"
              className={`Navigation__link ${
                background ? "" : "Navigation__link_articles"
              }`}
            >
              Сохранённые статьи
            </Link>
            <button
              className={`Navigation__button ${
                background ? "" : "Navigation__button_articles"
              }`}
            >
              Автор{" "}
              <span
                className={`Navigation__icon ${
                  background ? "" : "Navigation__icon_articles"
                }`}
              />
            </button>
          </Navigation>
        </div>
      <div className="SavedNewsHeader__line"></div>
      <SavedNewsInfo />
    </header>
  );
}

export default SavedNewsHeader;
