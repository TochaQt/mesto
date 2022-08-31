const formConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};
const popupList = document.querySelectorAll('.popup');
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');
const popupImg = document.querySelector('.popup_img');
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
const popupPic = document.querySelector('.popup__pic');
const popupPicName = document.querySelector('.popup__pic-name');
const cardTemplate = document.querySelector('#card-template').content;
const cardContent = cardTemplate.querySelector('.gallery__card');
const buttonProfileSave = document.querySelector('.popup__save_edit');
const buttonCardSave = document.querySelector('.popup__save_add');

function createCard(name, pic) {
    const card = cardContent.cloneNode(true)
    const likeButton = card.querySelector('.gallery__card-like');
    const deleteButton = card.querySelector('.gallery__card-delete');
    const zoomButton = card.querySelector('.gallery__card-img-button');
    const cardPic = card.querySelector('.gallery__card-img');
    const cardPicName = card.querySelector('.gallery__card-title');

    cardPicName.textContent = name;
    cardPic.src = pic;
    cardPic.alt = name;

    likeButton.addEventListener('click', function(){
        likeButton.classList.toggle('gallery__card-like_active');
    });

    deleteButton.addEventListener('click', function(){
        card.remove();
    });

    zoomButton.addEventListener('click', function(){
        popupPic.src = cardPic.src;
        popupPic.alt = cardPicName.textContent;
        popupPicName.textContent = cardPicName.textContent;

        openPopup(popupImg);
    });

    return card;
}

function openPopup(popup) {
    addEventListener('keydown', escHandler);

    popup.classList.add('popup_opened');

}

function closePopup(popup) {
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

    activateButton([nameInput, jobInput], buttonProfileSave);
    hideInputError(nameInput, formEdit, formConfig);
    hideInputError(jobInput, formEdit, formConfig);

    openPopup(popupEdit);
}

function openAddPopup() {
    formAddCard.reset();

    activateButton([placeInput, imgInput], buttonCardSave);
    hideInputError(placeInput, formAddCard, formConfig);
    hideInputError(imgInput, formAddCard, formConfig);

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

    const card = createCard(placeInput.value, imgInput.value);

    gallery.prepend(card);

    closePopup(popupAdd);
}

initialCards.forEach(function(item) {
    const card = createCard(item.name, item.link);

    gallery.append(card);
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

formEdit.addEventListener('submit', handleEditFormSubmit);
editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);
formAddCard.addEventListener('submit', handleCardFormSubmit);
