import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector, popupPic, popupPicName) {
        super(popupSelector);

        this._popupPic = popupPic;
        this._popupPicName = popupPicName;
    }

    open(name, img) {
        super.open();

        this._popupPic.src = img;
        this._popupPic.alt = name;
        this._popupPicName.textContent = name;
    }
}