import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./PopupMenu.css";

function PopupMenu({ background, isUser, openPopup, isOpen, isClose, leaveProfile }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className={`PopupMenu ${
      isOpen ? "PopupMenu_opened" : ""
    }`}>
      <div className="PopupMenu__container">
        <header className="PopupMenu__header">
          <img className="PopupMenu__logo" src={logo} alt="Логотип компании" />
          <button className="PopupMenu__button-close" onClick={isClose}/>
        </header>
        <div className='PopupMenu__line'/>
        <Navigation background={background} isBurger={true} closePopup={isClose}>
          {isUser ? (
            <>
              <Link
                to="/saved-news"
                className={`Navigation__link ${
                  background ? "" : "Navigation__link_articles"
                }`}
                onClick={isClose}
              >
                Сохранённые статьи
              </Link>
              <button
                className={`Navigation__button ${
                  background ? "" : "Navigation__button_articles"
                }`}
                onClick={leaveProfile}
              >
                {currentUser.name}
                <span
                  className={`Navigation__icon ${
                    background ? "" : "Navigation__icon_articles"
                  }`}
                />
              </button>
            </>
          ) : (
            <button className="Navigation__button" onClick={openPopup}>
              Авторизоваться
            </button>
          )}
        </Navigation>
      </div>
    </div>
  );
}

export default PopupMenu;
