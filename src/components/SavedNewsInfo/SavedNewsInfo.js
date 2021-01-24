import React from "react";

import "./SavedNewsInfo.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsInfo({ countCards, cards }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className="SavedNewsInfo">
      <p className="SavedNewsInfo__text-top">Сохранённые статьи</p>
      <h2 className="SavedNewsInfo__title">{`${currentUser.name}, у вас ${countCards} сохранённых статей`}</h2>
      <p className="SavedNewsInfo__words">
        <span>По ключевым словам: </span>
        {cards.map((card, index) => (
          <span key={index}>{`${card.keyword}, `}</span>
        ))}
      </p>
    </div>
  );
}

export default SavedNewsInfo;
