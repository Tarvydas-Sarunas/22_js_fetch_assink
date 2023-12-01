"use strict";
console.log("assyncAwait.js file was loaded");

const baseUrl = "123https://jsonplaceholder.typicode.com";

function gerUsers() {
  fetch(`${baseUrl}/users`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data ===", data);
    })
    .catch((err) => console.warn(err));
}
gerUsers();

async function gerUsersA() {
  try {
    const resp = await fetch(`${baseUrl}/users`);
    const data = await resp.json();
    console.log("resp ===", resp);
    console.log("data ===", data);
    return data;
  } catch (error) {
    console.warn("error ===", error);
  }
}
gerUsersA();
gerUsersA().then((rez) => console.log("rez ===", rez));
