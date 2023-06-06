const slider = document.getElementsByClassName("slider")[0];
const left_arrow = document.getElementsByClassName("left-arrow-container")[0];
const right_arrow = document.getElementsByClassName("right-arrow-container")[0];

console.log(left_arrow, right_arrow, slider, document);

const slider_styles = window.getComputedStyle(slider);

const element_count =
  document.getElementsByClassName("slider")[0].childElementCount;

console.log(element_count);

// arrow handlers

right_arrow.addEventListener("click", () => {
  const currPosition = parseInt(
    slider_styles.getPropertyValue("--slider-position")
  );
  if (currPosition < element_count / 4 - 1) {
    slider.style.setProperty("--slider-position", +currPosition + 1);
  }
});

left_arrow.addEventListener("click", () => {
  // const slider_styles = window.getComputedStyle(slider);
  const currPosition = parseInt(
    slider_styles.getPropertyValue("--slider-position")
  );

  console.log(!currPosition !== 0, currPosition);
  if (currPosition !== 0) {
    slider.style.setProperty("--slider-position", +currPosition - 1);
  }
});

console.log("sadjde");
