const header = document.querySelector(".header")
const searchBox = document.querySelector("#search-box")
const nav = document.querySelector(".nav")
const laptopNice = document.querySelector(".laptop-nice-container")
const laptopWhite = document.querySelector(".laptop-white-container")
const laptopWork = document.querySelector(".laptop-work-container")

window.addEventListener("load", ()=> {
    header.classList.add("header-show")
    laptopNice.classList.add("laptop-container-show")
    laptopWhite.classList.add("laptop-container-show")
    laptopWork.classList.add("laptop-container-show")
})
searchBox.addEventListener("click", ()=> {
    nav.classList.toggle("nav-show-toggle")
})



