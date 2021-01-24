import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  deleteArticle,
  createArticle,
  getArticles,
  getUserInfo,
  authorize,
  register,
} from "../../utils/MainApi";

import { searchArticles } from "../../utils/NewsApi";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupMenu from "../PopupMenu/PopupMenu";
import SavedNewsMain from "../SavedNewsMain/SavedNewsMain";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { useForm } from "../../hooks/useForm";

function App() {
  //колбек для валидации форм_________________________________________________________-
  const { values, handleChange, errors, isValid, resetForm } = useForm();
  const [loggedIn, setLoggedIn] = React.useState(false);
  /* const [isValid, setIsValid] = React.useState(false); */

  const [isOpenLogin, setIsOpenLogin] = React.useState(false);
  const [isOpenRegister, setIsOpenRegister] = React.useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = React.useState(false);
  const [isPopupNav, setIsPopupNav] = React.useState(false);
  //Загрузка с сервера данных страницы
  const [currentUser, setCurrentUser] = React.useState({});

  const [keyWord, setKeyWord] = React.useState("");
  const [errorSearchInput, setErrorSearchInput] = React.useState("");

  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  //Стэйты, отвечающие за отображение карточек
  const [searchCards, setSearchCards] = React.useState(false);
  const [resultSearch, setResultSearch] = React.useState(false);
  const [visiblePreloader, setVisiblePreloader] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [isVisible, setIsVisible] = React.useState(false);

  const tokenCheck = () => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUserInfo().then((res) => {
        if (res) {
          setLoggedIn(true);
          setIsVisible(false);
        } else {
          localStorage.removeItem("jwt");
        }
      });
    }
  };

  function openLogin() {
    setIsOpenLogin(!isOpenLogin);
  }

  function openRegister() {
    setIsOpenLogin(false);
    setIsOpenRegister(!isOpenRegister);
    resetForm();
  }

  function openSuccess() {
    setIsOpenSuccess(!isOpenSuccess);
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

  function handleSubmitLogin(e) {
    e.preventDefault();

    if (!values.password || !values.email) {
      return;
    }

    authorize(values.password, values.email)
      .then(() => {
        window.location.reload();
        setLoggedIn(true);
        closePopup();
        resetForm();
      })
      .catch((err) => console.log(err));
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    register(values.password, values.email, values.text)
      .then(() => {
        setIsOpenRegister(false);
        resetForm();
        openSuccess();
      })
      .catch((err) => console.log(err));
  }

  function leaveProfile() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    window.location.reload();
  }

  function handleChangeSearch(e) {
    setKeyWord(e.target.value);
    setErrorSearchInput("");
  }

  function submitSearchForm(e) {
    e.preventDefault();
    if (keyWord === "") {
      setErrorSearchInput("Нужно ввести ключевое слово");
      return;
    }
    setSearchCards(true);
    searchArticles(keyWord)
      .then((res) => {
        if (res.length === 0) {
          setResultSearch(false);
          setVisiblePreloader(true);
          return;
        }
        setCards(res);
        setResultSearch(true);
      })
      .catch((err) => console.log(err));
  }

  function saveCard(selectedCard) {
    if (loggedIn === false) {
      openRegister();
      return;
    }
    createArticle(
      keyWord,
      selectedCard.title,
      selectedCard.description,
      selectedCard.publishedAt,
      selectedCard.source.name,
      selectedCard.url,
      selectedCard.urlToImage
    )
    .then(() => selectedCard.isVisible = true)
    .catch((err) => {
      console.log(err.message);
    });
    console.log(selectedCard);
  }
  function handleCardDelete(selectedCard) {
    deleteArticle(selectedCard._id)
      .then(() => {console.log(selectedCard._id)})
      .then(() => {
        const newCards = savedCards.filter(function (c) {
          return c._id !== selectedCard._id;
        });
        setSavedCards(newCards);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  React.useEffect(() => {
    getUserInfo()
      .then((result) => {
        setCurrentUser(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    getArticles()
    .then((res) => {
      setSavedCards(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  React.useEffect(() => {
    tokenCheck();
    if (loggedIn === false) {
      setIsVisible(true);
    }
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute
            path="/saved-news"
            loggedIn={loggedIn}
            component={SavedNewsMain}
            clickBurger={openNav}
            leaveProfile={leaveProfile}
            cards={savedCards}
            deleteCard={handleCardDelete}
          />
          <Route exact path="/">
            <Header
              background={true}
              isUser={loggedIn}
              openPopup={openLogin}
              clickBurger={openNav}
              leaveProfile={leaveProfile}
              submitSearchForm={submitSearchForm}
              errorKeyWord={errorSearchInput}
              valueKeyWord={keyWord}
              handleChange={handleChangeSearch}
              devName={loggedIn}
            />
            <Main
              isUser={searchCards}
              resultSearch={resultSearch}
              visiblePreloader={visiblePreloader}
              cards={cards}
              isVisible={isVisible}
              saveCard={saveCard}
            />
          </Route>
          <Route>{<Redirect to={`/${loggedIn ? "saved-news" : ""}`} />}</Route>
        </Switch>

        <Footer />
        {/* ------------------------------------------------------------------- */}
        <Popup
          title={"Вход"}
          isOpen={isOpenLogin}
          isClose={closePopup}
          onSubmit={handleSubmitLogin}
        >
          <PopupWithForm
            handleChange={handleChange}
            valueEmail={values.email}
            valuePassword={values.password}
            errorEmail={errors.email}
            errorPassword={errors.password}
          >
            <button
              type="submit"
              className={`PopupWithForm__button ${
                isValid ? "" : "PopupWithForm__button_disabled"
              }`}
            >
              Войти
            </button>
            <div className="PopupWithForm__string">
              <p className="PopupWithForm__question">
                {`или `}
                <span
                  className="PopupWithForm__question-button"
                  onClick={openRegister}
                >
                  Зарегистрироваться
                </span>
              </p>
            </div>
          </PopupWithForm>
        </Popup>
        {/* ---------------------------------------------------------------- */}
        <Popup
          title={"Регистрация"}
          isOpen={isOpenRegister}
          isClose={closePopup}
          onSubmit={handleSubmitRegister}
        >
          <PopupWithForm
            handleChange={handleChange}
            valueEmail={values.email}
            valuePassword={values.password}
            errorEmail={errors.email}
            errorPassword={errors.password}
          >
            <label className="PopupWithForm__label">
              <p className="PopupWithForm__label-name">Имя</p>
              <input
                className="PopupWithForm__input"
                placeholder="Введите свое имя"
                type="text"
                name="text"
                onChange={handleChange}
                value={values.text || ""}
                minLength="2"
                maxLength="30"
                required
              ></input>
              <p className="PopupWithForm__error">{errors.text || ""}</p>
            </label>
            <button
              type="submit"
              className={`PopupWithForm__button ${
                isValid ? "" : "PopupWithForm__button_disabled"
              }`}
            >
              Зарегистрироваться
            </button>
            <div className="PopupWithForm__string">
              <p className="PopupWithForm__question">
                {`или `}
                <span
                  onClick={() => {
                    closePopup();
                    openLogin();
                  }}
                  className="PopupWithForm__question-button"
                >
                  Войти
                </span>
              </p>
            </div>
          </PopupWithForm>
        </Popup>
        {/* ----------------------------------------- */}
        <Popup
          title={"Пользователь успешно зарегистрирован!"}
          isOpen={isOpenSuccess}
          isClose={closePopup}
        >
          <span
            className="Popup__link"
            onClick={() => {
              closePopup();
              openLogin();
            }}
          >
            Войти
          </span>
        </Popup>
        {/* -------------------------------------------- */}
        <PopupMenu
          background={true}
          isUser={loggedIn}
          isOpen={isPopupNav}
          isClose={closePopup}
          leaveProfile={() => {
            leaveProfile();
            closePopup();
          }}
          openPopup={() => {
            closePopup();
            openLogin();
          }}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
