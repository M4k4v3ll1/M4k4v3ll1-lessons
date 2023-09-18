import profileReducer from "./profile-reducer";
import dialogs from "../components/Dialogs/Dialogs";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 15},
                {id: 2, message: "It\'s my first post", likesCount: 20}
            ],
            newPostText: 'У меня все ок!'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, username: "Максим Багрянцев"},
                {id: 2, username: "Паша Иванушкин"},
                {id: 3, username: "Иван Чекмасов"},
                {id: 4, username: "Андрей Маликов"},
                {id: 5, username: "Ярослав Питурин"},
            ],
            messages: [
                {id: 1, message: "Привет!"},
                {id: 2, message: "Как дела?"},
                {id: 3, message: "Пошли гулять!"},
                {id: 4, message: "Сегодня вечером"},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //паттерн observer (наблюдатель), похож на publisher subscriber, addEventListener,onChange, onClick
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;