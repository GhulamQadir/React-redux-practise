import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

function About(props) {
    return (
        <div>
            <h1>About Page</h1>
            <br />
            <br />
            <h1>{props.totalAmount}</h1>
            <h2>After 20% Discount: {props.afterDiscount}</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalAmount: state.cart.totalAmount,
    afterDiscount: state.cart.afterDiscount
})

export default connect(mapStateToProps, null)(withRouter(About));
