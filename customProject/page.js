const first_card = document.getElementById("first-card");
const second_card = document.getElementById("second-card");
const third_card = document.getElementById("main-card");
const hidden_content = document.querySelector(".hidden-content");
const top_layer = document.querySelector(".top-layer");
const first_shell = document.getElementById("first-shell");
const second_shell = document.getElementById("second-shell");
const third_shell = document.getElementById("third-shell");
const project_tile = document.getElementsByClassName("project-tile")[0];
// =======================first card event listener==========================

function first_card_handler() {
  // console.log(first_shell.firstElementChild);
  first_shell.firstElementChild.addEventListener("click", () => {
    // first_card.removeAttribute("change-first-card")

    setTimeout(() => {
      top_layer.classList.remove("tiny-fade");
      first_card.addEventListener("click", first_card_handler);
    }, 800);

    setTimeout(() => {
      first_shell.classList.remove("zoom-to-full", "shrink-back");

      second_shell.classList.remove("do-not-display");
      third_shell.classList.remove("do-not-display");
    }, 1400);

    first_shell.firstElementChild.removeEventListener(
      "click",
      first_card_handler
    ); // why is this working?...second argument is not its own handler rather is parent's hanlder
    console.log("cheking");
    first_shell.classList.add("shrink-back");
    top_layer.classList.remove("do-not-display");
  });

  // first_card.setAttribute("change-first-card",true);

  first_shell.classList.add("zoom-to-full");

  first_card.removeEventListener("click", first_card_handler);

  second_shell.classList.add("do-not-display");
  third_shell.classList.add("do-not-display");
  top_layer.classList.add("tiny-fade");
  setTimeout(() => {
    top_layer.classList.add("do-not-display");
  }, 1000);
}

//===============================second card event listener=================================

function second_card_handler() {
  console.log("parent 2nd card");
  second_shell.firstElementChild.addEventListener("click", () => {
    // second_card.removeAttribute("change-first-card")
    console.log("sidebar of 2nd shell");
    // second_shell.firstElementChild.removeEventListener("click")
    setTimeout(() => {
      top_layer.classList.remove("tiny-fade");
      second_card.addEventListener("click", second_card_handler);
    }, 800);

    setTimeout(() => {
      second_shell.classList.remove("zoom-to-full", "shrink-back");

      first_shell.classList.remove("do-not-display");
      third_shell.classList.remove("do-not-display");
    }, 1400);

    second_shell.firstElementChild.removeEventListener(
      "click",
      second_card_handler
    );

    second_shell.classList.add("shrink-back");
    top_layer.classList.remove("do-not-display");
  });

  // second_card.setAttribute("change-first-card",true);

  second_shell.classList.add("zoom-to-full");
  second_card.removeEventListener("click", second_card_handler);
  first_shell.classList.add("do-not-display");
  third_shell.classList.add("do-not-display");
  top_layer.classList.add("tiny-fade");
  setTimeout(() => {
    top_layer.classList.add("do-not-display");
  }, 1000);
}

//================================================================================

function third_card_handler() {
  console.log("parent 3rd card");
  third_shell.firstElementChild.addEventListener("click", () => {
    // second_card.removeAttribute("change-first-card")
    console.log("sidebar of 3rd shell");
    project_tile.classList.add("tiny-fade");
    // second_shell.firstElementChild.removeEventListener("click")
    setTimeout(() => {
      top_layer.classList.remove("tiny-fade");
      third_card.addEventListener("click", third_card_handler);
    }, 1000);

    setTimeout(() => {
      third_shell.classList.remove("slide-third-shell", "unslide-third-shell");

      first_shell.classList.remove("do-not-display");
      second_shell.classList.remove("do-not-display");
    }, 1400);

    third_shell.firstElementChild.removeEventListener(
      "click",
      third_card_handler
    );

    third_shell.classList.add("unslide-third-shell");
    top_layer.classList.remove("do-not-display");
  });

  // second_card.setAttribute("change-first-card",true);

  third_shell.classList.add("slide-third-shell");
  third_card.removeEventListener("click", third_card_handler);
  first_shell.classList.add("do-not-display");
  second_shell.classList.add("do-not-display");
  top_layer.classList.add("tiny-fade");
  setTimeout(() => {
    top_layer.classList.add("do-not-display");
    // slowly setting opacity of content

    project_tile.classList.remove("tiny-fade");
  }, 1000);
}

first_card.addEventListener("click", first_card_handler);

second_card.addEventListener("click", second_card_handler);

third_card.addEventListener("click", third_card_handler);
