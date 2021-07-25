'use strict';

// selectors
const download = document.querySelector('.delivery-download');
const online = document.querySelector('.delivery-online');
const cd = document.querySelector('.delivery-cd');
const select = document.querySelector('#standards-delivery');

window.addEventListener('DOMContentLoaded', () => {
  download.style.display = 'none';
  online.style.display = 'none';
  cd.style.display = 'block';

  // function
  const update = () => {
    const option = select.options[select.selectedIndex].value;

    if (option == 3) {
      download.style.display = 'none';
      online.style.display = 'none';
      cd.style.display = 'block';
    }
    if (option == 1) {
      online.style.display = 'none';
      cd.style.display = 'none';
      download.style.display = 'block';
    }
    if (option == 2) {
      online.style.display = 'block';
      cd.style.display = 'none';
      download.style.display = 'none';
    }
  };

  if (location.reload) {
    select.options[select.selectedIndex].value = 3;
    download.style.display = 'none';
    online.style.display = 'none';
    cd.style.display = 'block';
  }

  // listeners
  select.addEventListener('change', update);
});
