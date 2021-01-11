import React from "react";

import "./NewsCard.css";
import gg from "../../images/main-screen.png";

function NewsCard({ children }) {
  return (
    <div className="NewsCard">
      {children}
      <img className="NewsCard__image" src={gg} alt="Изображение статьи" />
      <div className="NewsCard__info">
        <p className="NewsCard__date">2 августа, 2019</p>
        <h3 className="NewsCard__title">Национальное достояние – парки</h3>
        <p className="NewsCard__description">
          В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
          складываться система национальных парков – охраняемых территорий, где
          и сегодня каждый может приобщиться к природе.
        </p>
        <a className="NewsCard__link" href="https://itv.te-st.ru/tasks">
          ССЫЛКА
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
