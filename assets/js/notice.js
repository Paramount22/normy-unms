"use strict";

/* Notice for paper version */

// selectors
const orderPaper = document.querySelector(".order-paper-version");
const noticeForPaperVersion = document.getElementById(
  "modal-for-paper-version"
);
const closeNoticePaper = document.getElementById("close-notice-paper");

// Listeners
orderPaper.addEventListener("click", (event) => {
  toggleModalPaper("1", "auto");
  event.preventDefault();
});

closeNoticePaper.addEventListener("click", (event) => {
  toggleModalPaper("0", "none");
  event.preventDefault();
});

// Function
const toggleModalPaper = (opacity, pointerEvents) => {
  noticeForPaperVersion.style.opacity = opacity;
  noticeForPaperVersion.style.pointerEvents = pointerEvents;
};

/*  Notice for electronic version */

// selectors
const orderElectronic = document.querySelector(".order-electronic-version");
const noticeForElectronicVersion = document.getElementById(
  "modal-for-electronic-version"
);
const closeNoticeElectronic = document.getElementById(
  "close-notice-electronic"
);

// Listeners
orderElectronic.addEventListener("click", (event) => {
  toggleModalElectronic("1", "auto");

  event.preventDefault();
});

closeNoticeElectronic.addEventListener("click", (event) => {
  toggleModalElectronic("0", "none");
  event.preventDefault();
});

// Function
const toggleModalElectronic = (opacity, pointerEvents) => {
  noticeForElectronicVersion.style.opacity = opacity;
  noticeForElectronicVersion.style.pointerEvents = pointerEvents;
};
