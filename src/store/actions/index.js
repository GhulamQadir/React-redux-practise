//                 THIS   FILE   IS   FOR   MAKING   FUNCTIONS                   /////////////

const greet = (name) => {
    return (dispatch) => {
        console.log(`Hi, ${name}`)

        dispatch({ type: "setData", name: name })   // Har function ma action ke type change hogi
    }
}

export { greet }