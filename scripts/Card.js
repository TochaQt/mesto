import {popupPic, popupPicName, popupImg, openPopup} from "./index.js";

export class Card {

    constructor(name, pic, templateSelector) {
        this._name = name;
        this._pic = pic;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);

        return cardElement;
    }

    _toggleLike() {
        const likeButton = this._element.querySelector('.gallery__card-like');
        likeButton.classList.toggle('gallery__card-like_active');
    }

    _removeCard() {
        this._element.remove();
    }

    _zoomCard() {
        popupPic.src = this._pic;
        popupPic.alt = this._name;
        popupPicName.textContent = this._name;

        openPopup(popupImg);
    }

    _setEvent() {
        const likeButton = this._element.querySelector('.gallery__card-like');
        const deleteButton = this._element.querySelector('.gallery__card-delete');
        const zoomButton = this._element.querySelector('.gallery__card-img-button');

        deleteButton.addEventListener('click', () => {
            this._removeCard();
        });

        likeButton.addEventListener('click', () => {
            this._toggleLike();
        });

        zoomButton.addEventListener('click', () => {
            this._zoomCard();
        });
    }

    generateCard()
    {
        this._element = this._getTemplate();

        this._setEvent()

        this._element.querySelector('.gallery__card-title').textContent = this._name;
        this._element.querySelector('.gallery__card-img').src = this._pic;
        this._element.querySelector('.gallery__card-img').alt = this._name;

        return this._element;
    }
}

