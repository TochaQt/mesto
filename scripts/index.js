import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {initialCards} from "./cards.js";
export const formConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};
export const popupPic = document.querySelector('.popup__pic');
export const popupPicName = document.querySelector('.popup__pic-name');
export const popupImg = document.querySelector('.popup_img');
const popupList = document.querySelectorAll('.popup');
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');
const closeButtonsList = document.querySelectorAll('.popup__close');
const editButton = document.querySelector('.profile__edit');
const formEdit = document.querySelector('.popup__form_edit');
const formAddCard = document.querySelector('.popup__form_add');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const placeInput = document.querySelector('.popup__input_type_place');
const imgInput = document.querySelector('.popup__input_type_img');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const addButton = document.querySelector('.profile__add');
const gallery = document.querySelector('.gallery');
const buttonProfileSave = document.querySelector('.popup__save_edit');
const buttonCardSave = document.querySelector('.popup__save_add');
const formItems = document.querySelectorAll(formConfig.formSelector);
const validator = new FormValidator(formConfig);

export function openPopup(popup) {
    addEventListener('keydown', escHandler);

    popup.classList.add('popup_opened');

}

export function closePopup(popup) {
    removeEventListener('keydown', escHandler);

    popup.classList.remove('popup_opened');
}

function escHandler(evt) {
    if (evt.key ==='Escape') {
        const popupClose = document.querySelector('.popup_opened');

        closePopup(popupClose);
    }
}

function openEditPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;

    validator._activateButton([nameInput, jobInput], buttonProfileSave);
    validator._hideInputError(nameInput, formEdit);
    validator._hideInputError(jobInput, formEdit);

    openPopup(popupEdit);
}

function openAddPopup() {
    formAddCard.reset();

    validator._activateButton([placeInput, imgInput], buttonCardSave);
    validator._hideInputError(placeInput, formAddCard);
    validator._hideInputError(imgInput, formAddCard);

    openPopup(popupAdd);
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closePopup(popupEdit);
}

function handleCardFormSubmit (evt) {
    evt.preventDefault();

    const card = new Card(placeInput.value, imgInput.value, '#card-template');
    const cardElement = card.generateCard();

    gallery.prepend(cardElement);

    closePopup(popupAdd);
}

initialCards.forEach(function(item) {
    const card = new Card(item.name, item.link,'#card-template');
    const cardElement = card.generateCard();

    gallery.append(cardElement);
});

closeButtonsList.forEach(function(item) {
    item.addEventListener('click', function(){
        const popupClose = item.closest('.popup');

        closePopup(popupClose);
    })
});

popupList.forEach(function(item) {
    item.addEventListener('mousedown', function(evt){
        if (evt.target.classList.contains('popup')) {
            closePopup(item);
        }
    })
});

formItems.forEach(function (item){
    const validator = new FormValidator(formConfig);
    validator.enableValidation(item);
})

formEdit.addEventListener('submit', handleEditFormSubmit);
editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);
formAddCard.addEventListener('submit', handleCardFormSubmit);

