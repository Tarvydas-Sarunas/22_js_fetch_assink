"use strict";
console.log("fetch.js file was loaded");

const url = "https://jsonplaceholder.typicode.com/todos";
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },

const els = {
  todosListEl: document.getElementById("todos"),
};

let mainTodoArr = [];
console.log("mainTodoArr ===", mainTodoArr);

getTodos();

function getTodos() {
  fetch(url)
    .then((resp) => resp.json())
    .then((todoArr) => {
      const todosToWorkWith = todoArr.slice(0, 6);
      console.table(todosToWorkWith);
      // mainTodoArr = todosToWorkWith;

      printTodisToHtml(todosToWorkWith);
    })
    .catch(console.warn);
}

function printTodisToHtml(todoArr) {
  const htmlTodoArr = todoArr.map((todoObj) => {
    console.log("todoObj ===", todoObj);
    const btnEl = document.createElement("btn");
    btnEl.classList.add("list-group-item", "list-group-item-action");
    if (todoObj.completed === true) {
      btnEl.classList.add("bg-success-subtle");
    }
    btnEl.innerHTML = `[id] ${todoObj.id}<strong>${todoObj.title}</strong> done: ${todoObj.completed}`;
    return btnEl;
  });
  els.todosListEl.append(...htmlTodoArr);
}
