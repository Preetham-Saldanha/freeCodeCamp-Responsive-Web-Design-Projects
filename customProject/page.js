const first_card = document.getElementById("first-card");
const second_card = document.getElementById("second-card");
const hidden_content = document.querySelector(".hidden-content");
const top_layer = document.querySelector(".top-layer");
const first_shell = document.getElementById("first-shell");
const second_shell = document.getElementById("second-shell");
const third_shell = document.getElementById("third-shell");

// =======================first card event listener==========================

function first_card_handler() {
  first_shell.childNodes[0].addEventListener("click", () => {
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

    first_shell.childNodes[0].removeEventListener("click", first_card_handler); // why is this working?...second argument is not its own handler rather is parent's hanlder
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
  second_shell.childNodes[0].addEventListener("click", () => {
    // second_card.removeAttribute("change-first-card")
    console.log("sidebar of 2nd shell");
    // second_shell.childNodes[0].removeEventListener("click")
    setTimeout(() => {
      top_layer.classList.remove("tiny-fade");
      second_card.addEventListener("click", second_card_handler);
    }, 800);

    setTimeout(() => {
      second_shell.classList.remove("zoom-to-full", "shrink-back");

      first_shell.classList.remove("do-not-display");
      third_shell.classList.remove("do-not-display");
    }, 1400);

    second_shell.childNodes[0].removeEventListener(
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

first_card.addEventListener("click", first_card_handler);

second_card.addEventListener("click", second_card_handler);
