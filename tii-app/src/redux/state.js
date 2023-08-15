let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It\'s my first post", likesCount: 20}
        ]
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

export default state;