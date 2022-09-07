

const initialState = {
    name: "Ghulam Qadir",
    email: "ghulamqadirsakaria25@gmail.com"
}




export default (state = initialState, action) => {
    console.log("action=>>", action)
    return state;
}