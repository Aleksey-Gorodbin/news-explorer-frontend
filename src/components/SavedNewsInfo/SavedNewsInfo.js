import React from "react";

import "./SavedNewsInfo.css";

function SavedNewsInfo() {
  return (
    <div className="SavedNewsInfo">
      <p className="SavedNewsInfo__text-top">Сохранённые статьи</p>
      <h2 className="SavedNewsInfo__title">Грета, у вас 5 сохранённых статей</h2>
      <p className="SavedNewsInfo__words">По ключевым словам: Природа, Тайга и 2-м другим</p>
    </div>
  );
}

export default SavedNewsInfo;
