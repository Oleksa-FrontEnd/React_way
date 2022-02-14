let state = {
        profilePage: {
        posts: [
            {id: 1, message: "Hou are you?", estimate: 7},
            {id: 2, message: "This is my first post", estimate: 57},
            {id: 3, message: "This is my second post", estimate: 37}
        ]
    },
        dialogsPage : {
                dialogs : [
                    {id: '1', name: 'Dimych'},
                    {id: '2', name: 'Viktor'},
                    {id: '3', name: 'Sveta'},
                    {id: '4', name: 'Max'},
                    {id: '5', name: 'Lora'},
                    {id: '6', name: 'Gleb'}
                ],
                messages : [
                    {id: '1', message: 'Hi'},
                    {id: '2', message: 'How are you?'},
                    {id: '3', message: 'Super!'}
                ]
        },
        sidebar : {
            favoritFriends: [
                {id:1, name: "one", avatar: ""},
                {id:2, name: "two", avatar: ""},
                {id:3, name: "three", avatar: ""}
            ]
        }
}

export default state;