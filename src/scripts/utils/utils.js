import {Card} from "../components/Card.js";
import {formAddCardValidator, imgPopup} from "../index";
import {userInfo} from "../index";
import {nameInput} from "./constans.js";
import {jobInput} from "./constans.js";
import {formEditValidator} from "../index";
import {classEdit} from "../index";
import {classAdd} from "../index";

export function openEditPopup() {
    const information = userInfo.getUserInfo();

    nameInput.value = information.name;
    jobInput.value = information.info;

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