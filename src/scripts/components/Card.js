export class Card {

    constructor(name, pic, templateSelector, handleCardClick) {
        this._name = name;
        this._pic = pic;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
            this._handleCardClick();
        });

    }

    generateCard() {
        this._element = this._getTemplate();

        const cardTitle = this._element.querySelector('.gallery__card-title');
        const cardImg = this._element.querySelector('.gallery__card-img');

        cardTitle.textContent = this._name;
        cardImg.src = this._pic;
        cardImg.alt = this._name;

        this._setEvent();

        return this._element;
    }
}

