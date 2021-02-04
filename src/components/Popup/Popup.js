import React from "react";

import "./Popup.css";

function Popup({children, title, isOpen, isClose, onSubmit}) {
  return (
    <section className={`Popup ${
      isOpen ? "Popup_opened" : ""
    }`}>
      <form className="Popup__container" onSubmit={onSubmit}>
        <button
          type="button"
          aria-label="close"
          className="Popup__button-close"
          onClick={isClose}
        ></button>
        <h3 className="Popup__title">{title}</h3>
        {children}
      </form>
    </section>
  );
}

export default Popup;
