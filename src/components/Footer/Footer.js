import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import iconVk from "../../images/vk_white.svg";
import iconGh from "../../images/github.svg";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <p className="Footer__copyright">
          © 2020 Supersite, Powered by News API
        </p>

        <div className="Footer__links">
          <ul className="Footer__list-links">
            <li className="Footer__list-item">
              <Link to='/' className="Footer__link">Главная</Link>
            </li>
            <li className="Footer__list-item">
              <a href='https://praktikum.yandex.ru' className="Footer__link">Яндекс.Практикум</a>
            </li>
          </ul>

          <ul className="Footer__list-icons">
            <li className="Footer__list-item">
              <a className="Footer__link-icon Footer__link-icon_first" href="https://github.com/yandex-praktikum">
                <img src={iconGh} alt="Иконка ГХ"/>
              </a>
            </li>
            <li className="Footer__list-item">
              <a className="Footer__link-icon" href="https://vk.com/yandex.praktikum">
                <img src={iconVk} alt="Иконка Вк"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
