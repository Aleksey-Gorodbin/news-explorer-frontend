import React from 'react';

import "./Preloader.css";

function Preloader() {
  return (
    <div className='Preloader'>
      <i className="Preloader__circle"></i>
      <p className='Preloader__text'>Идет поиск новостей...</p>
    </div>
  )
}

export default Preloader
