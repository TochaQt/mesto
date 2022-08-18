const popUp = document.querySelector('.popup');
const popUpAdd = document.querySelector('.popup_add');
const popUpEdit = document.querySelector('.popup_edit');
const popUpImg = document.querySelector('.popup_img');
const popUpClose = document.querySelectorAll('.popup__close');
const editButton = document.querySelector('.profile__edit');
const formElement = document.querySelector('.popup__form_edit');
const addElement = document.querySelector('.popup__form_add');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const placeInput = document.querySelector('.popup__input_type_place');
const imgInput = document.querySelector('.popup__input_type_img');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const addButton = document.querySelector('.profile__add');
const gallery = document.querySelector('.gallery');
const popUpPic = document.querySelector('.popup__pic');
const popUpPicName = document.querySelector('.popup__pic-name');
const cardTemplate = document.querySelector('#card-template').content;

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

initialCards.forEach(function(item) {
    const cardContent = cardTemplate.querySelector('.gallery__card').cloneNode(true);
    const likeButton = cardContent.querySelector('.gallery__card-like');
    const deleteButton = cardContent.querySelector('.gallery__card-delete');
    const zoomButton = cardContent.querySelector('.gallery__card-img-button');
    cardContent.querySelector('.gallery__card-title').textContent = item.name;
    cardContent.querySelector('.gallery__card-img').src = item.link;

    likeButton.addEventListener('click', function(){
      likeButton.classList.toggle('gallery__card-like_active');
    });

    deleteButton.addEventListener('click', function(){
      let  removeItem = deleteButton.closest('.gallery__card');
      removeItem.remove();
    });

    zoomButton.addEventListener('click', function(){
      popUpPic.src = cardContent.querySelector('.gallery__card-img').src;
      popUpPicName.textContent = cardContent.querySelector('.gallery__card-title').textContent;
      popUpImg.classList.add('popup_opened');
    });

    gallery.append(cardContent);
});

popUpClose.forEach(function(item) {
    item.addEventListener('click', function(){
      let closeItem = item.closest('.popup');
      closeItem.classList.remove('popup_opened');
  })
});

function openEditWindow() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    popUpEdit.classList.add('popup_opened');
};

function openAddWindow() {
    placeInput.value = '';
    imgInput.value = '';
    popUpAdd.classList.add('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popUpEdit.classList.remove('popup_opened');
};

function cardSumbit (evt) {
    evt.preventDefault();
    
    const cardContent = cardTemplate.querySelector('.gallery__card').cloneNode(true);
    const likeButton = cardContent.querySelector('.gallery__card-like');
    const deleteButton = cardContent.querySelector('.gallery__card-delete');
    const zoomButton = cardContent.querySelector('.gallery__card-img-button');
    cardContent.querySelector('.gallery__card-title').textContent = placeInput.value;
    cardContent.querySelector('.gallery__card-img').src = imgInput.value;

    likeButton.addEventListener('click', function(){
      likeButton.classList.toggle('gallery__card-like_active');
    });

    deleteButton.addEventListener('click', function(){
      let  removeItem = deleteButton.closest('.gallery__card');
      removeItem.remove();
    });

    zoomButton.addEventListener('click', function(){
      popUpPic.src = cardContent.querySelector('.gallery__card-img').src;
      popUpPicName.textContent = cardContent.querySelector('.gallery__card-title').textContent;
      popUpImg.classList.add('popup_opened');
    });

    gallery.prepend(cardContent);
    popUpAdd.classList.remove('popup_opened');
};



formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openEditWindow);
addButton.addEventListener('click', openAddWindow);
addElement.addEventListener('submit', cardSumbit);
