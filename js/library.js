const searchBox = document.querySelector("#search-box");
const nav = document.querySelector(".nav");
searchBox.addEventListener("click", () => {
  nav.classList.toggle("nav-show-toggle");
});

window.confirm("Estamos em mautenção.");