function isValid(formItem, config, inputItem) {
    if (!inputItem.validity.valid) {
        showInputError(inputItem,formItem, inputItem.validationMessage, config)
    } else {
        hideInputError(inputItem, formItem, config);
    }
}

function showInputError(inputItem, formItem, errorMessage, config){
    const errorElement = formItem.querySelector(`.popup__input-error_${inputItem.id}`);

    inputItem.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
}

function hideInputError(inputItem, formItem, config){
    const errorElement = formItem.querySelector(`.popup__input-error_${inputItem.id}`);

    inputItem.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass);
}

function checkFullValidation(inputList){
    return inputList.some((inputItem) => {
        return !inputItem.validity.valid;
    });
}

function activateButton(inputList, buttonItem) {
    if (checkFullValidation(inputList)) {
        buttonItem.setAttribute('disabled', 'disabled');
    } else {
        buttonItem.removeAttribute('disabled', 'disabled');
    }
}

function setHandlers(formItem, config) {
    const inputList = Array.from(formItem.querySelectorAll(config.inputSelector));
    const buttonItem = formItem.querySelector(config.submitButtonSelector);

    inputList.forEach(function (inputItem) {
        inputItem.addEventListener('input', function () {
            isValid(formItem, config, inputItem);
            activateButton(inputList, buttonItem);
        })
        activateButton(inputList, buttonItem);
    })
}

function enableValidation(config) {
    const formList = document.querySelectorAll(config.formSelector);

    formList.forEach(function (formItem) {
        setHandlers(formItem, config)
    })
}

enableValidation(formConfig);
