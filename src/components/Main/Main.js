import React from "react";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ isUser }) {
  return (
    <main className="Main">
      {isUser && <NewsCardList isVisible={false} />}
      <About />
    </main>
  );
}

export default Main;
