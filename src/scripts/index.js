import '../pages/index.css'
import {FormValidator} from "./components/FormValidator.js";
import {PopupWithImage} from "./components/PopupWithImage.js";
import {PopupWithForm} from "./components/PopupWithForm.js";
import {PopupWithConfirmation} from "./components/PopupWithConfirmation";
import {UserInfo} from "./components/UserInfo.js";
import {Api} from "./components/Api";
import {
    popupPic,
    popupPicName,
    addButton,
    formConfig,
    editButton,
    profileDescription,
    profileName,
    popupAdd,
    popupEdit,
    popupImg,
    formEdit,
    formAddCard,
    popupAvatarEdit,
    formEditAvatar,
    editAvatarButton,
    avatarImg,
    popupDelete,
    formDelete
} from "./utils/constans.js";
import {
    openEditPopup,
    openAddPopup,
    openEditAvatarPopup,
    renderPage
} from "./utils/utils.js";

export const formAddCardValidator = new FormValidator(formConfig,formAddCard);

export const formEditValidator = new FormValidator(formConfig,formEdit);

export const formEditAvatarValidator = new FormValidator(formConfig, formEditAvatar);

export const imgPopup = new PopupWithImage(popupImg, popupPic, popupPicName);

export const classEdit = new PopupWithForm(popupEdit, formEdit, function (formData) {
    classEdit.renderLoading(true)

    api.editProfile(formData)
        .then((data) => {
            userInfo.setUserInfo(data.name, data.about);
        })
        .then(() => {
            classEdit.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            classEdit.renderLoading(false)
        })
});

export const classAdd = new PopupWithForm(popupAdd, formAddCard, function (formData) {
    classAdd.renderLoading(true)

    api.addCard(formData)
        .then(() => {
            renderPage()
        })
        .then(() => {
            classAdd.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            classAdd.renderLoading(false)
        })
});

export const classEditAvatar = new PopupWithForm(popupAvatarEdit, formEditAvatar, function (formData) {
    classEditAvatar.renderLoading(true)

    api.editAvatar(formData)
        .then((data) => {
            avatarImg.src = data.avatar
        })
        .then(() => {
            classEditAvatar.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            classEditAvatar.renderLoading(false)
        })
});

export const classDelete = new PopupWithConfirmation(popupDelete, formDelete, function (cardId) {
    classDelete.renderLoading(true)

    api.deleteCard(cardId)
        .then(() => {
            renderPage()
        })
        .then(() => {
            classDelete.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            classDelete.renderLoading(false)
        })
})

export const userInfo = new UserInfo({userNameSelector: profileName, userInformationSelector: profileDescription})

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: '82879a9e-586e-451f-92c6-8eee7fcdfc51'
    }
});

formEditValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditAvatarValidator.enableValidation();

imgPopup.setEventListeners();
classAdd.setEventListeners();
classEdit.setEventListeners();
classEditAvatar.setEventListeners();
classDelete.setEventListeners()

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);
editAvatarButton.addEventListener('click', openEditAvatarPopup);

renderPage();
