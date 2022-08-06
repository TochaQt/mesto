function closeWindow() {
    let popUp = document.querySelector('.pop-up');

    popUp.classList.remove('pop-up_opened');
}

function openWindow() {
    let popUp = document.querySelector('.pop-up');

    popUp.classList.add('pop-up_opened');
}

let popUpClose = document.querySelector('.pop-up__close');
let editButton = document.querySelector('.profile__edit');
let formElement = document.querySelector('.pop-up__save');
let nameInput = document.querySelector('.pop-up__input_type_name');
let jobInput = document.querySelector('.pop-up__input_type_description');

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    let nameInput = document.querySelector('.pop-up__input_type_name').value;
    let jobInput = document.querySelector('.pop-up__input_type_description').value;
    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description');

    profileName.textContent = `${nameInput}`;
    profileDescription.textContent = `${jobInput}`;
}

formElement.addEventListener('click', formSubmitHandler);
formElement.addEventListener('click', closeWindow);
popUpClose.addEventListener('click', closeWindow);
editButton.addEventListener('click', openWindow);