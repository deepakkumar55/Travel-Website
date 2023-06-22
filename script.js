const container = document.querySelector(".container");
const navLinks = document.querySelectorAll(".nav-link");
const navOpenIcon = document.querySelector(".open-navbar-icon");
const navCloseIcon = document.querySelector(".close-navbar-icon");
const navBtns = document.querySelectorAll(".navigation-button");

//Click event for button that opens nav
navOpenIcon.addEventListener("click", () => {
  container.classList.add("change");
});

//Click event for button that closes nav
navCloseIcon.addEventListener("click", () => {
  container.classList.remove("change");
});

//color varieties for nav links
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(navLinks).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(navBtns).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
