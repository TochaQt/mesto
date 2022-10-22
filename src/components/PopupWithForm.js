import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);

        this._form = this._popup.querySelector('.popup__form')
        this._submit = formSubmit;
    }

    _getInputValues() {
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._inputList = this._form.querySelectorAll('.popup__input');
        this._saveButton = this._form.querySelector('.popup__save');
        this._buttonName = this._saveButton.textContent;
        this._formValues = {};

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._submit(this._getInputValues());
        });
    }

    close() {
        super.close();

        this._form.reset();
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }

    renderLoading(isLoading) {
        if (isLoading){
            this._saveButton.textContent = 'Сохранение...'
        }
        else{
            this._saveButton.textContent = this._buttonName
        }
    }
}
