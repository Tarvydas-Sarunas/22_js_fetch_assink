"use strict";
console.log("assyncPrac.js file was loaded");

const baseUrl = "https://jsonplaceholder.typicode.com";
console.log("baseUrl ===", baseUrl);

// su atskirom funkcijom parsiusti ir iskonsolinti naudojant async await
// todos - pirmus 10
// posts - pirmus 15
// comments - pirmus 7

// function declaration
async function getTodos() {
  try {
    const resp = await fetch(`${baseUrl}/todos`);
    const todos = await resp.json();
    const todosFirst10 = todos.slice(0, 11);
    return todosFirst10;
    console.log("todosFirst10 ===", todosFirst10);
  } catch (error) {
    console.warn(error);
  }
}
// getTodos();

async function getPosts() {
  try {
    const resp = await fetch(`${baseUrl}/posts`);
    const posts = await resp.json();
    const postsFirst15 = posts.slice(0, 16);
    return postsFirst15;
    console.log("postsFirst15 ===", postsFirst15);
  } catch (error) {
    console.log("error ===", error);
  }
}

// getPosts();

async function getComments() {
  try {
    const resp = await fetch(`${baseUrl}/comments`);
    const comments = await resp.json();
    const commentsFirst7 = comments.slice(0, 8);
    return commentsFirst7;
    console.log("commentsFirst7 ===", commentsFirst7);
  } catch (error) {
    console.log("error ===", error);
  }
}
// getComments();

// function expretion

const getPosts2 = async function () {
  try {
    const resp = await fetch(`${baseUrl}/posts`);
    const posts = await resp.json();
    const postsFirst15 = posts.slice(0, 16);

    console.log("posts2First15 ===", postsFirst15);
  } catch (error) {
    console.log("error ===", error);
  }
};
// getPosts2();

// arrow functija
const getComments2 = async () => {
  try {
    const resp = await fetch(`${baseUrl}/comments`);
    const comments = await resp.json();
    const commentsFirst7 = comments.slice(0, 8);
    return commentsFirst7;
    console.log("commentsFirst7 ===", commentsFirst7);
  } catch (error) {
    console.log("error ===", error);
  }
};
// getComments2();

async function init() {
  const todosArr = await getTodos();
  const postsArr = await getPosts();
  const commArr = await getComments();
  console.log("todosArr ===", todosArr);
  console.log("postsArr ===", postsArr);
  console.log("commArr ===", commArr);

  const oneArrToRulesThemAll = [...todosArr, ...commArr, ...postsArr];
  console.log("oneArrToRulesThemAll ===", oneArrToRulesThemAll);
}
init();
