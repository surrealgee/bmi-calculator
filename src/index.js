import logo from "./assets/images/logo.svg";
import img from "./assets/images/image-man-eating.webp";
import eatingIcon from "./assets/images/icon-eating.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import sleepIcon from "./assets/images/icon-sleep.svg";
import genderIcon from "./assets/images/icon-gender.svg";
import ageIcon from "./assets/images/icon-age.svg";
import muscleIcon from "./assets/images/icon-muscle.svg";
import pregnancyIcon from "./assets/images/icon-pregnancy.svg";
import raceIcon from "./assets/images/icon-race.svg";

function imageLoader() {
  document.querySelector(".logo").src = logo;
  document.querySelector(".img-man-eating").src = img;
  document.querySelector(".icon-eating").src = eatingIcon;
  document.querySelector(".icon-exercise").src = exerciseIcon;
  document.querySelector(".icon-sleep").src = sleepIcon;
  document.querySelector(".icon-gender").src = genderIcon;
  document.querySelector(".icon-age").src = ageIcon;
  document.querySelector(".icon-muscle").src = muscleIcon;
  document.querySelector(".icon-pregnancy").src = pregnancyIcon;
  document.querySelector(".icon-race").src = raceIcon;
}

window.addEventListener("load", imageLoader);
