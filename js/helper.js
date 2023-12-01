"use strict";
console.log("helper.js file was loaded");

// generic pagalbine funcija kuti parsius dioumenis ir juos grazins

function getData(url) {
  return fetch(url)
    .then((resp) => {
      if (resp.ok === false) {
        throw new Error(`Klaida: ${resp.statusText} code: ${resp.status}`);
      }
    })
    .then((data) => {
      console.log("getData got data ===", data);
      return data;
    })
    .catch((error) => {
      console.warn(error);
    });
}
// const todosUrl = "123https://jsonplaceholder.typicode.com/todos";

// getData(todosUrl);
// let rez = getData(todosUrl);
// console.log("rez ===", rez);

// getData(todosUrl).then((todoArr) => {
//   console.log("todoArr ===", todoArr.slice(0, 10));
// });
