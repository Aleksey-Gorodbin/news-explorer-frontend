export const searchArticles = (word) => {
  function getDateNow() {
    let dateUtc = new Date();
    let year = dateUtc.getFullYear();
    let month = dateUtc.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let day = dateUtc.getDate();
    let dateISO = year + '-' + month + '-' + day;
    return dateISO;
  }

  function getDateLast() {
    let dateUtc = new Date();
    let year = dateUtc.getFullYear();
    let month = dateUtc.getMonth() + 1;
    let day = dateUtc.getDate() - 7;
    if (day <= 0) {
      month -= 1;
      if (month <= 0) {
        year -= 1;
      }
    }
    if (month < 10) {
      month = '0' + month;
    }
    let dateISO = year + '-' + month + '-' + day;
    return dateISO;
  }
  const dateTo = getDateLast();
  const dateFrom = getDateNow();
  return fetch(
    `http://newsapi.org/v2/everything?q=${word}&to=${dateTo}&from=${dateFrom}&pageSize=100&apiKey=bc70d8a2cbad4bad8d4103f343ce10e5`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.articles;
    });
};
