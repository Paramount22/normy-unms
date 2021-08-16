"use strict";
// Selectors
const records = document.querySelectorAll(".found-record-container");

// Functions
const showRecods = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  records.forEach((record) => {
    const recordTop = record.getBoundingClientRect().top;

    if (recordTop < triggerBottom) {
      record.classList.add("show-record");
    } else {
      record.classList.remove("show-record");
    }
  });
};

// Listeners
window.addEventListener("DOMContentLoaded", showRecods);
window.addEventListener("scroll", showRecods);
