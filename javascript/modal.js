import {  
    checkInputValue, //importer la fonction checkInputValue
    checkIfCitySelected,//importer la fonction checkIfCitySelected
    checkIfConditionsAccepted,//importer la fonction checkIfConditionsAccepted
    validateQuantity,//importer la fonction validateQuantity 
    checkIfAdult, //importer la fonction checkIfAdult
    setErrorMessage,//importer la fonction setErrorMessage
    errorMessages,//importer l'objet errorMessages
    regexName,//importer la variable regexName
    regexEmail, //importer la variable regexEmail
    resetForm // importer la fonction resetForm
} from "./functions.js";

// Modal Navigation
const formBg = document.getElementById("bgGrround");//importer l'objet formBg
const modalSuccess = document.getElementById('Success');//importer l'objet modalSuccess
const btnSignup = document.querySelectorAll(".btn_signup");//importer l'objet btnSignup
const modalClose = document.getElementById("close");//importer l'objet modalClose
const btnNav = document.querySelector('#btn_hamb');//importer l'objet btnNav

// Form
const firstnameField = document.getElementById('first');//importer l'objet firstnameField
const lastnameField = document.getElementById('last');//importer l'objet lastnameField
const emailField = document.getElementById('email');//importer l'objet emailField
const birthdateField = document.getElementById('birthdate');//importer l'objet birthdateField
const quantityField = document.getElementById('quantity');//importer l'objet quantityField
const conditionsCheckbox = document.querySelector('#checkbox1');//importer l'objet conditionsCheckbox
const allBtnRadio = document.querySelectorAll("input[name='location']");//importer l'objet allBtnRadio
// Toggle navbar
btnNav.addEventListener('click', () => document.querySelector('.list').classList.toggle('menu_toggle'));
// Open / Close Modal Form
btnSignup.forEach(btn => { btn.addEventListener('click', () => formBg.style.display = "flex") });
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
        formBg.style.display = "none";//fermer le formulaire
        modalSuccess.style.display = "flex";//ouvrir la modale
        resetForm();//reinitialiser le formulaire
    }
}
// Send Form
formBg.addEventListener('submit',  validate);//envoyer le formulaire
// Close Success Modal
document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none");//fermer la modale
