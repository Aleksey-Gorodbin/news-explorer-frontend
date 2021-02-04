export const BASE_URL = "https://api.run.students.nomoredomains.icu";
//Запрос к апи на регистрацию_________________________________
export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
      name,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
};
//Запрос к апи на авторизацию_________________________________
export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("jwt", data.token);
    })
};
//Запрос к апи на получение информации о пользователе_________________________________
export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
};
//Запрос к апи на получение карточек_________________________________
export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
};
//Запрос к апи на создание новой карточки_________________________________
export const createArticle = (keyword, title, text, date, source, link, image) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ keyword, title, text, date, source, link, image }),
  })
    .then((response) => response.json())
};

//Запрос к апи на удаление карточки_________________________________
export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
};

