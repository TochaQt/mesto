export class FormValidator {
    constructor(config) {
        this._input = config.inputSelector
        this._submitButton = config.submitButtonSelector
        this._inputError = config.inputErrorClass
        this._error = config.errorClass
    }

    _isValid(formItem, inputItem) {
        if (!inputItem.validity.valid) {
            this._showInputError(inputItem, formItem, inputItem.validationMessage)
        } else {
            this._hideInputError(inputItem, formItem);
        }
    }

    _showInputError(inputItem, formItem, errorMessage) {
        const errorElement = formItem.querySelector(`.popup__input-error_${inputItem.id}`);

        inputItem.classList.add(this._inputError);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._error);
    }

    _hideInputError(inputItem, formItem) {
        const errorElement = formItem.querySelector(`.popup__input-error_${inputItem.id}`);

        inputItem.classList.remove(this._inputError);
        errorElement.textContent = '';
        errorElement.classList.remove(this._error);
    }

    _checkFullValidation(inputList) {
        return inputList.some((inputItem) => {
            return !inputItem.validity.valid;
        });
    }

    _activateButton(inputList, buttonItem) {
        if (this._checkFullValidation(inputList)) {
            buttonItem.setAttribute('disabled', 'disabled');
        } else {
            buttonItem.removeAttribute('disabled', 'disabled');
        }
    }

    enableValidation(formItem) {
        const inputList = Array.from(formItem.querySelectorAll(this._input));
        const buttonItem = formItem.querySelector(this._submitButton);

        inputList.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._isValid(formItem, inputItem);
                this._activateButton(inputList, buttonItem);
            })
            this._activateButton(inputList, buttonItem);
        })
    }
}
