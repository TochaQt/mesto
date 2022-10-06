import '../pages/index.css'
import {FormValidator} from "./components/FormValidator.js";
import {initialCards} from "./utils/cards.js";
import {Section} from "./components/Section.js";
import {PopupWithImage} from "./components/PopupWithImage.js";
import {PopupWithForm} from "./components/PopupWithForm.js";
import {UserInfo} from "./components/UserInfo.js";
import {popupPic, popupPicName, addButton, formConfig, editButton, profileDescription, profileName, gallery, popupAdd, popupEdit, popupImg, formEdit, formAddCard} from "./utils/constans.js";
import {openEditPopup, setCard, openAddPopup} from "./utils/utils.js";

export const formAddCardValidator = new FormValidator(formConfig,formAddCard);
export const formEditValidator = new FormValidator(formConfig,formEdit);
export const imgPopup = new PopupWithImage(popupImg, popupPic, popupPicName);
export const classEdit = new PopupWithForm(popupEdit, formEdit, function (formData) {
    userInfo.setUserInfo(formData.profileName, formData.profileDescription);

    classEdit.close();
});
export const classAdd = new PopupWithForm(popupAdd, formAddCard, function (formData) {
    initialCard.addItem(setCard(formData.cardName, formData.cardImg));

    classAdd.close();
});
export const userInfo = new UserInfo({userNameSelector: profileName, userInformationSelector: profileDescription})
const initialCard = new Section({items: initialCards, renderer: (item) => {

        initialCard.addItem(setCard(item.name, item.link));

    }}, gallery);

initialCard.renderItems();

formEditValidator.enableValidation();
formAddCardValidator.enableValidation();

imgPopup.setEventListeners();
classAdd.setEventListeners()
classEdit.setEventListeners()

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);


