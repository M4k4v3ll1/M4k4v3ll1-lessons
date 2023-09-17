let rerenderEntireTree = () => {
    console.log('state was changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It\'s my first post", likesCount: 20}
        ],
        newPostText: 'Сегодня все просто отлично!'
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //паттерн observer (наблюдатель), похож на publisher subscriber, addEventListener,onChange, onClick
}

export default state;