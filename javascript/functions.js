export const errorMessages = {
    name: "Entrer deux caracteres minimum",
    email: "Entrez une adresse mail valide.",
    quantity: "Veuillez renseigner une quantité, les chiffres sont pas autorisés.",
    city: "Veuillez sélectionner une ville",
    conditions: "Veuillez accepter les conditions",
    birthdateInvalid: "Date de naissance invalide",
    birthdateUnderage: "Vous devez avoir au moins 18 ans",
    birthdateRequired: "Veuillez entrer votre date de naissance",
};

// Show error message
export const setErrorMessage = (element, message) => {
    element.parentElement.setAttribute('data-error-visible', 'true');
    element.parentElement.setAttribute('data-error', message);
};

// Hide error message
export const hideErrorMessage = element => {
    element.parentElement.removeAttribute('data-error-visible');
    element.parentElement.removeAttribute('data-error');
};

// Check input value
export function checkInputValue(regex, element, message) {
    if (!regex.test(element.value)) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true; 
};

// Check if conditions are accepted
export function checkIfConditionsAccepted(element, message) {
    if(!element.checked) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true;  
};

// Check if a city is selected
export function checkIfCitySelected(cities, message) {
    const isChecked = Array.from(cities).some(radio => radio.checked);
    if (!isChecked) {
        setErrorMessage(cities[0], message);
        return false;
    };
    hideErrorMessage(cities[0]);
    return true;
};


export function validateQuantity(element, message) {
    /* const quantityField = document.getElementById('quantity'); */ // Remplacez 'quantity' par l'ID de votre champ de quantité
    const quantityValue = element.value.trim(); // Supprimez les espaces inutiles au début et à la fin

    if (quantityValue === '') {
        setErrorMessage(element, message) // Affichez un message d'erreur
        return false; // Empêche le formulaire d'être soumis
    }
    hideErrorMessage(element);
    return true;   
}


// Check if user is older than 18
export function checkIfAdult(birthdateField, setErrorMessage) {
    const birthdateValue = birthdateField.value.trim();
    if(birthdateValue === '') {
        setErrorMessage(birthdateField, errorMessages.birthdateRequired);
        return false;
    }

    const birthdate = new Date(birthdateValue);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    const dayDifference = today.getDate() - birthdate.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    if (birthdate > today) {
        setErrorMessage(birthdateField, erroeMessage.birthdateInvalid);
        return false;
    } else if (age < 18) {
        setErrorMessage(birthdateField, errorMessages.birthdateUnderage);
        return false;
    }
    hideErrorMessage(birthdateField);
    return true;
}