export class UserInfo{
    constructor({userNameSelector, userInformationSelector, userAvatarSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInformationSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        const info = {
            profileName: this._userName.textContent,
            profileDescription: this._userInfo.textContent
        }
        return info;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.about;
        this._userAvatar.src = data.avatar;
        this._userId = data._id
    }

    returnId() {
        return this._userId
    }
}