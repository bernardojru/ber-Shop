const header = document.querySelector(".header")
const container = document.querySelector(".container")
const logo = document.querySelector(".logo")
const line = document.querySelector(".line")
const btn = document.querySelector(".btn")
const searchBox = document.querySelector("#search-box")
const nav = document.querySelector(".nav")
searchBox.addEventListener("click", ()=> {
    nav.classList.toggle("nav-show-toggle")
})
window.addEventListener("load", ()=> {
    header.classList.add("header-show")
    // 
    logo.classList.add("logo-show")
    logo.classList.remove("logo")
    // 
    line.classList.add("line-show")
    line.classList.remove("line")
    // 
    btn.classList.add("btn-show")
    btn.classList.remove("btn")
})
btn.addEventListener("click", ()=> {
    container.classList.toggle("container")
    container.classList.toggle("new-container")
})