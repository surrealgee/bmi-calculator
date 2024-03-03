import logo from "./assets/images/logo.svg";

function imageLoader() {
  document.querySelector(".logo").src = logo;
}

window.addEventListener("load", imageLoader);
