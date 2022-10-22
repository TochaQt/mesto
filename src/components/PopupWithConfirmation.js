import {Popup} from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._form = this._popup.querySelector('.popup__form');
    }

    setEventListeners() {
        super.setEventListeners();

        this._saveButton = this._form.querySelector('.popup__save');
        this._buttonName = this._saveButton.textContent;

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._submitAction()
        });
    }

    renderLoading(isLoading) {
        if (isLoading){
            this._saveButton.textContent = 'Удаление...'
        }
        else{
            this._saveButton.textContent = this._buttonName
        }
    }

    setSubmitAction(callback) {
        this._submitAction = callback
    }
}

