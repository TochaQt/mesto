export class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }

    _handleEscClose(evt) {
        if (evt.key ==='Escape') {
            this.close();
        }
    }

    open() {
        addEventListener('keydown', this._handleEscClose.bind(this))

        this._popup.classList.add('popup_opened');
    }

    close() {
        removeEventListener('keydown', this._handleEscClose.bind(this))

        this._popup.classList.remove('popup_opened');
    }

    setEventListeners() {
        const buttonClose = this._popup.querySelector('.popup__close');

        buttonClose.addEventListener('click', () => {
            this.close();
        })

        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        })
    }
}