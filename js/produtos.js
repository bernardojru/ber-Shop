const searchBox = document.querySelector("#search-box");
const nav = document.querySelector(".nav");
const container = document.querySelector(".container-online");
const btn = document.querySelector(".btn");
searchBox.addEventListener("click", () => {
  nav.classList.toggle("nav-show-toggle");
});
btn.addEventListener("click", () => {
  container.classList.toggle("container-online");
  container.classList.toggle("new-container");
});
