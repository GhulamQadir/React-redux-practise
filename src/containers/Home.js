import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import '../App.css'
import { greet } from "../store/actions"

function Home(props) {
    console.log("reduxData=>>", props
    )
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <br />
            <h1>Name: {props.userName}</h1>
            <h4>Email: {props.email}</h4>
            <Link to="/about">Go to about</Link>
            <br />
            <button onClick={() => props.greet(props.userName)}>Click me !</button>
            <br />
            <br />
            <div>{
                props.cartData.map((value, index) => {
                    return <div className="cartData" key={index}>
                        <h1>{value.name}</h1>
                        <span>{value.price}</span>
                    </div>
                })
            }</div>
        </div>
    )
}


// const mapStateToProps = (state) => ({
//     name: state.name,
// })



// FOR Multiple Reducers

// for getting data from state
const mapStateToProps = (state) => ({
    userName: state.auth.name,
    email: state.auth.email,
    cartData: state.cart.cartProducts,
    totalAmount: state.cart.totalAmount,
    afterDiscount: state.cart.afterDiscount
})



// for updating state's property
const mapDispatchToProps = (dispatch) => ({
    userName: "Ghulam Qadir Sakaria",      // updating name

    greet: (name) => dispatch(greet(name))        // for adding this function into state

    // dispatch(greetUser(""))                // dispatching this function to connect it with redux
})


// export default connect(mapStateToProps, null)(withRouter(Home));

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
