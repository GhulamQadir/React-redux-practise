

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
    }]
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
    }
    return state;
}