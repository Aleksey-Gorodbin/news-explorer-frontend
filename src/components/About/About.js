import React from "react";

import "./About.css";
import avatar from "../../images/main-screen.png";

function About() {
  return (
    <section className="About">
      <img className="About__avatar" src={avatar} alt="Аватар" />
      <div className="About__info">
        <h2 className="About__title">Об авторе</h2>
        <p className="About__description">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
}

export default About;
