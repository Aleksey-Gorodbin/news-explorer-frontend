import React from "react";

import "./SavedNewsInfo.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsInfo({ countCards, cards }) {
  const currentUser = React.useContext(CurrentUserContext);
  const filterArr = cards.map((card) => {
    return card.keyword;
  });
  const arr = filterArr.filter((item, index) => {
    return filterArr.indexOf(item) === index;
  });

  return (
    <div className="SavedNewsInfo">
      <p className="SavedNewsInfo__text-top">Сохранённые статьи</p>
      <h2 className="SavedNewsInfo__title">{`${currentUser.name}, у вас ${countCards} сохранённых статей`}</h2>
      <p className="SavedNewsInfo__words">
        {arr.length < 4 ? (
          <>
            <span>По ключевым словам: </span>
            {arr.map((item, index) => (
              <span key={index}>{`${item}, `}</span>
            ))}
          </>
        ) : (
          <>
            <span>По ключевым словам: </span>
            {arr.slice(0, 2).map((item, index) => (
              <span key={index}>{`${item}, `}</span>
            ))}
            <span>{`и ${arr.length - 2}-м другим`}</span>
          </>
        )}
      </p>
    </div>
  );
}

export default SavedNewsInfo;
