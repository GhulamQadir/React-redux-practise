

const initialState = {
    name: "Ghulam Qadir",
    email: "ghulamqadirsakaria25@gmail.com",
    users: [{
        name: "Ghulam Qadir",
        email: "ghulamqadirsakaria25@gmail.com"
    },
    {
        name: "Abc",
        email: "abc@gmail.com"
    }],

    inputVal: "",

    saveInputVal: ""
}




export default (state = initialState, action) => {
    console.log("action=>>", action)
    switch (action.type) {
        case "setData":
            return ({
                ...state,
                name: "Ghulam Qadir Sakaria"
            })

        case "addUser":
            return ({
                ...state,
                users: [...state.users, action.data]
            })

        case "saveValue":
            return ({
                ...state,
                inputVal: action.data
            })
        case "storeValue":
            return ({
                ...state,
                saveInputVal: action.data
            })
    }
    return state;
}

// storeValue