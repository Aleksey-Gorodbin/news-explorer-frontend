import React from 'react';

import "./SearchForm.css";

function SearchForm({submitSearchForm, handleChange, valueKeyWord, errorKeyWord}) {

  return (
    <form onSubmit={submitSearchForm} className='SearchForm'>
      <h1 className='SearchForm__title'>Что творится в мире?</h1>
      <p className='SearchForm__paragraph'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <div className='SearchForm__string'>
        <input className='SearchForm__input'
          type="text"
          name="keyWord"
          onChange={handleChange}
          value={valueKeyWord || ""}
        />
        <p className="SearchForm__error">{errorKeyWord || ''}</p>
        <button type='submit' className='SearchForm__button'>Искать</button>
      </div>
    </form>
  )
}

export default SearchForm
