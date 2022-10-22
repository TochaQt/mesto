(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{hi:()=>te,lx:()=>$,r2:()=>Y,PV:()=>Q,PH:()=>M,PY:()=>G,z8:()=>W,Ht:()=>Z,AQ:()=>X,OP:()=>K,eY:()=>ee});var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputs=Array.from(n.querySelectorAll(t.inputSelector)),this._submitButton=n.querySelector(t.submitButtonSelector),this._inputError=t.inputErrorClass,this._error=t.errorClass}var n,r;return n=e,(r=[{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".popup__input-error_".concat(e.id));e.classList.add(this._inputError),n.textContent=t,n.classList.add(this._error)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".popup__input-error_".concat(e.id));e.classList.remove(this._inputError),t.textContent="",t.classList.remove(this._error)}},{key:"_checkFullValidation",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"_setHandler",value:function(e){var t=this;e.addEventListener("input",(function(){t._isValid(e),t.activateButton()}))}},{key:"renderErrors",value:function(){var e=this;this._inputs.forEach((function(t){e._hideInputError(t)}))}},{key:"activateButton",value:function(){this._checkFullValidation(this._inputs)?this._submitButton.setAttribute("disabled","disabled"):this._submitButton.removeAttribute("disabled")}},{key:"enableValidation",value:function(){var e=this;this.activateButton(),this._inputs.forEach((function(t){e._setHandler(t)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function l(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupPic=t._popup.querySelector(".popup__pic"),t._popupPicName=t._popup.querySelector(".popup__pic-name"),t}return t=c,(n=[{key:"open",value:function(e,t){a(f(c.prototype),"open",this).call(this),this._popupPic.src=t,this._popupPic.alt=e,this._popupPicName.textContent=e}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._submit=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;y(m(u.prototype),"setEventListeners",this).call(this),this._inputList=this._form.querySelectorAll(".popup__input"),this._saveButton=this._form.querySelector(".popup__save"),this._buttonName=this._saveButton.textContent,this._formValues={},this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())}))}},{key:"close",value:function(){y(m(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"renderLoading",value:function(e){this._saveButton.textContent=e?"Сохранение...":this._buttonName}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function P(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;O(L(u.prototype),"setEventListeners",this).call(this),this._saveButton=this._form.querySelector(".popup__save"),this._buttonName=this._saveButton.textContent,this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitAction()}))}},{key:"renderLoading",value:function(e){this._saveButton.textContent=e?"Удаление...":this._buttonName}},{key:"setSubmitAction",value:function(e){this._submitAction=e}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.userNameSelector,r=t.userInformationSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{profileName:this._userName.textContent,profileDescription:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userInfo.textContent=e.about,this._userAvatar.src=e.avatar,this._userId=e._id}},{key:"returnId",value:function(){return this._userId}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._headers.authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":this._headers.contentType},body:JSON.stringify({name:e.profileName,about:e.profileDescription})}).then((function(e){return t._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":this._headers.contentType},body:JSON.stringify({avatar:e.profileAvatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._headers.authorization,"Content-Type":this._headers.contentType},body:JSON.stringify({name:e.cardName,link:e.cardImg})}).then((function(e){return t._getResponseData(e)}))}},{key:"setProfileInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._headers.authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._headers.authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._headers.authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization}}).then((function(e){return t._getResponseData(e)}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=t}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},x=document.querySelector(".profile__edit"),N=document.querySelector(".popup__form_edit"),A=document.querySelector(".popup__form_add"),z=document.querySelector(".popup__form_avatar"),V=document.querySelector(".profile__add"),U=(document.querySelector(".gallery"),document.querySelector(".profile__avatar-button"));function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._pic=t.link,this._likes=t.likes,this._ownerId=t.owner._id,this._id=t._id,this._userId=n,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".gallery__card").cloneNode(!0)}},{key:"_toggleLike",value:function(){this._likeButton.classList.toggle("gallery__card-like_active")}},{key:"_unsetDeleteButton",value:function(){this._deleteButton.classList.add("gallery__card-delete_disabled")}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".gallery__card-img-button");this._deleteButton=this._element.querySelector(".gallery__card-delete"),this._ownerCheck()?this._unsetDeleteButton():this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick()})),this.likeCheck()&&this._toggleLike(),this._likeButton.addEventListener("click",(function(){e._toggleLike(),e._handleLikeClick()})),t.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_ownerCheck",value:function(){if(this._ownerId!==this._userId)return!0}},{key:"likeCheck",value:function(){var e=this;if(this._likes.some((function(t){return t._id===e._userId})))return!0}},{key:"renderLikes",value:function(e){this._likesCount.textContent=e.length,this._likes=e}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".gallery__card-like");var e=this._element.querySelector(".gallery__card-title"),t=this._element.querySelector(".gallery__card-img");return this._likesCount=this._element.querySelector(".gallery__card-like-count"),e.textContent=this._name,t.src=this._pic,t.alt=this._name,this.renderLikes(this._likes),this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove()}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e,t){var n=new J(e,t,"#card-template",(function(){G.open(e.name,e.link)}),(function(){Z.open(),Z.setSubmitAction((function(){Z.renderLoading(!0),te.deleteCard(e._id).then((function(){n.deleteCard()})).then((function(){Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}))}),(function(){n.likeCheck()?te.deleteLike(e._id).then((function(e){n.renderLikes(e.likes)})).catch((function(e){console.log(e)})):te.setLike(e._id).then((function(e){n.renderLikes(e.likes)})).catch((function(e){console.log(e)}))}));return n.generateCard()}var Y=new n(D,A),M=new n(D,N),Q=new n(D,z),G=new p(".popup_img"),K=new k(".popup_edit",(function(e){K.renderLoading(!0),te.editProfile(e).then((function(e){ee.setUserInfo(e)})).then((function(){K.close()})).catch((function(e){console.log(e)})).finally((function(){K.renderLoading(!1)}))})),W=new k(".popup_add",(function(e){W.renderLoading(!0),te.addCard(e).then((function(e){$.addNewItem(F(e,ee.returnId()))})).then((function(){W.close()})).catch((function(e){console.log(e)})).finally((function(){W.renderLoading(!1)}))})),X=new k(".popup_avatar",(function(e){X.renderLoading(!0),te.editAvatar(e).then((function(e){ee.setUserInfo(e)})).then((function(){X.close()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoading(!1)}))})),Z=new C(".popup_delete"),$=new T((function(e,t){$.addItem(F(e,t))}),".gallery"),ee=new I({userNameSelector:".profile__name",userInformationSelector:".profile__description",userAvatarSelector:".profile__avatar-img"}),te=new q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"82879a9e-586e-451f-92c6-8eee7fcdfc51",contentType:"application/json"}});M.enableValidation(),Y.enableValidation(),Q.enableValidation(),G.setEventListeners(),W.setEventListeners(),K.setEventListeners(),X.setEventListeners(),Z.setEventListeners(),x.addEventListener("click",(function(){var e=ee.getUserInfo();K.setInputValues(e),M.activateButton(),M.renderErrors(),K.open()})),V.addEventListener("click",(function(){Y.activateButton(),Y.renderErrors(),W.open()})),U.addEventListener("click",(function(){Q.activateButton(),Q.renderErrors(),X.open()})),Promise.all([te.setProfileInfo(),te.getInitialCards()]).then((function(e){return ee.setUserInfo(e[0]),e})).then((function(e){$.renderItems(e[1],e[0]._id)})).catch((function(e){console.log(e)}))})();