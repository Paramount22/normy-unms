"use strict";
// modal window for standards to download

//selectors
const openDownload = document.getElementById(
  "open-modal-standards-to-download"
);

const modalDownload = document.getElementById(
  "modal-for-standards-to-download"
);

const closeDownload = document.getElementById("close-to-download");

// Listeners
openDownload.addEventListener("click", (event) => {
  event.preventDefault();
  toggleModalDownload("1", "auto");
});

closeDownload.addEventListener("click", (event) => {
  event.preventDefault();
  toggleModalDownload("0", "none");
});

/* Functions */

// open/close modal window
const toggleModalDownload = (opacity, pointerEvents) => {
  modalDownload.style.opacity = opacity;
  modalDownload.style.pointerEvents = pointerEvents;
};

/** -------------------------------------------- */

// modal window for standards online

//selectors
const openOnline = document.getElementById("open-modal-standards-online");
const modalOnline = document.getElementById("modal-for-standards-online");
const closeOnline = document.getElementById("close-online");

// Listeners
openOnline.addEventListener("click", (event) => {
  event.preventDefault();
  toggleModalOnline("1", "auto");
});

closeOnline.addEventListener("click", (event) => {
  event.preventDefault();
  toggleModalOnline("0", "none");
});

/* Functions */

// open/close modal window
const toggleModalOnline = (opacity, pointerEvents) => {
  modalOnline.style.opacity = opacity;
  modalOnline.style.pointerEvents = pointerEvents;
};

// clocse both modal windows when press Escape
document.body.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    toggleModalDownload("0", "none");
    toggleModalOnline("0", "none");
  }
});
