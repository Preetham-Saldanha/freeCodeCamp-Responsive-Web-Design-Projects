const first_card = document.getElementById("first-card");
const second_card = document.getElementById("second-card");
const third_card = document.getElementById("main-card");
const hidden_content = document.querySelector(".hidden-content");
const top_layer = document.querySelector(".top-layer");
const first_shell = document.getElementById("first-shell");
const second_shell = document.getElementById("second-shell");
const third_shell = document.getElementById("third-shell");
const projects_container =
  document.getElementsByClassName("projects-container")[0];
const about_section = document.getElementById("about-section");
// =======================first card event listener==========================

function first_card_handler() {
  // console.log(first_shell.firstElementChild);
  first_shell.firstElementChild.addEventListener("click", () => {
    // first_card.removeAttribute("change-first-card")
    console.log("first side bar");
    removeAboutSection();
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
    createAboutSection();
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
    projects_container.classList.add("tiny-fade");
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

    projects_container.classList.remove("tiny-fade");
  }, 1000);
}

// ==========================================================about section===========================
function createAboutSection() {
  // Create the root element
  const rootElement = document.getElementById("about-section");

  // Create the first profile-item section
  const profileItemSection = document.createElement("section");
  profileItemSection.setAttribute("class", "profile-item");
  rootElement.appendChild(profileItemSection);

  // Create the profile-img-container div
  const profileImgContainer = document.createElement("div");
  profileImgContainer.setAttribute("class", "profile-img-container");
  profileItemSection.appendChild(profileImgContainer);

  // Create the profile image
  const profileImg = document.createElement("img");
  profileImg.setAttribute("id", "profile-img");
  profileImg.setAttribute("src", "./Preetham-Photo-removebg-preview.png");
  profileImgContainer.appendChild(profileImg);

  // Create the div with width 80%
  const widthDiv = document.createElement("div");
  widthDiv.setAttribute("style", "width: 80%");
  profileItemSection.appendChild(widthDiv);

  // Create the profile title
  const profileTitle = document.createElement("div");
  profileTitle.setAttribute("class", "profile-title");
  profileTitle.textContent = "Preetham Wilson Saldanha";
  widthDiv.appendChild(profileTitle);

  // Create the profile subtitle
  const profileSubtitle = document.createElement("p");
  profileSubtitle.setAttribute("class", "profile-subtitle");
  profileSubtitle.textContent = "Junior Software Developer (EG India)";
  widthDiv.appendChild(profileSubtitle);

  // Create the horizontal rule
  const hrElement = document.createElement("hr");
  widthDiv.appendChild(hrElement);

  // Create the second profile-item section
  const descriptionSection = document.createElement("section");
  descriptionSection.setAttribute("class", "profile-item");
  rootElement.appendChild(descriptionSection);

  // Create the description paragraph
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.setAttribute("class", "description");
  descriptionParagraph.innerHTML = `<i style="font-size: 3rem; padding-right: 2px; margin: 0; line-height: 0; color: bisque;">H</i>ey there, I am excited to have you on this page where I showcase some
stuff about myself. Being from an engineering background with almost no
useful skills prior to, I stumbled upon programming in my sophomore
year. Initially, I was daunted by the unending number of keywords in Java,
but somehow caught up with writing small programs like bubble sort and binary
search. I went on to develop skills in front-end web development with
JavaScript and React, which made me realize that anyone could learn new things
and eventually succeed. It has been quite a journey, and I am looking forward
to more rewarding and challenging experiences that make life interesting.`;
  descriptionSection.appendChild(descriptionParagraph);

  // Create the third section
  const skillsSection = document.createElement("section");
  rootElement.appendChild(skillsSection);

  // Create the heading for the skills
  const skillsHeading = document.createElement("h1");
  skillsHeading.setAttribute(
    "style",
    "font-family: Poppins; font-weight: 400; font-size: 1.5rem;"
  );
  skillsHeading.textContent = "Things I Have Worked With:";
  skillsSection.appendChild(skillsHeading);

  // Create the horizontal rule
  const skillsHr = document.createElement("hr");
  skillsHr.setAttribute("style", "width: 22%; margin-left: 0;");
  skillsSection.appendChild(skillsHr);

  // Create the skills container div
  const skillsContainerDiv = document.createElement("div");
  skillsContainerDiv.setAttribute("class", "skills-container");
  skillsSection.appendChild(skillsContainerDiv);

  // Create an array of skill objects
  const skills = [
    { iconSrc: "icons8-html.svg", skillName: "HTML 5" },
    { iconSrc: "icons8-css.svg", skillName: "CSS 3" },
    { iconSrc: "icons8-javascript.svg", skillName: "JavaScript" },
    { iconSrc: "icons8-react.svg", skillName: "React JS" },
    { iconSrc: "icons8-java.svg", skillName: "Java" },
  ];

  // Loop through the skills array
  skills.forEach((skill) => {
    // Create a div for each skill
    const skillDiv = document.createElement("div"); // Create the skill icon

    const skillIcon = document.createElement("img");
    skillIcon.setAttribute("src", skill.iconSrc);
    skillIcon.setAttribute("width", "80px");
    skillDiv.appendChild(skillIcon); // Create the skill name

    const skillName = document.createElement("p");
    skillName.textContent = skill.skillName;
    skillDiv.appendChild(skillName); // Append the skill div to the skills container

    skillsContainerDiv.appendChild(skillDiv);
  });

  // Append the root element to the document body
  // document.body.appendChild(rootElement);
}

function removeAboutSection() {
  const rootElement = document.getElementById("about-section");
  // rootElement.style.content = "";
  const childrenOfAbout = [...rootElement.childNodes];
  for (const child of childrenOfAbout) {
    console.log(child);
    child.remove();
  }
  // rootElement.style.display = "flex";
}

first_card.addEventListener("click", first_card_handler);

second_card.addEventListener("click", second_card_handler);

third_card.addEventListener("click", third_card_handler);
