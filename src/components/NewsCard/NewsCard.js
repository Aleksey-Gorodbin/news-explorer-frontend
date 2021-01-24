import React from "react";

import "./NewsCard.css";

function NewsCard({ children, url, date, title, description, sorceName, card }) {
  const months = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря'
  }

  function getDate() {
    let dateUtc = new Date(date);
    let year = dateUtc.getFullYear();
    let month = dateUtc.getMonth();
    let day = dateUtc.getDate();
    let dateISO = day + ' ' + months[month] + ', ' + year;
    return dateISO;
  }

  const formatDate = getDate();
  
  return (
    <div className="NewsCard">
      {children}
      <img className="NewsCard__image" src={url} alt="Изображение статьи" />
      <div className="NewsCard__info">
        <p className="NewsCard__date">{formatDate}</p>
        <h3 className="NewsCard__title">{title}</h3>
        <p className="NewsCard__description">{description}</p>
        <p className="NewsCard__link">{sorceName}</p>
      </div>
    </div>
  );
}

export default NewsCard;
