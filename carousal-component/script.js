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
  if (currPosition < element_count / 4 - 1) {
    slider.style.setProperty("--slider-position", +currPosition + 1);
  }
}, 1000);

const handleLeftArrow = throttle(function () {
  const currPosition = parseInt(
    slider_styles.getPropertyValue("--slider-position")
  );
  setActiveBar("left", currPosition);
  console.log(!currPosition !== 0, currPosition);
  if (currPosition !== 0) {
    slider.style.setProperty("--slider-position", +currPosition - 1);
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

  if (
    (currPosition === 0 && move === "left") ||
    (currPosition === element_count / 4 - 1 && move === "right")
  ) {
    return;
  }
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
