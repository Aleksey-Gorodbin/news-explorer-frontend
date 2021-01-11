import React from "react";

import "./PopupWithForm.css";

function PopupWithForm({children}) {
  return (
    <div className='PopupWithForm'>
      <label className="PopupWithForm__label">Email</label>
      <input
        className="PopupWithForm__input"
        placeholder="Введите почту"
        type="email"
      ></input>
      <label className="PopupWithForm__label">Пароль</label>
      <input
        className="PopupWithForm__input"
        placeholder="Введите пароль"
        type="password"
      ></input>
      {children}
    </div>
  );
}

export default PopupWithForm;
