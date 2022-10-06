export class UserInfo{
    constructor({userNameSelector, userInformationSelector}) {
        this._userName = userNameSelector;
        this._userInfo = userInformationSelector;
    }

    getUserInfo() {
        const info = {
            name: this._userName.textContent,
            info: this._userInfo.textContent
        }
        return info;
    }

    setUserInfo(name, info) {
        this._userName.textContent = name;
        this._userInfo.textContent = info;
    }
}