'use strict';

/* Notice for paper version */

const orderPaper = document.querySelector('.order-paper-version');
const noticeForPaperVersion = document.getElementById(
  'modal-for-paper-version'
);
const closeNoticePaper = document.getElementById('close-notice-paper');

orderPaper.addEventListener('click', (event) => {
  noticeForPaperVersion.style.opacity = '1';
  noticeForPaperVersion.style.pointerEvents = 'auto';
  event.preventDefault();
});

closeNoticePaper.addEventListener('click', (event) => {
  noticeForPaperVersion.style.opacity = '0';
  noticeForPaperVersion.style.pointerEvents = 'none';
  event.preventDefault();
});

/*  Notice for electronic version */

const orderElectronic = document.querySelector('.order-electronic-version');
const noticeForElectronicVersion = document.getElementById(
  'modal-for-electronic-version'
);
const closeNoticeElectronic = document.getElementById(
  'close-notice-electronic'
);

orderElectronic.addEventListener('click', (event) => {
  noticeForElectronicVersion.style.opacity = '1';
  noticeForElectronicVersion.style.pointerEvents = 'auto';
  event.preventDefault();
});

closeNoticeElectronic.addEventListener('click', (event) => {
  noticeForElectronicVersion.style.opacity = '0';
  noticeForElectronicVersion.style.pointerEvents = 'none';
  event.preventDefault();
});
