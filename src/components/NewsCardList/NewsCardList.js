import React from "react";

import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import search from "../../images/search.svg";
import "./NewsCardList.css";

function NewsCardList({
  resultSearch,
  visiblePreloader,
  cards,
  isVisible,
  saveCard
}) {

  const [listCards, setListCards] = React.useState(true);
  const [showButton, setShowButton] = React.useState(true);

  React.useEffect(() => {
    if(cards.length === 0) {
      
    }
  }, []);

  return resultSearch ? (
    <section className="NewsCardList">
      <div className="NewsCardList__container">
        <h2 className="NewsCardList__title">Результаты поиска</h2>
        {listCards ? (
          <div className="NewsCardList__grid">
            {cards.slice(0, 3).map((card, index) => (
              <NewsCard
                card={card}
                key={card.title + index}
                url={card.urlToImage}
                date={card.publishedAt}
                title={card.title}
                description={card.description}
                sorceName={card.source.name}
              >
                <div className="NewsCard__icon">
                  <button
                    className={`NewsCard__button ${
                      card.isVisible ? "NewsCard__button_saving" : ""
                    }`}
                    onClick={() => saveCard(card)}
                  />
                  <span
                    className={`NewsCard__warning ${
                      isVisible ? "NewsCard__warning_visible" : ""
                    }`}
                  >
                    Войдите, чтобы сохранять статьи
                  </span>
                </div>
              </NewsCard>
            ))}
          </div>
        ) : (
          <div className="NewsCardList__grid">
            {cards.map((card, index) => (
              <NewsCard
                card={card}
                key={card.title + index}
                url={card.urlToImage}
                date={card.publishedAt}
                title={card.title}
                description={card.description}
                sorceName={card.source.name}
              >
                <div className="NewsCard__icon">
                  <button
                    className={`NewsCard__button ${
                      card.isVisible ? "NewsCard__button_saving" : ""
                    }`}
                    onClick={() => saveCard(card)}
                  />
                  <span
                    className={`NewsCard__warning ${
                      isVisible ? "NewsCard__warning_visible" : ""
                    }`}
                  >
                    Войдите, чтобы сохранять статьи
                  </span>
                </div>
              </NewsCard>
            ))}
          </div>
        )}
        {((showButton) && (cards.length > 3)) && (
          <button
            className="NewsCardList__button"
            onClick={() => {
              setListCards(false);
              setShowButton(false);
            }}
          >
            Показать еще
          </button>
        )}
      </div>
    </section>
  ) : visiblePreloader ? (
    <section className="NewsCardList NewsCardList_empty">
      <div className="NewsCardList__container">
        <img
          className="NewsCardList__searching-img"
          alt="Значок поиска"
          src={search}
        />
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
