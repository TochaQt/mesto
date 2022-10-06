export class FormValidator {
    constructor(config, formItem) {
        this._form = formItem
        this._inputs = Array.from(formItem.querySelectorAll(config.inputSelector))
        this._submitButton = formItem.querySelector(config.submitButtonSelector)
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

    renderErrors() {
        this._inputs.forEach((inputItem) => {
            this._hideInputError(inputItem, this._form)
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
        this.activateButton(this._inputs, this._submitButton);

        this._inputs.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._isValid(this._form, inputItem);
                this.activateButton();
            })
        })
    }
}
