import { debounce, throttle } from "./throttlendebounce.js";

const slider = document.getElementsByClassName("slider")[0];
const left_arrow = document.getElementsByClassName("left-arrow-container")[0];
const right_arrow = document.getElementsByClassName("right-arrow-container")[0];

const slider_styles = window.getComputedStyle(slider);

const element_count =
  document.getElementsByClassName("slider")[0].childElementCount;

console.log("helloo");
const handleRightArrow = throttle(function () {
  const currPosition = parseInt(
    slider_styles.getPropertyValue("--slider-position")
  );
  setActiveBar("right", currPosition);
  // if (currPosition < element_count / 4 - 1) {
  //   slider.style.setProperty("--slider-position", currPosition + 1);
  // }

  slider.style.setProperty(
    "--slider-position",
    (currPosition + 1) % (element_count / 4)
  );
}, 1000);

const handleLeftArrow = throttle(function () {
  const currPosition = parseInt(
    slider_styles.getPropertyValue("--slider-position")
  );

  console.log(!currPosition !== 0, currPosition);
  // if (currPosition !== 0) {
  //   slider.style.setProperty("--slider-position", currPosition - 1);
  // }
  console.log(currPosition, currPosition !== 0);
  if (currPosition !== 0) {
    setActiveBar("left", currPosition);
    slider.style.setProperty("--slider-position", currPosition - 1);
  }
}, 1000);

right_arrow.addEventListener("click", handleRightArrow);

left_arrow.addEventListener("click", handleLeftArrow);

// ==================================================================initializing===================

const progress_bar = document.getElementById("progress-bar");

for (let i = 0; i < element_count / 4; i++) {
  const bar = document.createElement("div");
  // if (i === element_count / 4 - 1) bar.classList.add("active-bar");
  bar.classList.add("single-bar");

  progress_bar.appendChild(bar);
}

slider.style.setProperty("--total-items", element_count);

function setInitialActiveBar() {
  const parent = document.getElementById("progress-bar");
  console.log(parent, "here my progress bar");
  parent.firstElementChild.classList.add("active-bar");
}

setInitialActiveBar();

// ==================managing my progress bar====================

function setActiveBar(move, currPosition) {
  const parent = document.getElementById("progress-bar");
  const previous = document.getElementsByClassName("active-bar")[0];

  // if (
  //   (currPosition === 0 && move === "left") ||
  //   (currPosition === element_count / 4 - 1 && move === "right")
  // ) {
  //   return;
  // }

  previous.classList.remove("active-bar");

  if (move === "right") {
    let latest = (currPosition + 1) % (element_count / 4);
    console.log(element_count, latest, currPosition);
    parent.children[latest].classList.add("active-bar");
  } else {
    let latest = currPosition - 1;
    if (latest < 0) latest = element_count / 4 - 1;
    parent.children[latest].classList.add("active-bar");
  }
}

// =========================clock=======================

const hour_hand = document.getElementById("hour");
const minute_hand = document.getElementById("minute");
const second_hand = document.getElementById("second");

const date = new Date();
let hourValue = date.getHours();
let minuteValue = date.getMinutes();
hourValue = hourValue + minuteValue / 60;
let initialSecond = date.getSeconds();
let secondValue = initialSecond;

function updateAngle() {
  secondValue = secondValue + 1;
  if (secondValue % 60 === 1) {
    minuteValue = minuteValue + 1;
    hourValue = hourValue + 1 / 60;
  }

  hour_hand.style.setProperty("--hour-angle", `${hourValue}deg`);
  minute_hand.style.setProperty("--minute-angle", `${minuteValue}deg`);
  second_hand.style.setProperty("--second-angle", `${secondValue}deg`);
}

setInterval(updateAngle, 1000);
