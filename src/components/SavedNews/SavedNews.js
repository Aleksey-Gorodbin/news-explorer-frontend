import React from "react";
import NewsCard from "../NewsCard/NewsCard";

import "./SavedNews.css";

function SavedNews({ cards, deleteCard }) {
  return (
    <section className="SavedNews">
      <div className="SavedNews__grid">
        {cards.map((card) => (
          <NewsCard
            key={card._id}
            url={card.image}
            date={card.date}
            title={card.title}
            description={card.text}
            sorceName={card.source}
            card={card}
          >
            <div className="NewsCard__categoria">{card.keyword}</div>
            <div className="NewsCard__icon">
              <button onClick={() => deleteCard(card)} className="NewsCard__button NewsCard__button_saved-news" />
              <span className="NewsCard__warning NewsCard__warning_visible">
                Убрать из сохранённых
              </span>
            </div>
          </NewsCard>
        ))}
      </div>
    </section>
  );
}

export default SavedNews;
