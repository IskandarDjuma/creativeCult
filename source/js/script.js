const navMain = document.querySelector(".top-nav");
const pageToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("top-nav--nojs");
pageToggle.classList.remove("page-header__toggle--nojs");

pageToggle.addEventListener("click", function() {
  if (navMain.classList.contains("top-nav--closed")) {
    navMain.classList.remove("top-nav--closed");
    navMain.classList.add("top-nav--opened");
    pageToggle.classList.remove("page-header__toggle--open");
    pageToggle.classList.add("page-header__toggle--close")
  } else {
    navMain.classList.add("top-nav--closed");
    navMain.classList.remove("top-nav--opened");
    pageToggle.classList.remove("page-header__toggle--close");
    pageToggle.classList.add("page-header__toggle--open")
  }
});



