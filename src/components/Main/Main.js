import React from "react";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ isUser, resultSearch, visiblePreloader, cards, showWarning, isVisible, saveCard }) {
  return (
    <main className="Main">
      {isUser && (
        <NewsCardList
          resultSearch={resultSearch}
          visiblePreloader={visiblePreloader}
          cards={cards}
          showWarning={showWarning}
          isVisible={isVisible}
          saveCard={saveCard}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
