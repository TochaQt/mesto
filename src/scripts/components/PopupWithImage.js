import {Popup} from "./Popup.js";
import {popupPic, popupPicName} from "../utils/constans.js";

export class PopupWithImage extends Popup {
    open(name, img) {
        super.open();

        popupPic.src = img;
        popupPic.alt = name;
        popupPicName.textContent = name;
    }
}