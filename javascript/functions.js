export const errorMessages = {
    name: "Entrer deux caracteres minimum, les nombres et caracteres speciaux sont pas autorisés.",
    email: "Entrez une adresse mail valide.",
    quantity: "Veuillez renseigner une quantité, les chiffres sont pas autorisés.",
    city: "Veuillez sélectionner une ville",
    conditions: "Veuillez accepter les conditions",
    birthdateInvalid: "Date de naissance invalide",
    birthdateUnderage: "Vous devez avoir au moins 18 ans",
    birthdateRequired: "Veuillez entrer votre date de naissance",
};

export function hideErrorMessage(element) {

    if (element && element.parentElement) {
        const errorElement = element.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }
}

export function setErrorMessage(element, message) {
    if (element && element.parentElement) {
        let errorElement = element.parentElement.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            element.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

export const regexName = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ]{2,}$/u;
export const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;

export function checkInputValue(regex, element, message) {
    if (regex.test(element.value)) {
        hideErrorMessage(element);
        return true;
    } 
    setErrorMessage(element, message);
    return false; 
}

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
    if (!birthdateValue) {
        setErrorMessage(birthdateField, errorMessages.birthdateRequired);
        return false;
    }

    const birthdate = new Date(birthdateValue);
    const today = new Date();

    if (birthdate > today) {
        setErrorMessage(birthdateField, errorMessages.birthdateInvalid);
        return false;
    }

    const age = today.getFullYear() - birthdate.getFullYear();
    const isBirthdayPassed = (today.getMonth() > birthdate.getMonth()) || 
                             (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());

    if (age < 18 || (age === 18 && !isBirthdayPassed)) {
        setErrorMessage(birthdateField, errorMessages.birthdateUnderage);
        return false;
    }

    hideErrorMessage(birthdateField);
    return true;
}

export function resetForm() {
    // Exemple de code pour réinitialiser le formulaire
    document.getElementById('myForm').reset(); // Remplacez 'myForm' par l'ID de votre formulaire
    // Vous pouvez également masquer les messages d'erreur ici si nécessaire
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.style.display = 'none');
}


