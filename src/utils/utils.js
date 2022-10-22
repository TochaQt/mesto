import {Card} from "../components/Card.js";
import {
    formAddCardValidator,
    imgPopup,
    userInfo,
    formEditValidator,
    popupEditProfile,
    popupAddCard,
    formEditAvatarValidator,
    popupEditAvatar,
    api,
    popupDeleteCard,
    cardSection
} from "../pages";

export function openEditPopup() {
    const information = userInfo.getUserInfo();

    popupEditProfile.setInputValues(information);
    formEditValidator.activateButton();
    formEditValidator.renderErrors();
    popupEditProfile.open()
}

export function openEditAvatarPopup() {
    formEditAvatarValidator.activateButton();
    formEditAvatarValidator.renderErrors();
    popupEditAvatar.open();
}

export function openAddPopup() {
    formAddCardValidator.activateButton();
    formAddCardValidator.renderErrors();
    popupAddCard.open();
}

export function setCard (item, userId) {
    const card = new Card(item, userId, '#card-template',
    function () {
        imgPopup.open(item.name, item.link);
    },
    function (){
        popupDeleteCard.open(item._id)
    },
    function (){
        if (card.likeCheck()) {
            api.deleteLike(item._id)
                .then((data) => {
                    card.renderLikes(data.likes)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            api.setLike(item._id)
                .then((data) => {
                    card.renderLikes(data.likes)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    });

    return card.generateCard();
}

export function renderPage() {
    Promise.all([api.setProfileInfo(), api.getInitialCards()])
        .then((data) =>{
            userInfo.setUserInfo(data[0])
            return data
        })
        .then((data) => {
            cardSection.renderItems(data[1], data[0]._id)
        })
        .catch((err) => {
            console.log(err)
        })
}
