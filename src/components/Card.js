export class Card {

    constructor(item, userId, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
        this._name = item.name;
        this._pic = item.link;
        this._likes = item.likes;
        this._ownerId = item.owner._id;
        this._id = item._id;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
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

    _setEventListeners() {
        const zoomButton = this._element.querySelector('.gallery__card-img-button');
        this._deleteButton = this._element.querySelector('.gallery__card-delete');

        if (this._ownerCheck()) {
            this._unsetDeleteButton()
        }
        else {
            this._deleteButton.addEventListener('click', () => {
                this._handleDeleteClick();
            });
        }

        if (this.likeCheck()) {
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

    _ownerCheck() {
        if (this._ownerId !== this._userId) {
            return true
        }
    }

    likeCheck() {
        if (this._likes.some((el) => {
            return  el._id === this._userId
        })
        ) {
            return true
        }
    }

    //оставил передачу параметра для реализации обновления кол-ва лайков в utils.js (52)
    renderLikes(likes) {
        this._likesCount.textContent = likes.length;
        this._likes = likes;
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

        this.renderLikes(this._likes);
        this._setEventListeners();

        return this._element;
    }

    deleteCard() {
        this._element.remove()
    }
}

