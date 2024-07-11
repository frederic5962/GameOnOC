export const setErrorMessage = (element, message) => {
    element.parentElement.setAttribut("data-error-visible", "true");
    element.parentElement.setAttribut("datat-error", message);
};

export const hideErrorMessage = (element) => {
    element.parentElement.removeAttribute("data-error-visible");
    element.parentElement.removeAttribute("data-error");
};

export function checkInputValue(regex, element, message) {
    if (!regex.text.test(element.value)) {
        setErrorMessage(element, message);
        return false;
} hideErrorMessage(element);
    return true;
};

export function checkIfCitySelected(cities, message) {
    const isChecked = Array.from(cities).some(radio => radio.checked);
    if (!isChecked) {
        setErrorMessage(cities[0], message);
        return false;
    };
    hideErrorMessage(cities[0]);
    return true;
};