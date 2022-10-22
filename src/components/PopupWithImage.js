import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._popupPic = this._popup.querySelector('.popup__pic');
        this._popupPicName = this._popup.querySelector('.popup__pic-name');
    }

    open(name, img) {
        super.open();

        this._popupPic.src = img;
        this._popupPic.alt = name;
        this._popupPicName.textContent = name;
    }
}