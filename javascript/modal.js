import { checkInputValue, checkIfCitySelected } from './functions.js';
// DOM Elements
const formBg = document.querySelector(".formBg");
const modalSuccess = document.querySelector(".modal_success");
const btnSignup = document.querySelector(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector('#btn_hamb');

//Form
const form = document.querySelector('form');
const email = document.querySelector('#email');
const allBtnRadio = document.querySelectorAll('input[name="location"]');

btnNav.addEventListener("click", () => document.querySelector(".list").classList.toggle("menu_toggle"));

// launch modal event(fermeture X)
btnSignup.forEach((btn) => { btn.addEventListener('click', () => formBg.style.display = "flex" )});
modalClose.addEventListener('click', () => formBg.style.display = "none");

const message = {
  email: 'Veuillez entrer une adresse email valide',
  city: 'Veuillez sélectionner une ville',
};

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

email.addEventListener('input', () => checkInputValue(regexEmail, email, message.email));
allBtnRadio.forEach(radio => radio.addEventListener('change', () => checkIfCitySelected(allBtnRadio, message.city)));

function validate (e) {
  e.preventDefault();

  const IsEmailValid = checkInputValue(regexEmail, email, message.email);

  if (IsEmailValid) {
    modalSuccess.style.display = "flex";
    formBg.style.display = "none";
    form.reset();
  }
}

form.addEventListener('submit', e => validate(e));


document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none");
