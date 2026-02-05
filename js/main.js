// Elements;
import {
  _,
  openMenu,
  closeBtn,
  mobileMenu,
  ul,
  indicatoreBtn,
  header,
  form,
  projecstWrapper,
  skillsWrapper,
} from "./dom.js";

import { projecstBox, skillsBox } from "./projectsUi.js";
import { mySkills, projectsDetails } from "./projects.js";

// Hide loading when page load;
window.addEventListener("load", () => {
  const preLoader = document.querySelector("#preLoading");
  preLoader.style.display = "none";
});

projectsDetails.forEach((project) => {
  projecstWrapper.insertAdjacentHTML("beforeend", projecstBox(project));
});

mySkills.forEach((skill) => {
  skillsWrapper.insertAdjacentHTML("beforeend", skillsBox(skill));
});

const toggleMobileMenu = function (width, display) {
  mobileMenu.style.right = width;
  indicatoreBtn.style.display = display;
  overlay.classList.toggle("overlay");
};

mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    toggleMobileMenu("-400px", "none");
  }
});

// smooth Scrolling;
ul.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "A") {
    const id = e.target.getAttribute("href");
    _.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// Back to top;
indicatoreBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Height of page;
window.onscroll = () => {
  let height = (scrollY / (document.body.scrollHeight - innerHeight)) * 100;
  indicatoreBtn.style.background = `conic-gradient(white ${height}%, transparent ${height}% 100%)`;

  if (window.scrollY > 100) {
    indicatoreBtn.style.transform = "translateX(-150%)";
    header.style.backgroundColor = "black";
  } else {
    indicatoreBtn.style.transform = "translateX(0%)";
    indicatoreBtn.style.opacity = "0.7";
    header.style.backgroundColor = "transparent";
  }
};

// Create overlay;
const overlay = document.createElement("div");
header.appendChild(overlay);

overlay.addEventListener("click", () => {
  toggleMobileMenu("-400px", "bloxk");
});

// Open Button;
openMenu.addEventListener("click", () => {
  toggleMobileMenu("0px", "none");
});

// Close Button
closeBtn.addEventListener("click", () => {
  toggleMobileMenu("-400px", "block");
});

// Reset form after submiting;
form.addEventListener("submit", function () {
  form.reset();
});
