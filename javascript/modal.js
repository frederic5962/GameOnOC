import { checkInputValue, checkIfCitySelected } from "./functions.js";

// Modal Navigation
const formBg = document.querySelector(".formBg");
const modalSuccess = document.querySelector('.modal_success')
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector('#btn_hamb');

// Form
const form = document.querySelector('form');
const email = document.querySelector('#email');
const allBtnRadio = document.querySelectorAll("input[name='location']");

// Toggle navbar
btnNav.addEventListener('click', () => document.querySelector('.list').classList.toggle('menu_toggle'));

// Open / Close Modal Form
btnSignup.forEach(btn => { btn.addEventListener('click', () => formBg.style.display = "flex") });
modalClose.addEventListener('click', () => formBg.style.display = "none");

// Message error
const message = {
    email: 'Veuillez renseigner une adresse mail valide.',
    city: 'Veuillez sélectionner une ville',
    
};

// Regex
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


// Check input with event listener
email.addEventListener('input', () => checkInputValue(regexEmail, email, message.email));
allBtnRadio.forEach(radio => radio.addEventListener('change', () => checkIfCitySelected(allBtnRadio, message.city)));
       
// Validate form
function validate(e) {
    e.preventDefault();

    // Check if all conditions are valid
    const isCitySelected = checkIfCitySelected(allBtnRadio, message.city);
    const isEmailValid = checkInputValue(regexEmail, email, message.email);
    

    // If all conditions are valid 
    if (isConditionsAccepted && isCitySelected && isEmailValid) {
        formBg.style.display = 'none';
        modalSuccess.style.display = 'flex';
        form.reset();
    } 
};

// Send Form
form.addEventListener('submit', e => validate(e));

// Close Success Modal
document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none")