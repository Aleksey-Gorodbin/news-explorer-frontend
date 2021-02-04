import React from "react";

import "./PopupWithForm.css";

function PopupWithForm({ children, handleChange, valueEmail, valuePassword, errorEmail, errorPassword }) {
  return (
    <div className="PopupWithForm">
      <label className="PopupWithForm__label">
        <p className="PopupWithForm__label-name">Email</p>
        <input
          className="PopupWithForm__input"
          placeholder="Введите почту"
          type="email"
          name="email"
          onChange={handleChange}
          value={valueEmail || ""}
          required
        ></input>
        <p className="PopupWithForm__error">{errorEmail || ''}</p>
      </label>
      <label className="PopupWithForm__label">
        <p className="PopupWithForm__label-name">Пароль</p>
        <input
          className="PopupWithForm__input"
          placeholder="Введите пароль"
          type="password"
          name="password"
          onChange={handleChange}
          value={valuePassword || ""}
          required
        ></input>
        <p className="PopupWithForm__error">{errorPassword || ''}</p>
      </label>
      {children}
    </div>
  );
}

export default PopupWithForm;
