'use strict';

// functions

// Validation first name
const validateFirstName = (e) => {
  const firstName = document.querySelector('#firstName');
  const value = e.target.value;
  const newLine = document.querySelector('.new-line-name');
  const errorMessage = document.querySelector('.errorMessageName');

  if (value == '') {
    firstName.classList.add('govuk-input--error');
    newLine.classList.add('govuk-form-group--error');
    errorMessage.classList.remove('govuk-visually-hidden');
  } else {
    firstName.classList.remove('govuk-input--error');
    newLine.classList.remove('govuk-form-group--error');
    errorMessage.classList.add('govuk-visually-hidden');
  }
};

// Validation Email
const validateEmail = (e) => {
  const email = document.querySelector('#email');
  const newLine = document.querySelector('.email');
  const inputValue = e.target.value;
  const errorMessage = document.querySelector('.errorMessageEmail');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // regular expresion

  if (inputValue == '' || !re.test(email.value)) {
    email.classList.add('govuk-input--error');
    newLine.classList.add('govuk-form-group--error');
    errorMessage.classList.remove('govuk-visually-hidden');
  } else {
    email.classList.remove('govuk-input--error');
    newLine.classList.remove('govuk-form-group--error');
    errorMessage.classList.add('govuk-visually-hidden');
  }
};

// listeners
/*document
  .querySelector('#firstName')
  .addEventListener('blur', validateFirstName);*/
document.querySelector('#email').addEventListener('blur', validateEmail);

// Selectors
const person = document.querySelector('#person');
const legal = document.querySelector('#legal');
const companyDetails = document.querySelector('.company-details');

// register form - customer type

person.addEventListener('input', () => {
  if (person.checked) {
    companyDetails.classList.add('hide');
  }
});
legal.addEventListener('input', () => {
  if (legal.checked) {
    companyDetails.classList.remove('hide');
  }
});


