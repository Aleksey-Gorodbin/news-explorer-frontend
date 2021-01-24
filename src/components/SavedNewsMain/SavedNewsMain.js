import React from "react";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";

function SavedNewsMain({ clickBurger, leaveProfile, cards, deleteCard }) {
  return (
    <>
      <SavedNewsHeader
        cards={cards}
        background={false}
        clickBurger={clickBurger}
        leaveProfile={leaveProfile}
        countCards={cards.length}
      />
      <SavedNews cards={cards} deleteCard={deleteCard} />
    </>
  );
}

export default SavedNewsMain;
