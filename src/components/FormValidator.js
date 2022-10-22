export class FormValidator {
    constructor(config, formItem) {
        this._form = formItem
        this._inputs = Array.from(formItem.querySelectorAll(config.inputSelector))
        this._submitButton = formItem.querySelector(config.submitButtonSelector)
        this._inputError = config.inputErrorClass
        this._error = config.errorClass
    }

    _isValid(inputItem) {
        if (!inputItem.validity.valid) {
            this._showInputError(inputItem, inputItem.validationMessage)
        } else {
            this._hideInputError(inputItem);
        }
    }

    _showInputError(inputItem, errorMessage) {
        const errorElement = this._form.querySelector(`.popup__input-error_${inputItem.id}`);

        inputItem.classList.add(this._inputError);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._error);
    }

    _hideInputError(inputItem) {
        const errorElement = this._form.querySelector(`.popup__input-error_${inputItem.id}`);

        inputItem.classList.remove(this._inputError);
        errorElement.textContent = '';
        errorElement.classList.remove(this._error);
    }

    _checkFullValidation() {
        return this._inputs.some((inputItem) => {
            return !inputItem.validity.valid;
        });
    }

    _setHandler(inputItem) {
        inputItem.addEventListener('input', () => {
            this._isValid(inputItem);
            this.activateButton();
        })
    }

    renderErrors() {
        this._inputs.forEach((inputItem) => {
            this._hideInputError(inputItem)
        })
    }

    activateButton() {
        if (this._checkFullValidation(this._inputs)) {
            this._submitButton.setAttribute('disabled', 'disabled');
        } else {
            this._submitButton.removeAttribute('disabled');
        }
    }

    enableValidation() {
        this.activateButton();

        this._inputs.forEach((inputItem) => {
            this._setHandler(inputItem);
        })
    }
}
