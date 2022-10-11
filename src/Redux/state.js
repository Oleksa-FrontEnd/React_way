
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hou are you?", estimate: 7},
                {id: 2, message: "This is my first post", estimate: 57},
                {id: 3, message: "This is my second post", estimate: 37}
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dimych', avatar: './../images/54.png'},
                {id: '2', name: 'Viktor', avatar: './../images/bober.png'},
                {id: '3', name: 'Sveta', avatar: './../images/54.png'},
                {id: '4', name: 'Max', avatar: ''},
                {id: '5', name: 'Lora', avatar: ''},
                {id: '6', name: 'Gleb', avatar: ''}
            ],
            messages: [
                {id: '1', message: 'Hi!'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'Super!'}
            ],
            avatar: [
                {id: '1', ava: 'https://i0.wp.com/pbs.twimg.com/media/Dh6Q-IOU0AIX6xl.jpg?w=730'},
                {id: '2', ava: './../images/54.png'},
                {id: '3', ava: ""},
                {id: '4', ava: ""},
                {id: '5', ava: ""},
                {id: '6', ava: ""},
            ]
        },
        sidebar: {
            favoritFriends: [
                {id: 1, name: "Alfa", avatar: ""},
                {id: 2, name: "Beta", avatar: ""},
                {id: 3, name: "Omega", avatar: ""}
            ]
        }
    },
    getStore() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    /*addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            estimate: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ('');
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                estimate: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ('');
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;