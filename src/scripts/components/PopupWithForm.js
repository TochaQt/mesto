import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSelector, formSubmit) {
        super(popupSelector);

        this._form = formSelector;
        this._submit = formSubmit;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', this._submit);
    }

    close() {
        super.close();

        this._form.reset();
    }
}
