import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  background,
  isUser,
  openPopup,
  clickBurger,
  leaveProfile,
  submitSearchForm,
  handleChange,
  errorKeyWord,
  valueKeyWord,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="Header">
      <div className="Header__top">
        <img className="Header__logo" src={logo} alt="Логотип компании" />
        <Navigation
          background={background}
          isBurger={false}
          openPopup={clickBurger}
        >
          {isUser ? (
            <>
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
      <div className="Header__line"></div>
      <SearchForm
        submitSearchForm={submitSearchForm}
        handleChange={handleChange}
        valueKeyWord={valueKeyWord}
        errorKeyWord={errorKeyWord}
      />
    </header>
  );
}

export default Header;
