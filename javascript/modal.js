import {  
    checkInputValue, //importer la fonction checkInputValue
    checkIfCitySelected,
    checkIfConditionsAccepted,
    validateQuantity, 
    checkIfAdult, 
    setErrorMessage,
    errorMessages,
    regexName,
    regexEmail, 
    resetForm 
} from "./functions.js";

// Modal Navigation
const formBg = document.getElementById("bgGround");//importer l'objet formBg
const modalSuccess = document.getElementById('Success');
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.getElementById("close");
const btnNav = document.querySelector('#btn_hamb');

// Form
const firstnameField = document.getElementById('first');//importer l'objet firstnameField
const lastnameField = document.getElementById('last');
const emailField = document.getElementById('email');
const birthdateField = document.getElementById('birthdate');
const quantityField = document.getElementById('quantity');
const conditionsCheckbox = document.querySelector('#checkbox1');
const allBtnRadio = document.querySelectorAll("input[name='location']");

// Toggle navbar
btnNav.addEventListener('click', () => document.querySelector('.list').classList.toggle('menu_toggle'));
// Open 
btnSignup.forEach(btn => { btn.addEventListener('click', () => formBg.style.display = "flex") });
// Close Modal Form
modalClose.addEventListener('click', () => formBg.style.display = "none");

// Check input with event listener
firstnameField.addEventListener('input', () => checkInputValue(regexName, firstnameField, errorMessages.name)); 
lastnameField.addEventListener('input', () => checkInputValue(regexName, lastnameField, errorMessages.name));
emailField.addEventListener('input', () => checkInputValue(regexEmail, emailField, errorMessages.email));
birthdateField.addEventListener("change", () => checkIfAdult(birthdateField, setErrorMessage));
quantityField.addEventListener('input', () => validateQuantity(quantityField, errorMessages.quantity)); 
conditionsCheckbox.addEventListener('input', () => checkIfConditionsAccepted(conditionsCheckbox, errorMessages.conditions));
allBtnRadio.forEach(radio => radio.addEventListener('change', () => checkIfCitySelected(allBtnRadio, errorMessages.city)));
// Validate form
function validate(e) {
    e.preventDefault();
    // Check if all conditions are valid
    const isFirstNameValid = checkInputValue(regexName, firstnameField, errorMessages.name);
    const isLastNameValid = checkInputValue(regexName, lastnameField, errorMessages.name);
    const isEmailValid = checkInputValue(regexEmail, emailField, errorMessages.email);
    const isBirthdateValid = checkIfAdult(birthdateField, setErrorMessage);
    const isQuantityValid = validateQuantity(quantityField, errorMessages.quantity); 
    const isCitySelected = checkIfCitySelected(allBtnRadio, errorMessages.city);
    const isConditionsAccepted = checkIfConditionsAccepted(conditionsCheckbox, errorMessages.conditions);  
    // If all conditions are valid
    if (isConditionsAccepted && isCitySelected && isQuantityValid && isEmailValid && isLastNameValid && isFirstNameValid && isBirthdateValid) {
        formBg.style.display = "none";
        modalSuccess.style.display = "flex";
        resetForm();//reinitialiser le formulaire
    }
}
// Send Form
formBg.addEventListener('submit',  validate);//envoyer le formulaire
// Close Success Modal
document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none");//fermer la modale
