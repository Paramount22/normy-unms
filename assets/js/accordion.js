"use strict";

const toggleExpanded = document.querySelector(".govuk-accordion__open-all");
let icons = document.querySelectorAll(".govuk-accordion__icon");

icons = Array.from(icons);

console.log(icons);

const override = () => {
  if (toggleExpanded.textContent == "Open all sections") {
    toggleExpanded.textContent = "Otvoriť všetko";
  } else {
    toggleExpanded.innerHTML = "Zatvoriť všetko";
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  toggleExpanded.innerHTML = "Ovoriť všetko";
});

toggleExpanded.addEventListener("click", override);

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(toggleExpanded.textContent);
  });
});
