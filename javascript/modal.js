import {  checkInputValue, checkIfCitySelected, checkIfConditionsAccepted, checkIfBirthdateIsToday, validateQuantity } from "./functions.js";

// Modal Navigation
const formBg = document.querySelector(".formBg");
const modalSuccess = document.querySelector('.modal_success')
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector('#btn_hamb');


// Form
const firstnameField = document.querySelector('#first');
const lastnameField = document.querySelector('#last');
const emailField = document.querySelector('#email');
const birthdateField = document.querySelector('#birthdate');
const quantityField = document.getElementById('quantity');
const conditionsCheckbox = document.querySelector('#checkbox1');
const allBtnRadio = document.querySelectorAll("input[name='location']");


// Toggle navbar
btnNav.addEventListener('click', () => document.querySelector('.list').classList.toggle('menu_toggle'));

// Open / Close Modal Form
btnSignup.forEach(btn => { btn.addEventListener('click', () => formBg.style.display = "flex") });
modalClose.addEventListener('click', () => formBg.style.display = "none");


// Message error
const message = {
    name: "Entrer 2 caracteres minimum",
    email: "Entrez une adresse mail valide.",
    birthdate : "Veuillez renseigner une date de naissance valide.",
    quantity: "Veuillez renseigner une quantité, les chiffres à virgules ne sont pas autorisées.",
    city: "Veuillez sélectionner une ville",
    conditions: "Veuillez accepter les conditions",
};

// Regex
const regexName = /^[A-Za-zÀ-ÿ]{2,}$/u;  /* permet à l’expression régulière de prendre en charge la correspondance avec du texte Unicode. */
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,9}$/;



// Check input with event listener
firstnameField.addEventListener('input', () => checkInputValue(regexName, firstnameField, message.name)); 
lastnameField.addEventListener('input', () => checkInputValue(regexName, lastnameField, message.name));
emailField.addEventListener('input', () => checkInputValue(regexEmail, emailField, message.email));
birthdateField.addEventListener('input', () => checkIfBirthdateIsToday(birthdateField, message.birthdate));
quantityField.addEventListener('input', () => checkInputValue(quantityField, message.quantity)); 
conditionsCheckbox.addEventListener('input', () => checkIfConditionsAccepted(conditionsCheckbox, message.conditions));
allBtnRadio.forEach(radio => radio.addEventListener('change', () => checkIfCitySelected(allBtnRadio, message.city)));

// Validate form
function validate(e) {
    e.preventDefault();

    // Check if all conditions are valid
    const isFirstNameValid = checkInputValue(regexName, firstnameField, message.name);
    const isLastNameValid = checkInputValue(regexName, lastnameField, message.name);
    const isEmailValid = checkInputValue(regexEmail, emailField, message.email);
    const isUserAgeValid = checkIfBirthdateIsToday(birthdateField, message.birthdate);
    const isQuantityValid = validateQuantity(quantity, message.quantity); 
    const isCitySelected = checkIfCitySelected(allBtnRadio, message.city);
    const isConditionsAccepted = checkIfConditionsAccepted(conditionsCheckbox, message.conditions);
    

    // If all conditions are valid 
    if (isConditionsAccepted && isCitySelected  && isQuantityValid  && isEmailValid && isLastNameValid && isFirstNameValid && isUserAgeValid) {
        formBg.style.display = 'none';
        modalSuccess.style.display = 'flex';    
    } 
};

// Send Form
formBg.addEventListener('submit', e => validate(e));

// Close Success Modal
document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none"); 



