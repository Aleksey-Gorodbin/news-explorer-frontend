import React from "react";

import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import search from "../../images/search.svg";
import "./NewsCardList.css";

function NewsCardList({ isVisible }) {
  return true ? (
    <section className="NewsCardList">
      <div className="NewsCardList__container">
        <h2 className="NewsCardList__title">Результаты поиска</h2>
        <div className="NewsCardList__grid">
          <NewsCard>
            <div className="NewsCard__icon">
              <span
                className={`NewsCard__warning ${
                  isVisible ? "NewsCard__warning_visible" : ""
                }`}
              >
                Войдите, чтобы сохранять статьи
              </span>
              <button
                className={`NewsCard__button ${
                  true ? "" : "NewsCard__button_saving"
                }`}
              />
            </div>
          </NewsCard>
          <NewsCard>
            <div className="NewsCard__icon">
              <span
                className={`NewsCard__warning ${
                  isVisible ? "NewsCard__warning_visible" : ""
                }`}
              >
                Войдите, чтобы сохранять статьи
              </span>
              <button
                className={`NewsCard__button ${
                  true ? "" : "NewsCard__button_saving"
                }`}
              />
            </div>
          </NewsCard>
          <NewsCard>
            <div className="NewsCard__icon">
              <span
                className={`NewsCard__warning ${
                  isVisible ? "NewsCard__warning_visible" : ""
                }`}
              >
                Войдите, чтобы сохранять статьи
              </span>
              <button
                className={`NewsCard__button ${
                  true ? "" : "NewsCard__button_saving"
                }`}
              />
            </div>
          </NewsCard>
        </div>
        <button className="NewsCardList__button">Показать еще</button>
      </div>
    </section>
  ) : false ? (
    <section className="NewsCardList NewsCardList_empty">
      <div className="NewsCardList__container">
        <img className="NewsCardList__searching-img" alt="Значок поиска" src={search} />
        <h3 className="NewsCardList__searching-title">Ничего не найдено</h3>
        <p className="NewsCardList__searching-text">
          К сожалению по вашему запросу ничего не найдено.
        </p>
      </div>
    </section>
  ) : (
    <Preloader />
  );
}

export default NewsCardList;
