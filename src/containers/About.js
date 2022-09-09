import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { saveInputVal, storeInputVal } from "../store/actions";

function About(props) {
    console.log(props)
    return (
        <div>
            <h1>About Page</h1>
            <br />
            <br />
            <h1>{props.totalAmount}</h1>
            <h2>After 20% Discount: {props.afterDiscount}</h2>
            <br />
            <br />
            <h1>{props.inputValueSave}</h1>
            <br />
            <input onChange={(e) => props.saveInputValue(e.target.value)} type="text" placeholder="Enter Value" style={{ height: 30, width: 200 }} />
            <button onClick={() => props.storeInputValue(props.inputValue)}>Save value</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalAmount: state.cart.totalAmount,
    afterDiscount: state.cart.afterDiscount,
    inputValue: state.auth.inputVal,
    inputValueSave: state.auth.saveInputVal
})

const mapDispatchToProps = (dispatch) => ({
    saveInputValue: (value) => dispatch(saveInputVal(value)),

    storeInputValue: (value) => dispatch(storeInputVal(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(About));
