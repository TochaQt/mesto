import {Card} from "../components/Card.js";
import {formAddCardValidator, imgPopup, userInfo, formEditValidator, classEdit, classAdd} from "../index.js";

export function openEditPopup() {
    const information = userInfo.getUserInfo();

    classEdit.setInputValues(information);
    formEditValidator.activateButton();
    formEditValidator.renderErrors();
    classEdit.open()
}

export function openAddPopup() {
    formAddCardValidator.activateButton();
    formAddCardValidator.renderErrors();

    classAdd.open();
}

export function setCard (name, pic) {
    const card = new Card(name, pic,'#card-template', function () {
        imgPopup.open(name, pic);
    });

    return card.generateCard();
}