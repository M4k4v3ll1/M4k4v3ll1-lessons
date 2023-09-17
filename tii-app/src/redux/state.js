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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer; //паттерн observer (наблюдатель), похож на publisher subscriber, addEventListener,onChange, onClick
    }
}

export default store;
window.store = store;




