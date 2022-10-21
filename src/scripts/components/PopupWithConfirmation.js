import {Popup} from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, formSelector, formSubmit) {
        super(popupSelector);

        this._form = formSelector;
        this._submit = formSubmit;
    }

    setEventListeners() {
        super.setEventListeners();

        this._saveButton = this._form.querySelector('.popup__save');
        this._buttonName = this._saveButton.textContent;

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._submit(this._cardId);
        });
    }

    open(cardId) {
        super.open();

        this._cardId = cardId
    }

    renderLoading(isLoading) {
        if (isLoading){
            this._saveButton.textContent = 'Удаление...'
        }
        else{
            this._saveButton.textContent = this._buttonName
        }
    }
}

