export class Card {

    constructor(name, pic, likes, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, deleteButtonCheck, likeButtonCheck) {
        this._name = name;
        this._pic = pic;
        this._likes = likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._check = deleteButtonCheck;
        this._likeCheck = likeButtonCheck;
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
        this._likeButton.classList.toggle('gallery__card-like_active');
    }

    _unsetDeleteButton() {
        this._deleteButton.classList.add('gallery__card-delete_disabled');
    }

    _setEvent() {
        const zoomButton = this._element.querySelector('.gallery__card-img-button');
        this._deleteButton = this._element.querySelector('.gallery__card-delete');

        if (this._check() === true) {
            this._unsetDeleteButton()
        }
        else {
            this._deleteButton.addEventListener('click', () => {
                this._handleDeleteClick();
            });
        }

        if (this._likeCheck() === true) {
            this._toggleLike()
        }

        this._likeButton.addEventListener('click', () => {
            this._toggleLike();
            this._handleLikeClick();
        });

        zoomButton.addEventListener('click', () => {
            this._handleCardClick();
        });

    }

    renderLikes(likes) {
        this._likesCount.textContent = likes.length
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.gallery__card-like');
        const cardTitle = this._element.querySelector('.gallery__card-title');
        const cardImg = this._element.querySelector('.gallery__card-img');
        this._likesCount = this._element.querySelector('.gallery__card-like-count');

        cardTitle.textContent = this._name;
        cardImg.src = this._pic;
        cardImg.alt = this._name;
        this._likesCount.textContent = this._likes.length;

        this._setEvent();

        return this._element;
    }
}

