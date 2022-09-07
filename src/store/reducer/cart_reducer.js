


const initialState = {
    cartProducts: [{ name: "T-shirt", price: 1000 }, { name: "trouser", price: 1700 }],
    totalAmount: 2700,
    afterDiscount: "",
}




export default (state = initialState, action) => {
    console.log("cart action=>>", action)
    switch (action.type) {
        case "setData":
            return ({
                ...state,
                afterDiscount: state.totalAmount - (state.totalAmount * 20 / 100)
            })
    }
    return state;
}