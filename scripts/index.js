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
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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

function openEditPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;

    openPopup(popupEdit);
}

function openAddPopup() {
    formAddCard.reset();

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

formEdit.addEventListener('submit', handleEditFormSubmit);
editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);
formAddCard.addEventListener('submit', handleCardFormSubmit);
