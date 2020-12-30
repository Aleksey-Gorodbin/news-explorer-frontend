import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupMenu from "../PopupMenu/PopupMenu";

function App() {
  const [isOpenLogin, setIsOpenLogin] = React.useState(false);
  const [isOpenRegister, setIsOpenRegister] = React.useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = React.useState(false);
  const [isPopupNav, setIsPopupNav] = React.useState(false);

  function openLogin() {
    setIsOpenLogin(!isOpenLogin);
  }

  function openRegister() {
    setIsOpenLogin(!isOpenLogin);
    setIsOpenRegister(!isOpenRegister);
  }

  function openNav() {
    setIsPopupNav(!isPopupNav);
  }

  function closePopup() {
    setIsOpenLogin(false);
    setIsOpenRegister(false);
    setIsOpenSuccess(false);
    setIsPopupNav(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header
            background={true}
            isUser={false}
            openPopup={openLogin}
            clickBurger={openNav}
          />
          <Main isUser={false} />
        </Route>
        <Route exact path="/saved-news">
          <SavedNewsHeader background={false} clickBurger={openNav} />
          <SavedNews isVisible={false} />
        </Route>
      </Switch>
      <Footer />
      <Popup title={"Вход"} isOpen={isOpenLogin} isClose={closePopup}>
        <PopupWithForm>
          <button className="PopupWithForm__button">Войти</button>
          <div className="PopupWithForm__string">
            <p className="PopupWithForm__question">
              {`или `}
              <Link
                /* to="sign-up" */ className="PopupWithForm__question-button"
                onClick={openRegister}
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </PopupWithForm>
      </Popup>
      <Popup title={"Регистрация"} isOpen={isOpenRegister} isClose={closePopup}>
        <PopupWithForm>
          <label className="PopupWithForm__label">Имя</label>
          <input
            className="PopupWithForm__input"
            placeholder="Введите свое имя"
            type="name"
          ></input>
          <button className="PopupWithForm__button">Зарегистрироваться</button>
          <div className="PopupWithForm__string">
            <p className="PopupWithForm__question">
              {`или `}
              <Link
                onClick={openRegister}
                /* to="sign-up" */ className="PopupWithForm__question-button"
              >
                Войти
              </Link>
            </p>
          </div>
        </PopupWithForm>
      </Popup>
      <Popup
        title={"Пользователь успешно зарегистрирован!"}
        isOpen={isOpenSuccess}
        isClose={closePopup}
      >
        <Link className="Popup__link" onClick={openRegister}>
          Войти
        </Link>
      </Popup>
      <PopupMenu
        background={true}
        isUser={false}
        isOpen={isPopupNav}
        isClose={closePopup}
      />
    </div>
  );
}

export default App;
