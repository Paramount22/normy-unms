'use strict';
// modal window for standards to download
const openDownload = document.getElementById(
  'open-modal-standards-to-download'
);

const modalDownload = document.getElementById(
  'modal-for-standards-to-download'
);

const closeDownload = document.getElementById('close-to-download');

// Listeners
openDownload.addEventListener('click', (event) => {
  event.preventDefault();
  openModaltoDownload();
});

closeDownload.addEventListener('click', (event) => {
  event.preventDefault();
  closeModalToDownload();
});

/* Functions */

// open modal window
const openModaltoDownload = () => {
  modalDownload.style.opacity = '1';
  modalDownload.style.pointerEvents = 'auto';
};

// closa modal window
const closeModalToDownload = () => {
  modalDownload.style.opacity = '0';
  modalDownload.style.pointerEvents = 'none';
};

/** -------------------------------------------- */

// modal window for standards online

const openOnline = document.getElementById('open-modal-standards-online');
const modalOnline = document.getElementById('modal-for-standards-online');
const closeOnline = document.getElementById('close-online');

// Listeners
openOnline.addEventListener('click', (event) => {
  event.preventDefault();
  openModalOnline();
});

closeOnline.addEventListener('click', (event) => {
  event.preventDefault();
  closeModalOnline();
});

/* Functions */

// open modal window
const openModalOnline = () => {
  modalOnline.style.opacity = '1';
  modalOnline.style.pointerEvents = 'auto';
};

// closa modal window
const closeModalOnline = () => {
  modalOnline.style.opacity = '0';
  modalOnline.style.pointerEvents = 'none';
};

// clocse both modal windows when press Escape
document.body.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    closeModalToDownload();
    closeModalOnline();
  }
});
