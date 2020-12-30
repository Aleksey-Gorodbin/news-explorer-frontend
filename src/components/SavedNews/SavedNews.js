import React from "react";
import NewsCard from "../NewsCard/NewsCard";

import "./SavedNews.css";

function SavedNews({ isVisible }) {
  return (
    <section className="SavedNews">
      <div className="SavedNews__grid">
        <NewsCard>
          <div className="NewsCard__categoria">Природа</div>
          <div className="NewsCard__icon">
            <span
              className={`NewsCard__warning ${
                isVisible ? "NewsCard__warning_visible" : ""
              }`}
            >
              Убрать из сохранённых
            </span>
            <button className="NewsCard__button NewsCard__button_saved-news" />
          </div>
        </NewsCard>
      </div>
    </section>
  );
}

export default SavedNews;
