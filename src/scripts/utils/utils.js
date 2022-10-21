import {Card} from "../components/Card.js";
import {Section} from "../components/Section";
import {
    formAddCardValidator,
    imgPopup,
    userInfo,
    formEditValidator,
    classEdit,
    classAdd,
    formEditAvatarValidator,
    classEditAvatar,
    api, classDelete
} from "../index.js";
import {
    avatarImg,
    gallery,
    profileDescription,
    profileName
} from "./constans";

export function openEditPopup() {
    const information = userInfo.getUserInfo();

    classEdit.setInputValues(information);
    formEditValidator.activateButton();
    formEditValidator.renderErrors();
    classEdit.open()
}

export function openEditAvatarPopup() {
    formEditAvatarValidator.activateButton();
    formEditAvatarValidator.renderErrors();
    classEditAvatar.open();
}

export function openAddPopup() {
    formAddCardValidator.activateButton();
    formAddCardValidator.renderErrors();
    classAdd.open();
}

export function setCard (cardId, cardOwnerId, userId, name, pic, likes) {
    const card = new Card(name, pic, likes,'#card-template',
    function () {
        imgPopup.open(name, pic);
    },
    function (){
        classDelete.open(cardId)
    },
    function (){
        if ( likes.some(function (el) {
            return el._id === userId
        })) {
            api.deleteLike(cardId)
                .then((data) => {
                    card.renderLikes(data.likes)
                    likes = data.likes
                })
        }
        else {
            api.setLike(cardId)
                .then((data) => {
                    card.renderLikes(data.likes)
                    likes = data.likes
                })
        }
    },
    function () {
            if (cardOwnerId !== userId) {
                return true
            }
        },
        function () {
            if (likes.some(function (el) {
                  return el._id === userId
            })) {
               return true
            }
        });

    return card.generateCard();
}

export function renderPage() {
    gallery.innerHTML = "";
    Promise.all([api.setProfileInfo(), api.getInitialCards()])
        .then((data) =>{
            avatarImg.src = data[0].avatar
            profileName.textContent = data[0].name;
            profileDescription.textContent = data[0].about;

            return data
        })
        .then((data) => {
            const initialCard = new Section({items: data[1],
                renderer: (item) => {

                    initialCard.addItem(setCard(item._id, item.owner._id, data[0]._id, item.name, item.link, item.likes));

                }}, gallery);

            initialCard.renderItems();
        })
        .catch((err) => {
            console.log(err)
        })
}
