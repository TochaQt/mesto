let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function closeWindow() {
    popUp.classList.remove('popup_opened');
}

function openWindow() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    popUp.classList.add('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeWindow();
}

formElement.addEventListener('submit', formSubmitHandler);
popUpClose.addEventListener('click', closeWindow);
editButton.addEventListener('click', openWindow);