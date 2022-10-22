import './index.css'
import {FormValidator} from "../components/FormValidator.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithConfirmation} from "../components/PopupWithConfirmation";
import {UserInfo} from "../components/UserInfo.js";
import {Api} from "../components/Api";
import {Section} from "../components/Section";
import {
    buttonOpenAddCardPopup,
    formConfig,
    buttonOpenEditProfilePopup,
    formEdit,
    formAddCard,
    formEditAvatar,
    buttonOpenEditAvatarPopup,
    gallery
} from "../utils/constans.js";
import {
    openEditPopup,
    openAddPopup,
    openEditAvatarPopup,
    renderPage,
    setCard
} from "../utils/utils.js";

export const formAddCardValidator = new FormValidator(formConfig,formAddCard);

export const formEditValidator = new FormValidator(formConfig,formEdit);

export const formEditAvatarValidator = new FormValidator(formConfig, formEditAvatar);

export const imgPopup = new PopupWithImage('.popup_img');

export const popupEditProfile = new PopupWithForm('.popup_edit', function (formData) {
    popupEditProfile.renderLoading(true)

    api.editProfile(formData)
        .then((data) => {
            userInfo.setUserInfo(data);
        })
        .then(() => {
            popupEditProfile.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupEditProfile.renderLoading(false)
        })
});

export const popupAddCard = new PopupWithForm('.popup_add', function (formData) {
    popupAddCard.renderLoading(true)

    api.addCard(formData)
        .then((data) => {
            cardSection.addNewItem(setCard(data, userInfo.returnId()))
        })
        .then(() => {
            popupAddCard.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAddCard.renderLoading(false)
        })
});

export const popupEditAvatar = new PopupWithForm('.popup_avatar', function (formData) {
    popupEditAvatar.renderLoading(true)

    api.editAvatar(formData)
        .then((data) => {
            userInfo.setUserInfo(data)
        })
        .then(() => {
            popupEditAvatar.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupEditAvatar.renderLoading(false)
        })
});

export const popupDeleteCard = new PopupWithConfirmation('.popup_delete');

export const cardSection = new Section(function (item, userId) {
    cardSection.addItem(setCard(item, userId))
}, '.gallery')

export const userInfo = new UserInfo({userNameSelector: '.profile__name', userInformationSelector: '.profile__description', userAvatarSelector: '.profile__avatar-img'})

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: '82879a9e-586e-451f-92c6-8eee7fcdfc51',
        contentType: 'application/json'
    }
});

formEditValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditAvatarValidator.enableValidation();

imgPopup.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners()

buttonOpenEditProfilePopup.addEventListener('click', openEditPopup);
buttonOpenAddCardPopup.addEventListener('click', openAddPopup);
buttonOpenEditAvatarPopup.addEventListener('click', openEditAvatarPopup);

renderPage();