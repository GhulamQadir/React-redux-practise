//                 THIS   FILE   IS   FOR   MAKING   FUNCTIONS                   /////////////

const greet = (name) => {
    return (dispatch) => {
        console.log(`Hi, ${name}`)

        dispatch({ type: "setData", name: name })   // Har function ma action ke type change hogi
    }
}


const addUser = (data) => {
    return (dispatch) => {
        dispatch({ type: "addUser", data: data })
    }
}


const saveInputVal = (value) => {
    return (dispatch) => {
        dispatch({ type: "saveValue", data: value })
    }
}


const storeInputVal = (value) => {
    return (dispatch) => {
        dispatch({ type: "storeValue", data: value })
    }
}


export { greet, addUser, saveInputVal, storeInputVal }
