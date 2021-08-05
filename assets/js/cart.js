'use strict';

// selectors
const download = document.querySelector('.delivery-download');
const online = document.querySelector('.delivery-online');
const cd = document.querySelector('.delivery-cd');
const select = document.querySelector('#standards-delivery');

window.addEventListener('DOMContentLoaded', () => {
  // functions

  const switchToCD = (none, block) => {
    download.style.display = none;
    online.style.display = none;
    cd.style.display = block;
  };

  const switchToOnline = (none, block) => {
    download.style.display = none;
    online.style.display = block;
    cd.style.display = none;
  };

  const switchToDownload = (none, block) => {
    download.style.display = block;
    online.style.display = none;
    cd.style.display = none;
  };

  switchToCD('none', 'block');

  const update = () => {
    const option = select.options[select.selectedIndex].value;

    if (option == 3) {
      switchToCD('none', 'block');
    }
    if (option == 1) {
      switchToDownload('none', 'block');
    }
    if (option == 2) {
      switchToOnline('none', 'block');
    }
  };

  if (location.reload) {
    select.options[select.selectedIndex].value = 3;
    switchToCD('none', 'block');
  }

  // listeners
  select.addEventListener('change', update);
});
