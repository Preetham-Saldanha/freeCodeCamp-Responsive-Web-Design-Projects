import { debounce, throttle } from "./throttlendebounce.js";

const slider = document.getElementsByClassName("slider")[0];
const left_arrow = document.getElementsByClassName("left-arrow-container")[0];
const right_arrow = document.getElementsByClassName("right-arrow-container")[0];

const slider_styles = window.getComputedStyle(slider);

const element_count =
  document.getElementsByClassName("slider")[0].childElementCount;

console.log(element_count);

console.log("helloo");
const handleRightArrow = throttle(function () {
  const currPosition = parseInt(
    slider_styles.getPropertyValue("--slider-position")
  );
  if (currPosition < element_count / 4 - 1) {
    slider.style.setProperty("--slider-position", +currPosition + 1);
  }
}, 1000);

const handleLeftArrow = throttle(function () {
  const currPosition = parseInt(
    slider_styles.getPropertyValue("--slider-position")
  );

  console.log(!currPosition !== 0, currPosition);
  if (currPosition !== 0) {
    slider.style.setProperty("--slider-position", +currPosition - 1);
  }
}, 1000);

right_arrow.addEventListener("click", handleRightArrow);

left_arrow.addEventListener("click", handleLeftArrow);
