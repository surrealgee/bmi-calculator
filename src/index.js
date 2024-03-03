import logo from "./assets/images/logo.svg";
// import img from "./assets/images/image-man-eating.webp";
import eatingIcon from "./assets/images/icon-eating.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import sleepIcon from "./assets/images/icon-sleep.svg";

function imageLoader() {
  document.querySelector(".logo").src = logo;
  //   document.querySelector(".img-man-eating").src = img;
  document.querySelector(".icon-eating").src = eatingIcon;
  document.querySelector(".icon-exercise").src = exerciseIcon;
  document.querySelector(".icon-sleep").src = sleepIcon;
}

window.addEventListener("load", imageLoader);
